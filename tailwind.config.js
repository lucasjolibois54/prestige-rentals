module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue': '#06080C',
        'light-gray': '#A2A2A2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
