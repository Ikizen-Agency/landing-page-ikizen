import { useId } from "react";
import { Mark } from "@/components/brand/Mark";

export function Wordmark({ className = "" }: { className?: string }) {
  // The navbar and footer both render this, so each needs its own gradient id.
  const gradientId = `ikizen-gold-${useId().replace(/\W/g, "")}`;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="sr-only">Ikizen Studio</span>
      <Mark height={28} gradientId={gradientId} />
      <span aria-hidden="true" className="font-display text-2xl font-bold leading-none tracking-tight">
        ikizen
      </span>
      <span aria-hidden="true" className="font-mono text-label uppercase text-paper-dim self-end">
        studio
      </span>
    </span>
  );
}
