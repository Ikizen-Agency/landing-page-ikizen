"use client";

import { useEffect, useRef, type DragEvent, type MouseEvent, type PointerEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RIBBON_ID = "projects-ribbon";

/** Below this, a press is a click on whatever sits under the pointer. */
const DRAG_THRESHOLD_PX = 6;

/** `scrollend` does not fire when nothing moves, nor in older browsers. */
const SETTLE_FALLBACK_MS = 600;

type Drag = { startX: number; startLeft: number; active: boolean };

/** The scroll position that puts each stop on the snap line. */
function stopOffsets(scroller: HTMLElement) {
  const stops = Array.from(scroller.firstElementChild?.children ?? []) as HTMLElement[];
  return stops.map((stop) => stop.offsetLeft - parseFloat(getComputedStyle(stop).scrollMarginInlineStart));
}

function nearestIndex(offsets: number[], left: number) {
  return offsets.reduce(
    (best, offset, index) => (Math.abs(offset - left) < Math.abs(offsets[best] - left) ? index : best),
    0,
  );
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
}

/** A button about to disable hands focus over, so keyboard users are not dropped. */
function setAtEnd(button: HTMLButtonElement, opposite: HTMLButtonElement, atEnd: boolean) {
  if (atEnd && document.activeElement === button) opposite.focus({ preventScroll: true });
  button.disabled = atEnd;
}

/**
 * Touch, trackpad and keys scroll natively. JS only adds what the browser lacks, the
 * buttons and the mouse drag, and it writes to the DOM directly so scrolling never
 * re-renders. `disabled` is never a prop: React drops clicks by the prop's value, so a
 * rendered `disabled` would keep muting a button the DOM has since enabled.
 */
export function ProjectsRibbon({
  ribbonLabel,
  previousLabel,
  nextLabel,
  children,
}: {
  ribbonLabel: string;
  previousLabel: string;
  nextLabel: string;
  children: React.ReactNode;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const dragRef = useRef<Drag | null>(null);
  const draggedRef = useRef(false);
  const endSettleRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const previous = previousRef.current;
    const next = nextRef.current;
    if (!scroller || !previous || !next) return;

    let frame = 0;

    const write = () => {
      frame = 0;
      const { scrollLeft, scrollWidth, clientWidth } = scroller;
      const atStart = scrollLeft <= 1;
      const atEnd = scrollLeft >= scrollWidth - clientWidth - 1;

      // An instant scroll can cross both ends at once, and a disabled button takes no focus.
      if (!atStart) previous.disabled = false;
      if (!atEnd) next.disabled = false;
      setAtEnd(previous, next, atStart);
      setAtEnd(next, previous, atEnd);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(write);
    };

    schedule();
    scroller.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      endSettleRef.current?.();
    };
  }, []);

  const step = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Read against the live position, so a press mid-scroll still moves the right way.
    const { scrollLeft } = scroller;
    const offsets = stopOffsets(scroller);
    const target =
      direction === 1
        ? offsets.find((offset) => offset > scrollLeft + 1)
        : offsets.findLast((offset) => offset < scrollLeft - 1);
    if (target !== undefined) scroller.scrollTo({ left: target, behavior: scrollBehavior() });
  };

  /** Glides to a stop with snapping still off, which would otherwise jump there. */
  const settle = (scroller: HTMLElement, left: number) => {
    const end = () => {
      clearTimeout(fallback);
      scroller.removeEventListener("scrollend", end);
      delete scroller.dataset.dragging;
      endSettleRef.current = null;
    };
    const fallback = setTimeout(end, SETTLE_FALLBACK_MS);

    endSettleRef.current = end;
    scroller.addEventListener("scrollend", end);
    scroller.scrollTo({ left, behavior: scrollBehavior() });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    endSettleRef.current?.();
    draggedRef.current = false;
    dragRef.current = { startX: event.clientX, startLeft: event.currentTarget.scrollLeft, active: false };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;

    // The button came up outside the ribbon, so no pointerup reached it.
    if (event.buttons === 0) {
      dragRef.current = null;
      return;
    }

    const scroller = event.currentTarget;
    const distance = event.clientX - drag.startX;

    if (!drag.active) {
      if (Math.abs(distance) < DRAG_THRESHOLD_PX) return;

      drag.active = true;
      draggedRef.current = true;
      scroller.setPointerCapture(event.pointerId);
      scroller.dataset.dragging = "";
      window.getSelection()?.removeAllRanges();
    }

    scroller.scrollLeft = drag.startLeft - distance;
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    dragRef.current = null;
    if (!drag?.active) return;

    const scroller = event.currentTarget;
    const offsets = stopOffsets(scroller);
    // Doubling the distance lets a deliberate drag advance without crossing the midpoint.
    const projected = scroller.scrollLeft + (scroller.scrollLeft - drag.startLeft);
    settle(scroller, offsets[nearestIndex(offsets, projected)]);
  };

  /**
   * The click that ends a drag lands right after capture is released, in the same task.
   * Waiting one task swallows that click and no later one, such as a keyboard activation.
   */
  const clearDraggedSoon = () => {
    setTimeout(() => {
      draggedRef.current = false;
    });
  };

  const handlePointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    handlePointerEnd(event);
    clearDraggedSoon();
  };

  const handleLostPointerCapture = (event: PointerEvent<HTMLDivElement>) => {
    // Still tracking means capture went away without a pointerup, so no click will follow.
    if (dragRef.current) handlePointerEnd(event);
    clearDraggedSoon();
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!draggedRef.current) return;

    draggedRef.current = false;
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => event.preventDefault();

  return (
    <>
      <div className="ribbon-controls mx-auto mt-8 flex max-w-site justify-end gap-2 box-content px-gutter noscript:hidden lg:-mt-12">
        <Button
          ref={previousRef}
          type="button"
          variant="outline"
          size="icon"
          aria-label={previousLabel}
          aria-controls={RIBBON_ID}
          onClick={() => step(-1)}
        >
          <ArrowLeft aria-hidden="true" />
        </Button>
        <Button
          ref={nextRef}
          type="button"
          variant="outline"
          size="icon"
          aria-label={nextLabel}
          aria-controls={RIBBON_ID}
          onClick={() => step(1)}
        >
          <ArrowRight aria-hidden="true" />
        </Button>
      </div>

      <div
        ref={scrollerRef}
        id={RIBBON_ID}
        role="region"
        aria-label={ribbonLabel}
        tabIndex={0}
        className="ribbon mt-8 lg:mt-12"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerCancel}
        onLostPointerCapture={handleLostPointerCapture}
        onClickCapture={handleClickCapture}
        onDragStart={handleDragStart}
      >
        <ol className="ribbon-track">{children}</ol>
      </div>
    </>
  );
}
