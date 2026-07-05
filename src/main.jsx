import React from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import './index.css'

// reducedMotion="never" forces every Framer Motion animation to run even when
// the device/OS has "reduce motion" turned on — the site is meant to always animate.
createRoot(document.getElementById('root')).render(
  <MotionConfig reducedMotion="never">
    <App />
  </MotionConfig>,
)
