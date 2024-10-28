/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Yellow': 'hsl(47, 88%, 63%)',
        'White': 'hsl(0, 0%, 100%)',
        'Gray-500': 'hsl(0, 0%, 42%)',
        'Gray-950': 'hsl(0, 0%, 7%)'
      },

      boxShadow: {
        'custom-shadow': '10px 10px 2px 0px rgba(0, 0, 0, 1)',
      },

      margin: generatePixel(),
      padding: generatePixel(),
      width: generatePixel(),
      height: generatePixel(),
      minHeight: generatePixel(),
      minWidth: generatePixel(),
      maxWidth: generatePixel(),
      fontSize: generatePixel(),
      letterSpacing: generatePixel(),
      borderColor: generatePixel(),
      borderRadius: generatePixel(),
      gap: generatePixel(),
      fontFamily: {
        'Figtree': ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '*': {
          margin: '0',
          padding: '0',
          boxSizing: 'border-box',
        },
      });
    },
  ],
}

// El propósito principal de esta función es generar dinámicamente clases de utilidad de altura en Tailwind CSS, permitiendo especificar alturas en píxeles de manera más precisa y flexible.
function generatePixel() {
  const pixels = {};
  for (let i = 1; i <= 1000; i++) { 
    pixels[i] = `${i}px`;
  }
  return pixels;
}