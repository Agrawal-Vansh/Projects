/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        'custom-gradient1': 'linear-gradient(39deg, #85FFBD 31%, #FFFB7D 85%)',

      },
    },
  },
  plugins: [],
}

