/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#242424",
      },
      textColor: {
        secondary: '#a8a8a8'
      }
    },
  },
  plugins: [],
};
