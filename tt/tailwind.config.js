/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/Hero.jsx", // Include the HTML file for any classes used in inline styles
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

