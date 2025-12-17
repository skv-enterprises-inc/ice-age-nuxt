// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  // Static site generation for GitHub Pages
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      failOnError: false
    },
    compressPublicAssets: true,
    minify: true
  },
  
  // Ensure proper static generation
  ssr: true,
  
  // Optimize for static generation
  experimental: {
    payloadExtraction: false
  },
  
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  
  // GitHub Pages Configuration
  // For project pages, use '/repo-name/', for user/org pages use '/'
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/ice-age-nuxt/',
    buildAssetsDir: '/_nuxt/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  
  // Optimize CSS loading for static generation
  vite: {
    css: {
      devSourcemap: true
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router']
    }
  },
  
  // Ensure CSS is properly processed
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  
  // Runtime Config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: 'https://iceageheatingandac.com'
    }
  }
})
