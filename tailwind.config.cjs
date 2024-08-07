/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"]
      },
      boxShadow: {
        thick: "5px 5px 5px 0px rgba(25,25,25,0.4)",
        center: "0px 0px 23px 0px"
      },
      backgroundImage: {
        "static-particles": "url('/background.png')"
      },
      screens: {
        xs: "390px"
      }
    }
  },
  plugins: []
};
