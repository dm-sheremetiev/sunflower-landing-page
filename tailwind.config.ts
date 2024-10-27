import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "5836px",
      },
      colors: {
        transparent: "transparent",
        mainRed: "#F9462F",
        mainGrey: "#9D9D9D",
        mainBlack: "#313131",
        mainPink: "#FFE4EE",
      },
      fontFamily: {
        gilroy: ["var(--font-gilroy)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
