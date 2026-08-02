import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: Number(process.env.PORT) || 5173, strictPort: false },
  build: {
    // every browser that can run this site supports ES2020 — the default target
    // ships transpiled fallbacks (optional chaining, nullish coalescing, async
    // generators) that nothing here needs
    target: 'es2020',
    cssTarget: 'chrome90',
    sourcemap: false,
    assetsInlineLimit: 2048,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 700,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Split vendor code that never changes away from app code that does, so
        // a copy tweak doesn't invalidate React in everyone's browser cache.
        // framer-motion is deliberately absent: forcing it into one chunk would
        // undo the LazyMotion split and pull the whole animation engine back
        // into the critical path. Rollup already separates its lazy half.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-dom') || id.includes('/react/') || id.includes('scheduler')) return 'react'
          if (id.includes('lucide-react')) return 'icons'
          if (id.includes('lenis')) return 'lenis'
        },
      },
    },
  },
  esbuild: {
    // debugger statements from development shouldn't ride along to users
    drop: ['debugger'],
    pure: ['console.debug', 'console.trace'],
    legalComments: 'none',
  },
})
