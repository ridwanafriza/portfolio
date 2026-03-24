"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
      style={{
        background: dark ? "rgba(200,169,110,0.25)" : "rgba(13,13,13,0.10)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Track */}
      <span
        className="absolute inset-0 rounded-full transition-opacity duration-300"
        style={{ opacity: dark ? 1 : 0, background: "rgba(200,169,110,0.15)" }}
      />

      {/* Knob */}
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-transform duration-300"
        style={{
          background: dark ? "var(--accent)" : "var(--fg)",
          transform: dark ? "translateX(24px)" : "translateX(0)",
        }}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
