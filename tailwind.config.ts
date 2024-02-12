import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        primary: "#121212",
        secondary: "#F6F6F6",
        songcard: "#252525",
        lightGray: "#242424",
        bgheader: "#090909",
        green: "#1FDF64",
        serchGray: "#2A2A2A",
      },
    },
  },
  plugins: [],
} satisfies Config;
