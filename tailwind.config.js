export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#64FFDA",
        tertiary: "#112240",
        lightText: "#CCD6F6",
        lightestText: "#8892B0"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}