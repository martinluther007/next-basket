import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('./assets/images/background.jpg')",
      },
      colors: {
        secondary: "#23856D",
        secondaryTextColor: "#737373",
        primary: "#23A6F0",
        textColor: "#252B42",
        textSuccessColor: "#2DC071",
        mutedColor: "#BDBDBD",
        dangerColor: "#E74040",
        disabled: "#8EC2F2",
        lightGray: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
export default config;
