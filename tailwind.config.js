/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'red':'#FF435B',
      'purple': '#B476E5',
      'blue':'#47BDFF',
      'black':'#08111F',
      'yellow':'#ffbd11',
      'gold-yellow':'#FFA609',
      'green':'#45B649',
      'light-purple1':'#AAAAC6',
      'light-purple2':'#737D9D',
      'light-black':'#2A3347',
      'black2':'#141D29',
      'gray-dark':'#1c2331',
      'cyberbizkit': {
        light: '#F4F7F8',
        DEFAULT: '#101926',
        dark: '#101926',
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
    },
    extend: {},
  },
  plugins: [],
}
