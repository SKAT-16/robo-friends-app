/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['SEGA LOGO FONT', 'sans-serif'],
        'roboto' : ['Roboto Serif', 'serif']
      },
      colors: {
        'left-gradient' : 'rgba(7, 27, 82, 1) 0%',
        'right-gradient' : 'rgba(0, 128, 128, 1) 100%',
        'logo-color' : '#0ccac4'
      }
    },
  },
  plugins: [],
}