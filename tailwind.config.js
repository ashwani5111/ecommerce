/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg2': '1280px', // Define a new breakpoint
        'lg3': '1680px'
      },
      height: {
        '100': '620px',
      },
    },
  },
  plugins: [],
}

