"use client";
import { useEffect } from "react";

/**
 * Navy Flood (amandemen pemilik 15 Nov 2026 — DESIGN §6d).
 * Saat scroll KE BAWAH menembus garis 55% viewport pada section navy
 * (#skills / #contact), <html> diberi kelas `flood` → latar halaman dan
 * gradien penyambung section bertransisi ke navy (500ms, lihat globals.css).
 *
 * Aturan:
 * - hanya dipicu saat arah scroll ke bawah (bukan ke atas);
 * - keluar saat scroll ke bawah melewati section → `flood-exit` (250ms);
 * - keluar saat scroll ke atas melewati ambang → kelas dilepas saja
 *   (tanpa transisi → langsung kembali);
 * - mati total saat prefers-reduced-motion (tidak ada kelas sama sekali).
 * Tanpa library baru; scroll listener pasif, arah dari delta scrollY.
 */

const TRIGGER = 0.55;   // garis pemicu: 55% tinggi viewport
const SELECTOR = "#skills, #contact";
const EXIT_MS = 300;    // > 250ms (durasi transisi keluar)

function prefersReduced(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function NavyFlood() {
  useEffect(() => {
    if (prefersReduced()) return;
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (sections.length === 0) return;

    let active: HTMLElement | null = null;
    let lastY = window.scrollY;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const clearExit = () => {
      if (exitTimer !== undefined) {
        clearTimeout(exitTimer);
        exitTimer = undefined;
      }
    };
    const floodOn = () => {
      clearExit();
      root.classList.remove("flood-exit");
      root.classList.add("flood");
    };
    const floodOffDown = () => {
      clearExit();
      root.classList.remove("flood");
      root.classList.add("flood-exit"); // fade 250ms ke --bg
      exitTimer = setTimeout(() => {
        root.classList.remove("flood-exit"); // transisi selesai → state normal
        exitTimer = undefined;
      }, EXIT_MS);
    };
    const floodOffUp = () => {
      clearExit();
      root.classList.remove("flood", "flood-exit"); // langsung, tanpa animasi
    };

    const line = () => window.innerHeight * TRIGGER;

    // Sinkron awal (mis. reload di posisi tengah / anchor) — tanpa syarat arah.
    const sync = () => {
      const l = line();
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top < l && r.bottom > l) {
          active = s;
          floodOn();
          break;
        }
      }
    };
    sync();

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (Math.abs(dy) < 0.1) return; // bukan gerakan nyata
      const down = dy > 0;
      const l = line();

      if (active) {
        const r = active.getBoundingClientRect();
        // Section tidak lagi membentang di garis → keluar dari flood
        if (r.bottom <= l) {
          active = null;
          floodOffDown(); // garis melewati bawah section (scroll ke bawah)
        } else if (r.top >= l) {
          active = null;
          floodOffUp(); // garis melewati atas section (scroll ke atas → instan)
        }
        return;
      }
      if (!down) return; // pemantikan hanya dari arah bawah
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top < l && r.bottom > l) {
          active = s;
          floodOn();
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearExit();
      root.classList.remove("flood", "flood-exit");
    };
  }, []);

  return null;
}
