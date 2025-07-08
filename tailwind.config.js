/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // garante que todos os seus arquivos React sejam processados
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], // para textos gerais
        zen: ['Zen Dots', 'cursive'],      // para títulos
      },
    },
  },
  plugins: [],
}
