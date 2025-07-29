/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#4f6f52',        // Verde apagado elegante (para botones y detalles)
        secondary: '#a98467',   // Marrón claro suave (acentos y fondos)
        background: '#fdfcf8',  // Fondo claro tipo crema
        text: '#2f2f2f',        // Gris oscuro para texto principal
        border: '#e0dcd0',      // Gris muy claro para bordes sutiles
        hover: '#6e8b5b',       // Verde más fuerte para hover
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
