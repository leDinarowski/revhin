/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        revhinGreen: '#6A8E7F',
        revhinBlack: '#191716',
        revhinRed: '#9F2042',
        revhinWhite: '#F8E5EE',
        revhinBlue: '#072ac8',
        revhinDarkBlue: '#1e293b'
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

