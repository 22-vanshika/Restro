/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        bounceSlow : "bounce 1.5s infinite",
      },
      keyframes:{
        bounce:{
          "0%, 100%" :{
            transform: "translateY(-7%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%" :{
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.3, 1)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ "emerald"],
  },
}
