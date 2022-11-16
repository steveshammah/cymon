/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md, mdx,}",
    "./components/**/*.{js,ts,jsx,tsx,md, mdx}",
  ],
  theme: {
    extend: {

      colors: {
        brandColor: '#7143a5',

      }
    },
  },
  plugins: [],
}
