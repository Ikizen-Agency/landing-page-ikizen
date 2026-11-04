"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

/** Half a stop on screen counts as watching it; a sliver at the edge of the ribbon does not. */
const VISIBLE_RATIO = 0.5;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION).matches;
}

/**
 * The poster is a lazy server-rendered image, so it works without scripts and costs nothing
 * until it nears the screen. The video stays transparent over it until a frame really plays,
 * so a refused autoplay or a failed load simply leaves the poster. The source is attached
 * from an effect, never rendered, so the file is not requested before the stop is on screen.
 *
 * With reduced motion nothing starts on its own: native controls are the way in, and the
 * `poster` attribute is what they sit on, since `preload="none"` paints no frame.
 */
export function ProjectVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeToReducedMotion, prefersReducedMotion, () => false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attachSource = () => {
      if (!video.hasAttribute("src")) video.src = src;
    };

    if (reducedMotion) attachSource();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }

        if (reducedMotion) return;

        attachSource();
        // Rejects on refused autoplay, or when a pause interrupts it. The poster covers both.
        video.play().catch(() => {});
      },
      { threshold: VISIBLE_RATIO },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [src, reducedMotion]);

  return (
    <>
      <Image src={poster} alt="" fill sizes="(min-width: 64rem) 54rem, 85vw" className="object-cover" />
      <video
        ref={videoRef}
        aria-label={label}
        muted
        loop
        playsInline
        preload="none"
        poster={reducedMotion ? poster : undefined}
        controls={reducedMotion}
        onPlaying={() => setPlaying(true)}
        onError={() => setPlaying(false)}
        className={`absolute inset-0 size-full object-cover ${playing || reducedMotion ? "" : "opacity-0"}`}
      />
    </>
  );
}
