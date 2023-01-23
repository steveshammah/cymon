/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md, mdx,}",
    "./components/**/*.{js,ts,jsx,tsx,md, mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#011C30",
        secondary: "#F16722",
        tertiaryColor: "#000067",
        cyBlack: "#010100",
      },
    },
  },
  plugins: [],
};
