import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { FAQ } from './src/faq.js'

// Dvě věci, které musí být přímo v HTML, ne až v Reactu:
//
// 1) Strukturovaná data FAQPage. Roboti jazykových modelů (GPTBot, ClaudeBot,
//    PerplexityBot) většinou nespouštějí JavaScript, takže cokoliv vloží až
//    React, to neuvidí. Generuje se ze stejného pole, které vykresluje stránka,
//    takže značkování nemůže utéct od viditelného textu.
// 2) Měřicí skript. Načítá se jen když je nastavené VITE_UMAMI_WEBSITE_ID,
//    takže lokální vývoj a náhledy nezanáší data. Nastavuje se v proměnných
//    prostředí na Vercelu, ne v repozitáři.
function headTags(umamiId) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return {
    name: 'sitespot-head-tags',
    transformIndexHtml: {
      order: 'pre',
      handler() {
        const tags = [{
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          // `<` se escapuje, aby řetězec v datech nemohl předčasně ukončit blok
          children: JSON.stringify(faqLd).replace(/</g, '\\u003c'),
          injectTo: 'head',
        }]

        if (umamiId) {
          tags.push({
            tag: 'script',
            attrs: { defer: true, src: 'https://cloud.umami.is/script.js', 'data-website-id': umamiId },
            injectTo: 'head',
          })
        }

        return tags
      },
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    headTags(loadEnv(mode, process.cwd(), 'VITE_').VITE_UMAMI_WEBSITE_ID || ''),
  ],
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
}))
