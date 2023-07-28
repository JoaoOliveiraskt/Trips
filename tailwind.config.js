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
        "search-background": "url('/worldmap.png')",
      },
      colors: {
        primary: "#590bd8",
        primaryDark: "#312a4f",
        primaryLighter: "#DDD5EA",
        grayPrimary: "#717171",
        grayLight: "#bbbfbf",
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
