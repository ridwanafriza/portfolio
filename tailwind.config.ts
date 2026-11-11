import type { Config } from "tailwindcss";

const config: Config = {
  // Tema lewat kelas `dark` di <html> (DESIGN §9 — amandemen pemilik 8 Nov 2026).
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      // Sinkron dengan CSS token (globals.css) — tanpa hex acak di komponen.
      colors: {
        hero: "var(--hero-bg)",
        bg: {
          DEFAULT: "var(--bg)",
          alt: "var(--bg-alt)",
        },
        surface: "var(--surface)",
        card: "var(--card)",
        chip: "var(--chip)",
        number: "var(--number-ghost)",
        navy: "var(--navy)",
        "navy-edge": "var(--navy-edge)",
        glass: "var(--glass)",
        fg: {
          DEFAULT: "var(--fg)",
          muted: "var(--fg-muted)",
        },
        line: "var(--border)",
        accent: {
          DEFAULT: "var(--accent)",
          strong: "var(--accent-strong)",
          soft: "var(--accent-soft)",
        },
        "on-accent": "var(--on-accent)",
        "on-fg": "var(--on-fg)",
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
      backgroundImage: {
        arch: "var(--arch-gradient)",
        cta: "var(--cta-gradient)",
        ghost: "var(--ghost-gradient)",
        navy: "var(--navy-bg)",
        "blue-card": "var(--blue-card)",
        project: "var(--project-gradient)",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
