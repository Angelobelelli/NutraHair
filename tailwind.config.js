/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-gold': '#AD7E2C',
        'text-gold': '#AD7E2C', // Cor personalizada para o texto
      },
    },
  },
  plugins: [],
}