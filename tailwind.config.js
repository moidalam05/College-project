/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1100px",
    },
    extend: {
      boxShadow: {
        boxShadow:
          "-20px -20px 50px 2px #000 inset, 0 0 20px 2px #000, -20px -20px 50px 2px #000 inset, 0 0 20px 2px #000, -20px -20px 50px 2px #000 inset, 0 0 20px 2px #000, -20px -20px 50px 2px #000 inset, 0 0 20px 2px #000",
        boxShadowSecondary:
          "-20px -20px 50px 2px #000 inset, 0 0 20px 2px #000, -20px -20px 50px 2px #000 inset, 0 0 20px 2px #000, -20px -20px 50px 2px #000 inset",
      },
      colors: {
        primaryColor: "#010a5e",
        primaryColorLight: "#010d78",
        secondaryColor: "#FFCC00",
        paragraphColor: "#c0c0c0",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        darkColorLight: "#171717",
        linkClor: "#1D82D3 ",
      },
      keyframes: {
        rotate: {
          "100%": { backgroundPosition: "100%" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px*9))" },
        },
      },
      animation: {
        rotateX: "rotate 30s linear infinite",
        scrollX: "scroll 40s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0rem",
        sm: "0rem",
      },
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
