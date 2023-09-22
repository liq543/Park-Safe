/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/html/utils/withMT');

module.exports = withMT({
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
});


