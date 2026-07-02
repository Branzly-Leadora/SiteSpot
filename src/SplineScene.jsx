import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

// Lazy-loaded Spline 3D scene with a lightweight loading fallback.
export function SplineScene({ scene, className }) {
  return (
    <Suspense
      fallback={
        <div className="spline-fallback">
          <span className="loader" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
