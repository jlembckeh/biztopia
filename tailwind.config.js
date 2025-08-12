/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
        colors: {
        // Paleta minimalista: rojo, negro y blanco para Biztopia
        brand: {
          red: '#E11D48',     // color principal rojo
          black: '#1E1E1E',   // negro suave para textos y encabezados
          white: '#FFFFFF'    // blanco para fondos
        }
      }
    }
  },
  plugins: []
}
