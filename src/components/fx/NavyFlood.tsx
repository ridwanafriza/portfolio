"use client";
import { useEffect } from "react";

/**
 * Navy Flood (amandemen pemilik 15 Nov 2026 — DESIGN §6d).
 * Saat scroll KE BAWAH menembus garis 55% viewport pada section navy
 * (#skills), <html> diberi kelas `flood` → latar halaman dan
 * gradien penyambung section bertransisi ke navy.
 *
 * Aturan:
 * - hanya dipicu saat arah scroll ke bawah (bukan ke atas);
 * - masuk & keluar 700ms cubic-bezier(.44,0,.56,1) — disamakan dengan
 *   transisi referensi Portfon (pemilik 16 Nov 2026: "contoh animasi
 *   transisi ke navy nya kek gini"); keluar-atas BERTRANSISI juga
 *   ("kalau ga ada transisinya jadi jelek, kaku");
 * - #contact (footer) DIKECUALIKAN — revisi pemilik 16 Nov 2026:
 *   "di footer birunya sampe ketinggian". Saat flood, body ikut navy sehingga
 *   section transparan di atas footer ikut biru. Footer kembali ke tampilan
 *   awal: body tetap terang, hanya section footer navy + gradien atas 240px.
 * - mati total saat prefers-reduced-motion (tidak ada kelas sama sekali).
 * Tanpa library baru; scroll listener pasif, arah dari delta scrollY.
 */

const TRIGGER = 0.55;   // garis pemicu: 55% tinggi viewport
const SELECTOR = "#skills"; // #contact dikeluarkan (footer kembali ke tampilan awal)
const EXIT_MS = 750;    // > 700ms (durasi transisi html.flood-exit)

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
    const floodOff = () => {
      clearExit();
      root.classList.remove("flood");
      root.classList.add("flood-exit"); // fade halus 700ms ke --bg (arah mana pun)
      exitTimer = setTimeout(() => {
        root.classList.remove("flood-exit"); // transisi selesai → state normal
        exitTimer = undefined;
      }, EXIT_MS);
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
          floodOff(); // garis melewati bawah section (scroll ke bawah)
        } else if (r.top >= l) {
          active = null;
          floodOff(); // garis melewati atas section (scroll ke atas — kini tetap halus)
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
