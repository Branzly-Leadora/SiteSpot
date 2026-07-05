import { Suspense, lazy, Component } from 'react'
import { Bot } from 'lucide-react'

const Spline = lazy(() => import('@splinetool/react-spline'))

// Static poster shown while loading and if the scene can't load at all.
function SplinePoster({ loading = false }) {
  return (
    <div className="spline-poster" aria-hidden>
      <span className="sp-glow" />
      <span className="sp-ring r1" /><span className="sp-ring r2" />
      <span className="sp-core">{loading ? <span className="loader" /> : <Bot size={34} strokeWidth={1.6} />}</span>
    </div>
  )
}

// react-spline surfaces a failed scene load as a thrown (rejected) promise, which
// would otherwise unmount the whole React tree. This boundary keeps a network
// hiccup from blanking the page — it falls back to the static poster instead.
class SplineBoundary extends Component {
  constructor(props) { super(props); this.state = { failed: false } }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? this.props.fallback : this.props.children }
}

// Lazy-loaded Spline 3D scene with a graceful loading + error fallback.
export function SplineScene({ scene, className }) {
  return (
    <SplineBoundary fallback={<SplinePoster />}>
      <Suspense fallback={<SplinePoster loading />}>
        <Spline scene={scene} className={className} />
      </Suspense>
    </SplineBoundary>
  )
}
