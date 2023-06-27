/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        background: "#1B1E26",
        rateBackground:"#2D3240",
        rateColor:"#2EAEBE",
        grey:"#90939B",
        hoverColor:"#2EAEBE",
        greenColor : "#CAE962"
      }
    },
  },
  plugins: [],
}

