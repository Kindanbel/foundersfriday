/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        founderPuple: "#9524FF",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        "slide-in": "slideIn 0.7s ease forwards",
        "slide-out": "slideOut 0.7s ease forwards",
        "float": "float 3s ease-in-out infinite"
      },
    },
  },
  plugins: [],
};
