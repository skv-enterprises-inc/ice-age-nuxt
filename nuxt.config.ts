// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  // Static site generation for GitHub Pages
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
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
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  
  // GitHub Pages Configuration
  // If deploying to a project page (not user/organization page), set base to '/repo-name/'
  // For user/organization pages, use '/' or leave empty
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
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
              vendor: ['vue', 'vue-router'],
              utils: ['@vueuse/core']
            }
          }
        }
      },
      optimizeDeps: {
        include: ['vue', 'vue-router', '@vueuse/core']
      }
    },
 // Ensure CSS is properly processed
 postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
})