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
      },
      width: {
        "580px": "36.25rem",
      },
      height: {
        "580px": "36.25rem",
      },
      textColor: {
        "gray-550": "#737373",
      },
      borderColor: {
        "story-gradient": "linear-gradient(to right, red, purple)",
      },
      borderRadius: {
        '50%' : '50% !important'
      }
    },
  },
  plugins: [],
};
export default config;
