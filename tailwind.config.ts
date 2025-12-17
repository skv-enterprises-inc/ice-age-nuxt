import type { Config } from 'tailwindcss'

export default {
  darkMode: 'media', // Use system preference
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './app/**/*.{js,vue,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

