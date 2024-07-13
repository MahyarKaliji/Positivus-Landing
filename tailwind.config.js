/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk"],
      },
      colors: {
        green: "#B9FF66",
        gray: "#F3F3F3",
        dark: "#191A23",
        footer: "#292A32",
      },
      borderRadius: {
        btn: "14px",
        ttl: "7px",
      },
      margin: {
        mside: "6.95%",
      },
      fontSize: {
        content: "1.39vw", //20px
        p: "1.25vw", //18px
        h1: "4.17vw", //60px
        h2: "2.78vw", //40px
        h3: "2.08vw", //30px
        h4: "1.39vw", //20px
      },
      padding: {
        btn: "1.39vw 2.43vw",
        ttl: "0 .49vw",
      },
      accentColor: {
        green: "#B9FF66",
      },
    },
  },
  plugins: [],
};
