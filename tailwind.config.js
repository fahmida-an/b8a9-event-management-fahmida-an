/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      pinkbright1: '#f9a8d4',
      pinkdark1: '#9d174d',
      pinkdark2: '#831843',
      dark1: '#706F6F',
      dark2: '#403F3F',
      dark3: '#9F9F9F',
      pink1: '#D72050',
      white: '#FFFFFF',
      gray: '#F3F3F3',
      blue: '#1fb6ff',
      black: '#000000',
     },
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

