import { createRoot } from 'react-dom/client'
import { LazyMotion, MotionConfig } from 'framer-motion'
import App from './App.jsx'
import './index.css'

// The animation features load as a separate chunk (see motionFeatures.js) so the
// first paint doesn't wait on them. `strict` makes any stray `motion.*` usage
// throw instead of silently pulling the full library back into the main bundle.
const loadFeatures = () => import('./motionFeatures.js').then((m) => m.default)

// reducedMotion="never" forces every Framer Motion animation to run even when
// the device/OS has "reduce motion" turned on — the site is meant to always animate.
createRoot(document.getElementById('root')).render(
  <LazyMotion features={loadFeatures} strict>
    <MotionConfig reducedMotion="never">
      <App />
    </MotionConfig>
  </LazyMotion>,
)
