"use client";

import { useEffect } from "react";
import { trackElement } from "@/lib/analytics";

/**
 * One listener for every `data-track` link, so CTAs can stay server components.
 * It listens in the bubble phase, which skips the click the ribbon cancels after a drag.
 */
export function TrackClicks() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const tracked = event.target.closest<HTMLElement>("[data-track]");
      if (tracked) trackElement(tracked);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
