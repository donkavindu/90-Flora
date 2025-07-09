/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cerapro: ['"Cera Pro"', "sans-serif"],
        newyork: ['"NewYork"', "serif"],
      },
    },
  },
  plugins: [],
};
