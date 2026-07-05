// SiteSpot brand mark — a faceted geometric "S" crystal: an upper and a lower
// diamond facet that pinch together at a central node, giving an angular S /
// hourglass. Pure line art in currentColor (no fill, no background), so it
// inverts cleanly on light nav tiles and dark cards alike.
const L = [
  // upper diamond (top peak leans left, right vertex reaches out)
  [40, 6, 72, 30], [16, 28, 40, 6],
  // lower diamond (bottom peak leans right, left vertex reaches out)
  [68, 56, 44, 80], [44, 80, 12, 54],
  // facets crossing each diamond
  [72, 30, 16, 28], [68, 56, 12, 54],
  // long weave diagonals through the waist
  [40, 6, 68, 56], [44, 80, 16, 28],
  // spokes converging on the centre node (vertex → node edge)
  [40, 6, 41.5, 37.1], [44, 80, 42.5, 46.9],
  [72, 30, 46.8, 40.0], [12, 54, 37.2, 44.0],
  [16, 28, 37.4, 39.7], [68, 56, 46.6, 44.3],
]
export function LogoMark({ size = 18, ...rest }) {
  return (
    <svg
      viewBox="0 0 84 86"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {L.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />)}
      <circle cx="42" cy="43" r="5" />
    </svg>
  )
}
