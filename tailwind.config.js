/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: { DEFAULT: "#242424", gray: "#1F1F1F" },
      },
      textColor: {
        secondary: "#a8a8a8",
      },
    },
  },
  plugins: [],
};
