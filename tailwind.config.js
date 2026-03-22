/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], // texto
        heading: ['Cormorant', 'serif'],   // títulos orgânicos
      },
    },
  },
  plugins: [],
}