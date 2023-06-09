/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customGreen: {
          backgrond: "#DDE4D4",
          bluredBackground: "#CED9BF",
          light: "#B8DC89",
          semiLight: "#7AC242",
          semiDark: "#59AC18",
          dark: "#48821A",
          button: "#97D466"
        }
      },
      screens: {
        desktopHeight: { raw: "(min-height: 1080px)" },
        desktopHeightLarge: { raw: "(min-height: 1200px)" }
      }
    }
  },
  plugins: []
}
