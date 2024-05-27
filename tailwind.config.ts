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
        homephone:
          'url("https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk")',
      },
      backgroundSize: {
        homephone_size: "468.32px 634.15px",
      },
      backgroundColor: {
        "gray-650": "#fafafa00",
        "gray-150": "#efefef",
        "gray-50": "rgba(0,0,0,0.05)",
        "gray-250": "rgba(0,0,0,0.4)",
        "gray-750": "rgb(239, 239, 239)",
        "gray-850": "#c8c8c8",
      },
      width: {
        "580px": "36.25rem",
        "400px": "25rem",
        '730px': '45.625rem'
      },
      height: {
        "580px": "36.25rem",
        "600px": "37.5rem",
        "300px": "18.75rem",
      },
      textColor: {
        "gray-550": "#737373",
        "gray-850": "#c8c8c8",
      },
      borderColor: {
        "story-gradient": "linear-gradient(to right, red, purple)",
        "gray-850": "#c8c8c8",
      },
      borderRadius: {
        "50%": "50% !important",
      },
      keyframes: {
        "slide-right": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-right": "slide-right 0.35s ease",
      },
      boxShadow: {
        modal: "4px 0 24px rgba(0,0,0,0.15)",
      },
      gridTemplateColumns: {
        '7_5': '7fr 5fr'
      }
    },
  },
  plugins: [],
};
export default config;
