/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)', // Dark Mode Elements
        veryDarkBlue: 'hsl(207, 26%, 17%)', // Dark Mode Background
        veryDarkText: 'hsl(200, 15%, 8%)', // Light Mode Text
        darkGray: 'hsl(0, 0%, 52%)', // Light Mode Input
        veryLightGray: 'hsl(0, 0%, 98%)', // Light Mode Background
      },
      screens: {
        dtl: '1400px',
        ccntr: '735px',
        dtlsm: '667px',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(240px, 1fr))',
      },
    },
  },
  plugins: [],
}
