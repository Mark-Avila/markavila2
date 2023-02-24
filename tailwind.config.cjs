/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto'", 'sans-serif'],
        montserrat: ["'Montserrat'", 'sans-serif']
      },
      boxShadow: {
        thick: '5px 5px 5px 0px rgba(25,25,25,0.4)'
      },
      backgroundImage: {
        'static-particles': "url('src/assets/background.png')"
      }
    },
  },
  plugins: [],
}
