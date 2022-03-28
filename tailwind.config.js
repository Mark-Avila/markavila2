module.exports = {
  content: ['public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        ibm: "'IBM Plex Mono', monospace",
        montserrat: "'Montserrat', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#28DD9C",
        background: {
          100: "#1a1a1a",
          200: "#111111",
          300: "#080808",
        }
      },
    },
  },
  plugins: [],
}
