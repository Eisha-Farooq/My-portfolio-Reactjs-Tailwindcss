/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackishBlue: 'rgb(0, 0, 51)',
      },
    },
  },
  plugins: [],
}