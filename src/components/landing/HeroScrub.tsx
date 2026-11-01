"use client";

import { useEffect, useRef } from "react";

/** Must match the media query that pins the stage in globals.css, minus `scripting`. */
const PIN_QUERY = "(prefers-reduced-motion: no-preference) and (min-height: 34rem)";

/** The final word holds for the last stretch of the pinned scroll. */
const SCRUB_END = 0.85;

/**
 * Writes scroll position to --progress and nothing else: no React state, so
 * scrolling never re-renders. While PIN_QUERY does not match, the property is left
 * unset and the CSS default, the final composition, applies.
 */
export function HeroScrub({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const stage = track?.firstElementChild as HTMLElement | null;
    if (!track || !stage) return;

    const pin = window.matchMedia(PIN_QUERY);
    let frame = 0;

    const write = () => {
      frame = 0;
      const range = track.offsetHeight - stage.offsetHeight;
      if (!pin.matches || range <= 0) {
        track.style.removeProperty("--progress");
        return;
      }
      const scrolled = -track.getBoundingClientRect().top;
      const progress = Math.min(Math.max(scrolled / (range * SCRUB_END), 0), 1);
      track.style.setProperty("--progress", progress.toFixed(4));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(write);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    pin.addEventListener("change", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      pin.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <div ref={trackRef} className="signature">
      {children}
    </div>
  );
}
