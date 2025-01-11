/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        revhinFirst: '#000000',
        revhinSecond: '#333333',
        revhinThird: '#999999',
        revhinFourth: '#FFFFFF'
      },
      fontFamily: {
        kodchasan: ['Kodchasan', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-highlights'), /**<!--https://tailwindcss-highlights.hubatsch.dev/--> */
  ],
}

