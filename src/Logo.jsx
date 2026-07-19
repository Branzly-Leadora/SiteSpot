import { useId } from 'react'

// SiteSpot brand mark — a luminous 3D wireframe crystal traced from the brand
// reference: a shallow pyramid peak on top of an X-braced box body, long
// vertical side edges, spokes converging into a glowing core orb, and a wide
// shallow point below. Rendered self-contained (its own blue glow, glints and
// gradient), so it lives on the dark "space" badge tiles used across the site.
//
// Two levels of detail share one viewBox so the layout never shifts: the full
// lattice (rim diagonals + side-face X braces + vertex glints) shines at large
// sizes, a decluttered variant stays legible down to the nav / footer marks.
const FULL_L = [[45.72,10,84.39,32.92],[84.39,32.92,61.52,48.5],[90,102.55,63.22,101.94],[45.72,123.01,90,102.55],[84.39,32.92,90,102.55],[84.39,32.92,45.72,66.07],[45.72,66.07,90,102.55],[45.72,10,61.52,48.5],[61.52,48.5,13.74,44.56],[63.22,101.94,10,102.09],[45.72,123.01,63.22,101.94],[61.52,48.5,63.22,101.94],[61.52,48.5,45.72,66.07],[45.72,66.07,63.22,101.94],[45.72,10,13.74,44.56],[13.74,44.56,23.07,26.09],[10,102.09,19.4,102.83],[45.72,123.01,10,102.09],[13.74,44.56,10,102.09],[13.74,44.56,45.72,66.07],[45.72,66.07,10,102.09],[45.72,10,23.07,26.09],[23.07,26.09,84.39,32.92],[19.4,102.83,90,102.55],[45.72,123.01,19.4,102.83],[23.07,26.09,19.4,102.83],[23.07,26.09,45.72,66.07],[45.72,66.07,19.4,102.83],[84.39,32.92,63.22,101.94],[84.39,32.92,19.4,102.83],[61.52,48.5,10,102.09],[61.52,48.5,90,102.55],[13.74,44.56,19.4,102.83],[13.74,44.56,63.22,101.94],[23.07,26.09,90,102.55],[23.07,26.09,10,102.09],[84.39,32.92,13.74,44.56],[61.52,48.5,23.07,26.09],[90,102.55,10,102.09],[63.22,101.94,19.4,102.83]]
const MINI_L = [[45.72,10,84.39,32.92],[84.39,32.92,61.52,48.5],[90,102.55,63.22,101.94],[45.72,123.01,90,102.55],[84.39,32.92,90,102.55],[84.39,32.92,45.72,66.07],[45.72,66.07,90,102.55],[45.72,10,61.52,48.5],[61.52,48.5,13.74,44.56],[63.22,101.94,10,102.09],[45.72,123.01,63.22,101.94],[61.52,48.5,63.22,101.94],[61.52,48.5,45.72,66.07],[45.72,66.07,63.22,101.94],[45.72,10,13.74,44.56],[13.74,44.56,23.07,26.09],[10,102.09,19.4,102.83],[45.72,123.01,10,102.09],[13.74,44.56,10,102.09],[13.74,44.56,45.72,66.07],[45.72,66.07,10,102.09],[45.72,10,23.07,26.09],[23.07,26.09,84.39,32.92],[19.4,102.83,90,102.55],[45.72,123.01,19.4,102.83],[23.07,26.09,19.4,102.83],[23.07,26.09,45.72,66.07],[45.72,66.07,19.4,102.83]]
// vertex glints — the apexes and rim corners that catch the light
const GLINTS = [[45.72,10],[45.72,123.01],[84.39,32.92],[61.52,48.5],[13.74,44.56],[23.07,26.09],[90,102.55],[63.22,101.94],[19.4,102.83]]
const CX = 45.72, CY = 66.07, ORB = 9.5

export function LogoMark({ size = 18, ...rest }) {
  const raw = useId()
  const uid = raw.replace(/[^a-zA-Z0-9]/g, '')
  const big = size >= 40
  const L = big ? FULL_L : MINI_L
  return (
    <svg
      viewBox="0 0 100 133.01"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      {...rest}
    >
      <defs>
        <radialGradient id={`orb${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2b477e" />
          <stop offset="34%" stopColor="#5e83d6" />
          <stop offset="62%" stopColor="#eef4ff" />
          <stop offset="82%" stopColor="#cfdeff" />
          <stop offset="100%" stopColor="#4066b8" stopOpacity="0" />
        </radialGradient>
        <filter id={`edge${uid}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.1" />
        </filter>
        <filter id={`halo${uid}`} x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id={`glint${uid}`} x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>
      {/* soft blue bloom under the whole cage */}
      <g stroke="#9fc0ff" strokeWidth={big ? 3.4 : 5.2} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" filter={`url(#edge${uid})`}>
        {L.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />)}
      </g>
      {/* crisp luminous edges */}
      <g stroke="#eef4ff" strokeWidth={big ? 1.6 : 2.6} fill="none" strokeLinecap="round" strokeLinejoin="round">
        {L.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />)}
      </g>
      {/* glowing core halo + orb */}
      <circle cx={CX} cy={CY} r={ORB * 1.9} fill="#6f9bff" opacity="0.6" filter={`url(#halo${uid})`} />
      {big && GLINTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.4" fill="#ffffff" filter={`url(#glint${uid})`} />
      ))}
      <circle cx={CX} cy={CY} r={ORB} fill={`url(#orb${uid})`} />
    </svg>
  )
}
