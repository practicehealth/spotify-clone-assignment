/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-black': '#121212',
        'spotify-selected': '#242424',
        'spotify-disabled': '#919191',
      },
      fontSize: {
        'search': '0.875rem'
      }
    },
  },
  plugins: [],
}

