import { useId } from 'react'

// SiteSpot brand mark — a luminous 3D wireframe crystal floating in space: two
// counter-rotated cages (a tall upper cell tapering to a top point, a wider
// lower cell tapering down) laced with long diagonals and lit by a glowing core
// orb at the centre. Rendered self-contained (its own blue glow, glints and
// gradient), so it lives on the dark "space" badge tiles used across the site.
//
// Two levels of detail share one viewBox so the layout never shifts: the full
// lattice (with vertex glints) shines at large sizes, a decluttered variant
// stays legible down to the nav / footer marks. LogoMark picks by `size`.
const FULL_L = [[47.2,13,76.77,66.37],[76.77,66.37,37.79,69.8],[47.2,145.67,87,100.94],[87,100.94,62.74,103.11],[76.77,66.37,87,100.94],[76.77,66.37,62.74,103.11],[76.77,66.37,13,102.47],[47.2,13,37.79,69.8],[37.79,69.8,14.86,62.11],[47.2,145.67,62.74,103.11],[62.74,103.11,13,102.47],[37.79,69.8,62.74,103.11],[37.79,69.8,13,102.47],[37.79,69.8,25.97,99.92],[47.2,13,14.86,62.11],[14.86,62.11,59.43,57.24],[47.2,145.67,13,102.47],[13,102.47,25.97,99.92],[14.86,62.11,13,102.47],[14.86,62.11,25.97,99.92],[14.86,62.11,87,100.94],[47.2,13,59.43,57.24],[59.43,57.24,76.77,66.37],[47.2,145.67,25.97,99.92],[25.97,99.92,87,100.94],[59.43,57.24,25.97,99.92],[59.43,57.24,87,100.94],[59.43,57.24,62.74,103.11]]
const MINI_L = [[47.2,13,76.77,66.37],[76.77,66.37,37.79,69.8],[47.2,145.67,87,100.94],[87,100.94,62.74,103.11],[76.77,66.37,87,100.94],[76.77,66.37,62.74,103.11],[47.2,13,37.79,69.8],[37.79,69.8,14.86,62.11],[47.2,145.67,62.74,103.11],[62.74,103.11,13,102.47],[37.79,69.8,62.74,103.11],[37.79,69.8,13,102.47],[47.2,13,14.86,62.11],[14.86,62.11,59.43,57.24],[47.2,145.67,13,102.47],[13,102.47,25.97,99.92],[14.86,62.11,13,102.47],[14.86,62.11,25.97,99.92],[47.2,13,59.43,57.24],[59.43,57.24,76.77,66.37],[47.2,145.67,25.97,99.92],[25.97,99.92,87,100.94],[59.43,57.24,25.97,99.92],[59.43,57.24,87,100.94]]
// vertex glints — the outer apexes and the two ring corners that catch the light
const GLINTS = [[47.2,13],[47.2,145.67],[76.77,66.37],[14.86,62.11],[59.43,57.24],[87,100.94],[13,102.47]]
const CX = 47.2, CY = 82.87, ORB = 8.6

export function LogoMark({ size = 18, ...rest }) {
  const raw = useId()
  const uid = raw.replace(/[^a-zA-Z0-9]/g, '')
  const big = size >= 40
  const L = big ? FULL_L : MINI_L
  return (
    <svg
      viewBox="0 0 100 158.67"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      {...rest}
    >
      <defs>
        <radialGradient id={`orb${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3355a0" />
          <stop offset="30%" stopColor="#6f96ea" />
          <stop offset="58%" stopColor="#eaf1ff" />
          <stop offset="80%" stopColor="#bcd2ff" />
          <stop offset="100%" stopColor="#4066b8" stopOpacity="0" />
        </radialGradient>
        <filter id={`edge${uid}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <filter id={`halo${uid}`} x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <filter id={`glint${uid}`} x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="1.9" />
        </filter>
      </defs>
      {/* soft blue bloom under the whole cage */}
      <g stroke="#9fc0ff" strokeWidth="5.6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" filter={`url(#edge${uid})`}>
        {L.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />)}
      </g>
      {/* crisp luminous edges */}
      <g stroke="#eef4ff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {L.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />)}
      </g>
      {/* glowing core halo + orb */}
      <circle cx={CX} cy={CY} r={ORB * 2.2} fill="#6f9bff" opacity="0.55" filter={`url(#halo${uid})`} />
      {big && GLINTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.2" fill="#ffffff" filter={`url(#glint${uid})`} />
      ))}
      <circle cx={CX} cy={CY} r={ORB} fill={`url(#orb${uid})`} />
    </svg>
  )
}
