module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '300px',
      // => @media (min-width: 475px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
