const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      
      colors: {
        theme: {
          base: "hsl(47, 88%, 63%)",
          black: "#121212",
          grey: "#808080",
        },
      },
    },
  },
};