/** @type {import('tailwindcss').Config} */
module.exports = {
  important : true ,
  content: [
    "./src/components/**/*.{js,html,jsx}",
    "./src/pages/**/*.{js,html,jsx}"
  ],
  theme: {
    fontFamily: {
      display: [ 'Montserrat', 'serif', 'Nunito', 'sans-serif'],
    },
    extend : {
      gridTemplateRows : {
        "100px" : "100px"
      }
    }
  },
  plugins: []
}