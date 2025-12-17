// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-17',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  // Static Site Generation (SSG) Configuration
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },
  
  // GitHub Pages Configuration
  // If deploying to a project page (not user/organization page), set base to '/repo-name/'
  // For user/organization pages, use '/' or leave empty
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  
  // Runtime Config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://iceageheatingandac.com'
    }
  }
})