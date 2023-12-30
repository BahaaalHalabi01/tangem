/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens:{
      'md':'834px',
      // =>@media (min-width:834px)
      'lg':'1360px',
      // =>@media (min-width:1360px)
      'xl':'1560px'
      // =>@media (min-width:1560px)

    },
    extend: {
      colors: {
        'dark': '#0B0B0B'
      }
    },
  },
  plugins: [],
}

