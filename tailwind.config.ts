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
        background: "#09090B",
        surface: "#18181B",
        accent: {
          DEFAULT: "#2B4F9A",
          dark: "#1F4A9E",
        },
        text: {
          primary: "#FAFAFA",
          secondary: "#A1A1AA",
        },
        status: {
          active: "#22C55E",
          pipeline: "#EAB308",
          error: "#EF4444",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
        text: "640px",
      },
      fontSize: {
        "display": ["3.5rem", { lineHeight: "4rem", fontWeight: "700" }],
        "display-mobile": ["2.25rem", { lineHeight: "2.75rem", fontWeight: "700" }],
        "h2": ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
        "h2-mobile": ["1.75rem", { lineHeight: "2.25rem", fontWeight: "700" }],
        "h3": ["1.75rem", { lineHeight: "2.25rem", fontWeight: "600" }],
        "h3-mobile": ["1.375rem", { lineHeight: "1.75rem", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.875rem" }],
        "caption": ["0.875rem", { lineHeight: "1.375rem" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(43, 79, 154, 0.2)" },
          "100%": { boxShadow: "0 0 30px rgba(43, 79, 154, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
