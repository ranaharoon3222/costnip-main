/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#65C7C8',
        secondary: '#73729C',
        dark: '#201E62',
        darkBlue: '#132758',
      },
    },
  },
  plugins: [require('daisyui')],
};
