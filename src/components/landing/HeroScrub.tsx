"use client";

import { useEffect, useRef } from "react";

/** Must match the media query that pins the stage in globals.css, minus `scripting`. */
const PIN_QUERY = "(prefers-reduced-motion: no-preference) and (min-height: 34rem)";

/** The final word holds for the last stretch of the pinned scroll. */
const SCRUB_END = 0.85;

/** Time constants of the ease, in ms. A wheel moves in steps; a finger is already continuous. */
const EASE_WHEEL_MS = 90;
const EASE_TOUCH_MS = 30;
const TOUCH_QUERY = "(pointer: coarse)";

/** Below this gap the ease snaps to its target, so it settles on the exact value. */
const SETTLE_EPSILON = 0.0005;

/** Elapsed time assumed for the first frame after the loop wakes from rest. */
const FIRST_FRAME_MS = 1000 / 60;

/**
 * Eases --progress toward the scroll position and writes nothing else: no React
 * state, so scrolling never re-renders. The rAF loop runs only until it settles, and
 * the first frame jumps, so loading mid-page does not play a catch-up. While
 * PIN_QUERY does not match, the property is left unset and the CSS default, the
 * final composition, applies.
 */
export function HeroScrub({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const stage = track?.firstElementChild as HTMLElement | null;
    if (!track || !stage) return;

    const pin = window.matchMedia(PIN_QUERY);
    const touch = window.matchMedia(TOUCH_QUERY);
    let frame = 0;
    let lastFrame = 0;
    let shown: number | null = null;

    const tick = (now: number) => {
      frame = 0;
      const range = track.offsetHeight - stage.offsetHeight;
      if (!pin.matches || range <= 0) {
        shown = null;
        lastFrame = 0;
        track.style.removeProperty("--progress");
        return;
      }

      const scrolled = -track.getBoundingClientRect().top;
      const target = Math.min(Math.max(scrolled / (range * SCRUB_END), 0), 1);

      if (shown === null) {
        shown = target;
      } else {
        const elapsed = lastFrame ? now - lastFrame : FIRST_FRAME_MS;
        const timeConstant = touch.matches ? EASE_TOUCH_MS : EASE_WHEEL_MS;
        shown += (target - shown) * (1 - Math.exp(-elapsed / timeConstant));
        if (Math.abs(target - shown) < SETTLE_EPSILON) shown = target;
      }
      track.style.setProperty("--progress", shown.toFixed(4));

      if (shown === target) {
        lastFrame = 0;
      } else {
        lastFrame = now;
        frame = requestAnimationFrame(tick);
      }
    };

    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    // The browser restores scroll position as late as `load`, possibly after hydration.
    const jump = () => {
      shown = null;
      wake();
    };

    wake();
    window.addEventListener("scroll", wake, { passive: true });
    window.addEventListener("resize", wake, { passive: true });
    window.addEventListener("pageshow", jump);
    pin.addEventListener("change", wake);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", wake);
      window.removeEventListener("resize", wake);
      window.removeEventListener("pageshow", jump);
      pin.removeEventListener("change", wake);
    };
  }, []);

  return (
    <div ref={trackRef} className="signature">
      {children}
    </div>
  );
}
