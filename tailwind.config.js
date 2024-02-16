/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '25': '25deg'
      },
      backgroundImage: theme => ({
        'footerGradient': 'linear-gradient(90deg, #af2896, #509bf5)',
      }),
      colors: {
        'baseBackground': '#121212',
        'elevatedBaseBackground': '#242424',
        'essentialSubdued': '#727272',
        'textSubdued': '#a7a7a7',
        'showAllColor': '#b3b3b3',
        'cardNormalBG': '#181818',
        'cardHoverBG': '#282828',
        'textSubdued': '#6a6a6a',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        'custom': '1.76px',
        widest: '1.76px',
        widest: '.25em',
      },
      boxShadow: {
        'custom': '0 8px 24px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}