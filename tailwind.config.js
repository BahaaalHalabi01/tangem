/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '834px',
      // =>@media (min-width:834px)
      'lg': '1360px',
      // =>@media (min-width:1360px)
      'xl': '1560px'
      // =>@media (min-width:1560px)

    },
    extend: {
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backgroundImage: {
        'black-friday': "url('/card.jpg')"
      },
      colors: {
        'dark': '#0B0B0B',
        'light-dark': '#6C6C70',
        'secondary': '#D9D9D9',
        'secondary-dark': 'hsla(0, 0%, 100%, 0.1)',
        'brand-yellow': '#D7A830',
        'brand-gradient-from': '#7D5317',
        'brand-gradient-to': '#EDDF95',
      },
      boxShadow: {
        '3xl': '0 8px 34px 0px rgba(0, 0, 0, 0.45)'
      },
      spacing: {
        'card': 'var(--card-h)',
        'card-w': 'var(--card-w)',
        'huge': 'calc(2.5*100dvh)'
      }
    },
  },
  plugins: [],
}

