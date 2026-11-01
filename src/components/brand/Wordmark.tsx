/**
 * The Ikizen mark: an "i" (ikigai, the reason for being) standing past a lower
 * step (kaizen, continuous improvement), so the shape rises left to right. Drawn inside
 * a 32x32 box so it stays crisp at 16px. `icon.svg` repeats this same geometry.
 */
export const MARK_PATH = "M18 4h6v6h-6zM18 12h6v16h-6zM8 20h6v8H8z";
const MARK_VIEW_BOX = "8 4 16 24";

export function Mark({
  height,
  color = "currentColor",
  className,
}: {
  height: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox={MARK_VIEW_BOX}
      width={(height * 2) / 3}
      height={height}
      className={className}
      aria-hidden="true"
    >
      <path d={MARK_PATH} fill={color} />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="sr-only">Ikizen Studio</span>
      <Mark height={24} className="text-amber" />
      <span aria-hidden="true" className="font-display text-2xl font-bold leading-none tracking-tight">
        ikizen
      </span>
      <span aria-hidden="true" className="font-mono text-label uppercase text-paper-dim self-end">
        studio
      </span>
    </span>
  );
}
