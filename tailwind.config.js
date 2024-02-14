/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'full-vh': '100vh', 
      },
      width: {
        'full-wh': '100vw',  
      },
    },
  },
  plugins: [],
}

