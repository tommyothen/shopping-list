/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bdazzled-blue": "#3D5A80",
        "dark-sky-blue": "#98C1D9",
        "light-cyan": "#E0FBFC",
        "burnt-sienna": "#EE6C4D",
        "gunmetal": "#293241",
      }
    },
  },
  plugins: [],
}
