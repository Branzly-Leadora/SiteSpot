// SiteSpot brand mark — a faceted 3D wireframe crystal: an elongated prism body
// capped by a point at top and bottom, laced with facet diagonals and lit by a
// glowing core node at its centre. Pure line art in currentColor (no fill, no
// background) so it inverts cleanly on light nav tiles and dark cards alike.
//
// Two levels of detail share one viewBox (so the layout never shifts): the full
// lattice reads best at large sizes, while a decluttered variant stays legible
// down to the 18 px nav / footer marks. LogoMark picks by `size` automatically.
const FULL = [
  // four vertical prism edges
  [8, 36.9, 8, 91.46], [53.48, 31.23, 53.48, 85.79], [78.69, 41.46, 78.69, 96.02], [33.21, 47.13, 33.21, 101.7],
  // top facet ring
  [8, 36.9, 53.48, 31.23], [53.48, 31.23, 78.69, 41.46], [78.69, 41.46, 33.21, 47.13], [33.21, 47.13, 8, 36.9],
  // bottom facet ring
  [8, 91.46, 53.48, 85.79], [53.48, 85.79, 78.69, 96.02], [78.69, 96.02, 33.21, 101.7], [33.21, 101.7, 8, 91.46],
  // spokes to the top and bottom points
  [43.35, 8, 8, 36.9], [43.35, 8, 53.48, 31.23], [43.35, 8, 78.69, 41.46], [43.35, 8, 33.21, 47.13],
  [43.35, 124.92, 8, 91.46], [43.35, 124.92, 53.48, 85.79], [43.35, 124.92, 78.69, 96.02], [43.35, 124.92, 33.21, 101.7],
  // face diagonals weaving through the body
  [8, 36.9, 53.48, 85.79], [53.48, 31.23, 8, 91.46], [53.48, 31.23, 78.69, 96.02], [78.69, 41.46, 53.48, 85.79],
  [78.69, 41.46, 33.21, 101.7], [33.21, 47.13, 78.69, 96.02], [33.21, 47.13, 8, 91.46], [8, 36.9, 33.21, 101.7],
]
const MINI = [
  // four vertical prism edges
  [8, 36.9, 8, 91.46], [53.48, 31.23, 53.48, 85.79], [78.69, 41.46, 78.69, 96.02], [33.21, 47.13, 33.21, 101.7],
  // top + bottom facet rings
  [8, 36.9, 53.48, 31.23], [53.48, 31.23, 78.69, 41.46], [78.69, 41.46, 33.21, 47.13], [33.21, 47.13, 8, 36.9],
  [8, 91.46, 53.48, 85.79], [53.48, 85.79, 78.69, 96.02], [78.69, 96.02, 33.21, 101.7], [33.21, 101.7, 8, 91.46],
  // spokes to the top and bottom points
  [43.35, 8, 8, 36.9], [43.35, 8, 53.48, 31.23], [43.35, 8, 78.69, 41.46], [43.35, 8, 33.21, 47.13],
  [43.35, 124.92, 8, 91.46], [43.35, 124.92, 53.48, 85.79], [43.35, 124.92, 78.69, 96.02], [43.35, 124.92, 33.21, 101.7],
  // two long diagonals crossing over the core
  [8, 36.9, 78.69, 96.02], [78.69, 41.46, 8, 91.46],
]
export function LogoMark({ size = 18, ...rest }) {
  const L = size >= 40 ? FULL : MINI
  return (
    <svg
      viewBox="0 0 86.69 132.92"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={size >= 40 ? 2.4 : 3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {L.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />)}
      <circle cx="43.35" cy="66.46" r="6.2" fill="currentColor" stroke="none" />
    </svg>
  )
}
