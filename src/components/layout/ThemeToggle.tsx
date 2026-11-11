"use client";
import { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

/**
 * Toggle tema light/dark (amandemen AGENTS §3.4 + DESIGN §4/§9).
 * Default SELALU light; pilihan di `localStorage` key `theme`.
 * Anti-flash: script pra-render di <head> — komponen ini hanya menyinkronkan
 * state setelah hydration (initial state sama dengan SSR → tanpa mismatch).
 *
 * Transisi halus (DESIGN §9.1): View Transitions API bila ada,
 * fallback kelas sementara `theme-transition` 450ms; mati di reduced-motion;
 * klik beruntun diabaikan selama transisi berjalan.
 */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const busy = useRef(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const apply = (next: Theme) => {
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blokir — tema tetap berlaku selama sesi */
    }
    setDark(next === "dark");
  };

  const toggle = () => {
    if (busy.current) return; // klik beruntun diabaikan selama transisi
    const next: Theme = dark ? "light" : "dark";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return apply(next);

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { finished: Promise<void> };
    };

    if (typeof doc.startViewTransition === "function") {
      busy.current = true;
      doc.startViewTransition(() => apply(next)).finished
        .catch(() => undefined)
        .finally(() => {
          busy.current = false;
        });
    } else {
      // Fallback: transisi warna biasa lewat kelas sementara
      const html = document.documentElement;
      busy.current = true;
      html.classList.add("theme-transition");
      apply(next);
      window.setTimeout(() => {
        html.classList.remove("theme-transition");
        busy.current = false;
      }, 450);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="btn-icon"
      aria-label={dark ? "Ganti ke tema terang" : "Ganti ke tema gelap"}
      aria-pressed={dark}
    >
      {/* Kedua ikon ditumpuk: aktif rotate(0)/1, nonaktif rotate(90°)/0 — 250ms */}
      <span className="theme-icon" aria-hidden="true">
        <Sun size={18} strokeWidth={1.5} className={dark ? "is-on" : "is-off"} />
        <Moon size={18} strokeWidth={1.5} className={dark ? "is-off" : "is-on"} />
      </span>
    </button>
  );
}
