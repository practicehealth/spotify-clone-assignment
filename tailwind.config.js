/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xs:{min:'500px'},
      sm:{min:'640px'},
      md:{min:'768px'},
      lg:{min:'1024px'},
      xl:{min:'1280px'},

    }
  },
  plugins: [],
}