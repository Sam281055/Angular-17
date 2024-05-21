/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFB74D', // color claro para el tema principal (naranja claro)
          DEFAULT: '#FF9800', // color por defecto para el tema principal (naranja)
          dark: '#F57C00', // color oscuro para el tema principal (naranja oscuro)
        },
        secondary: {
          light: '#FFCC80', // color claro para el tema secundario (naranja claro)
          DEFAULT: '#FFB74D', // color por defecto para el tema secundario (naranja claro)
          dark: '#FFA726', // color oscuro para el tema secundario (naranja)
        },
        accent: {
          light: '#FFD180', // color claro para el acento (naranja claro)
          DEFAULT: '#FFAB40', // color por defecto para el acento (naranja)
          dark: '#FF9100', // color oscuro para el acento (naranja oscuro)
        },
        neutral: {
          light: '#F5F5F5', // color claro para el neutro (gris claro)
          DEFAULT: '#E0E0E0', // color por defecto para el neutro (gris)
          dark: '#BDBDBD', // color oscuro para el neutro (gris oscuro)
        },
        error: '#D32F2F', // color para errores (rojo)
        warning: '#FFA000', // color para advertencias (amarillo oscuro)
        success: '#388E3C', // color para éxitos (verde)
        info: '#1976D2', // color para información (azul)
      },
    },
  },
  plugins: [],
}

