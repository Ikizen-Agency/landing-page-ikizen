import { useId } from "react";
import { Mark } from "@/components/brand/Mark";

/** `compact` drops the "studio" suffix below 360px, where the navbar needs its width. */
export function Wordmark({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  // The navbar and footer both render this, so each needs its own gradient id.
  const gradientId = `ikizen-gold-${useId().replace(/\W/g, "")}`;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="sr-only">Ikizen Studio</span>
      <Mark height={28} gradientId={gradientId} />
      <span aria-hidden="true" className="font-display text-2xl font-bold leading-none tracking-tight">
        ikizen
      </span>
      <span aria-hidden="true" className={`font-mono text-label uppercase text-paper-dim self-end ${compact ? "max-[22.5rem]:hidden" : ""}`}>
        studio
      </span>
    </span>
  );
}
