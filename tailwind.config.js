/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backdrop: "#171717",
        primary: "#1fdf64",
        active: "#282828",
        link:"#b3b3b3",
        footer: "#181818"
      }
    },
    fontSize:{
      s:"0.813rem"
    },
  }
  ,
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
