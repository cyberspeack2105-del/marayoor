import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:       "#112918",
          forest:     "#1a4329",
          green:      "#2e7d32",
          lightGreen: "#4ade80",
          vibrant:    "#22c55e",
          cream:      "#fbfcf9",
          muted:      "#607267",
        },
        background: "#fafbf9",
      },
      fontFamily: {
        sans:   ['"Plus Jakarta Sans"', "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      borderRadius: {
        blob: "48% 52% 68% 32% / 42% 38% 62% 58%",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft:  "0 2px 12px rgba(0,0,0,0.06)",
        card:  "0 4px 24px rgba(0,0,0,0.08)",
        hover: "0 8px 40px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
