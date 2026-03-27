/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a3b18a', // pastel olive green accent
          600: '#588157',
        },
        pastel: {
          pink: '#fce4ec',
          purple: '#f3e5f5',
          blue: '#e3f2fd',
          green: '#e8f5e9',
          yellow: '#fffde7',
          orange: '#fff3e0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
