export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
  'spin-slow': 'spin 10s linear infinite',
  'float': 'float 6s ease-in-out infinite',
  'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
},
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-15px)' },
  },
  pulseGlow: {
    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
    '50%': { opacity: '0.7', transform: 'scale(1.05)' },
  },
}
,
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
