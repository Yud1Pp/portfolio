/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: "512px",
      },
      colors: {
        background: "#080808",
        secondBackground: "#101010",
        primary: "#ea580c",
      },
      fontFamily: {
        montserat: ["Montserrat"],
        roboto: ["Roboto"],
      },
      boxShadow: {
        innerSpread: "0 0 -20px -5px #ea580c",
        spread: "0 0 15px 1px #ea580c",
        spreadBold: "0 0 30px 3px #ea580c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
