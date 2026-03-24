import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#0d0d0d",
          50: "#f5f5f0",
          100: "#e8e8e0",
          200: "#c8c8b8",
          300: "#a0a088",
          400: "#787858",
          500: "#585838",
          600: "#3c3c28",
          700: "#242418",
          800: "#141410",
          900: "#0d0d0d",
        },
        cream: {
          DEFAULT: "#f8f5ee",
          50: "#fdfcf8",
          100: "#f8f5ee",
          200: "#ede8d8",
          300: "#ddd5be",
          400: "#c8bda0",
          500: "#b0a080",
        },
        accent: {
          DEFAULT: "#c8a96e",
          light: "#e0c89a",
          dark: "#a07840",
        },
        muted: "#888880",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marqueeReverse 25s linear infinite",
        "cursor-glow": "cursorGlow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "grain": "url('/grain.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in-out": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
