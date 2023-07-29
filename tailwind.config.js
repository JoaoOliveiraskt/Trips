/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "search-bg": "url('/worldmap.png')",
      },
      colors: {
        primary: "#590bd8",
        primaryDark: "#312a4f",
        primaryLighter: "#DDD5EA",
        grayPrimary: "#717171",
        grayLight: "#bbbfbf",
        walterWhite: "#f5f5f5",
      },
      textColor: {
        Dark: "#717171",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
