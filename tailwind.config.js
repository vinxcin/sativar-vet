/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // garante que todos os seus arquivos React sejam processados
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // para textos
        heading: ['Poppins', 'sans-serif'], // para títulos
      },
    },
  },
  plugins: [],
}
