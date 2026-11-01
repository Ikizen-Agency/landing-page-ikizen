/** Four interlocking rings forming the ikigai diagram. `icon.svg` repeats this geometry. */
const RINGS = [
  { cx: 249, cy: 164, rx: 105, ry: 132 },
  { cx: 249, cy: 334, rx: 105, ry: 132 },
  { cx: 189, cy: 249, rx: 107, ry: 107 },
  { cx: 309, cy: 249, rx: 107, ry: 107 },
];

const VIEW_BOX_WIDTH = 380;
const VIEW_BOX_HEIGHT = 474;
const VIEW_BOX = `59 12 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`;

const STROKE_WIDTH = 10;
/** The drawn stroke thickens at small sizes so the rings never render below this. */
const MIN_STROKE_PX = 1.25;

/**
 * Takes no hooks because next/og renders it too. Pages that inline it more than once
 * must pass a distinct `gradientId`, since SVG ids share the document scope.
 */
export function Mark({
  height,
  gradientId = "ikizen-gold",
  className,
}: {
  height: number;
  gradientId?: string;
  className?: string;
}) {
  const strokeWidth = Math.max(STROKE_WIDTH, (MIN_STROKE_PX * VIEW_BOX_HEIGHT) / height);

  return (
    <svg
      viewBox={VIEW_BOX}
      width={(height * VIEW_BOX_WIDTH) / VIEW_BOX_HEIGHT}
      height={height}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="170" y1="12" x2="330" y2="486">
          <stop offset="0" stopColor="#FDE095" />
          <stop offset="0.45" stopColor="#E9B25A" />
          <stop offset="1" stopColor="#B9812F" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${gradientId})`} strokeWidth={strokeWidth}>
        {RINGS.map((ring) => (
          <ellipse key={`${ring.cx}-${ring.cy}`} {...ring} />
        ))}
      </g>
    </svg>
  );
}
