/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridAutoRows: {
        auto: 'auto', // sets grid-auto-rows to 'auto'
      },
    },
  },
  plugins: [],
}

