/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#101010',
        background_gray: '#121212',
        gray: '#242424',
        green: '#26d767'
      },
    },
  },
  plugins: [],
}

