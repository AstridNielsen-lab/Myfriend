/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0a0a0f',
          800: '#1a1a23',
          700: '#2a2a35',
          600: '#3a3a45',
          500: '#4a4a55',
          400: '#6a6a75',
          300: '#8a8a95',
          200: '#aaaaB5',
          100: '#eaeaef',
        },
        blue: {
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
        },
      },
    },
  },
  plugins: [],
};