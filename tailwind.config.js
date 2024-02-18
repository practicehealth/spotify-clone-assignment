/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customMajor: '#121212',
        customMinor:'#FFFFFF',
        customMinor2:'#159643'

      },
    },
  },
  plugins: [],
}