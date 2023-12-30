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
      backgroundImage:{
        'black-friday-small':"url('/card-small.svg')",
        'black-friday':"url('/card.jpg')"
      },
      colors: {
        'dark': '#0B0B0B',
        'light-dark': '#6C6C70',
        'secondary':'#D9D9D9',
        'secondary-dark':'hsla(0, 0%, 100%, 0.1)',
        'brand-yellow':'#D7A830',
      },
      spacing:{
        'card':'21.8125rem',
        'card-w':'37.5rem',
        'huge':'calc(2.5*100dvh)'
      }
    },
  },
  plugins: [],
}

