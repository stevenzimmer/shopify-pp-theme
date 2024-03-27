/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{liquid,json}', './frontend/**/*.js'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1180px',
        },
      },
      fontFamily: {
        syne: ['"Syne"', 'sans-serif'],
      },
      colors: {
        pp: {
          heading: '#2E2A39',
          body: '#625F6B',
          stone: '#182641',
          indigo: '#4C4DC3',
          blue: '#97BAFE',
          lime: '#E0FF01',
          green: '#01BF93',
          sherpa: '#005057',
          'grey-1': '#F9F9F7',
          'grey-2': '#F3F3EF',
          'grey-3': '#EEECE7',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
