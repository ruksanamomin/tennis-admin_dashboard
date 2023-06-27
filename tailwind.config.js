/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {

      sm:"320px",

      md:"425px",

      lg:'768px',

      xl: '1024px',

      '2xl': '1440px',

    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

