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
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 700ms",
      },
    },
  },
  plugins: [
    
  ],
}

