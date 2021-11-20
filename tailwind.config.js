module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      widest: '.25em',
      wider: '.25em',
    },
    extend: {
      colors: {
        'dark-blue': '#06080C',
        'light-gray': '#A2A2A2',
        'off-gray': '#B1B1B1',
        'electric-blue': '#245DD9',
        'brown-text': '#342D23',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
