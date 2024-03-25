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
        manrope: ['Manrope', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        bp: {
          heading: '#2E2A39',
          body: '#625F6B',
          lavender: '#DABDFF',
          green: '#4AA471',
          orange: '#F07961',
          yellow: '#FFD174',
          'blue-light': '#B8DDE5',
          'blue-dark': '#152430',
          'teal-light': '#5FB9B3',
          'teal-dark': '#016366',
          'grey-1': '#F9F9F7',
          'grey-2': '#F3F3EF',
          'grey-3': '#EEECE7',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
