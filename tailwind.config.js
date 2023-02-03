/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./App.tsx",
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple" : "#1E193B",
        "mid-purple" : "#312B4F",
        "light-purple" : "#454071",
        "orange" : "#E9875F",
        "dark-orange" : "#E9875F",
        "blue" : "#6B71F2"
      }
    },
  },
  plugins: [],
}
