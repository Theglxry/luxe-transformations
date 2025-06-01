import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1750px",
    },
    extend: {
      colors: {
        "primary-dark": "#0e0e0e",
      },

      spacing: {
        "padding-vertical-screen": "var(--padding-vertical-screen)",
      },
    },
    fontFamily: {
      inter: "var(--font-inter)",
      archivo: "var(--font-archivo)",
      "floral-script": "var(--font-floral-paradise-script)",
      "floral-serif": "var(--font-floral-paradise-serif)",
      "tt-tunnels": "var(--font-tt-tunnels)",
    },
  },
  plugins: [],
};
export default config;
