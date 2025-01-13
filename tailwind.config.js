/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        revhinFirst: '#7a156b',
        revhinSecond: '#400036',
        revhinThird: '#F2CB05',
        revhinFourth: '#79F297',
        revhinFifth: '#C2D2F2',
      },
      fontFamily: {
        kodchasan: ['Kodchasan', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tailwindcss-highlights'), /**<!--https://tailwindcss-highlights.hubatsch.dev/--> */
  ],
}

