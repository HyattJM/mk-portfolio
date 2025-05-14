/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "subzero-bg": "url('/assets/subzero-bg.png')",
        "raiden-bg": "url('/assets/raiden-projects-right.png')",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "parallax-subzero": "url('/assets/subzero-bg.png')",
        "parallax-raiden": "url('/assets/raiden-projects-right.png')",
      },
    },
  },
  plugins: [],
}
