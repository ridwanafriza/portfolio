"use client";
import { useEffect } from "react";

/**
 * Preloader singkat, sekali per sesi (amandemen AGENTS §3.4 — pemilik 8 Nov 2026).
 * - Tampil dari paint pertama (SSR), disembunyikan setelah `load` + jeda minimum.
 * - Pengunjung sesi berikutnya: script pra-render di <head> menambah
 *   `html.pl-done` → tidak pernah terlihat (tanpa kilatan).
 * - prefers-reduced-motion: `display:none` via CSS; tanpa JS juga aman (noscript).
 * - Fallback timer agar tidak pernah menutup konten bila `load` macet.
 */
const MIN_VISIBLE_MS = 350;   // sejak komponen mount
const FALLBACK_MS = 550;      // batas mutlak menunggu `load` (total ≤ ±600ms)

export default function Preloader() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("pl-done")) return; // sudah pernah tampil

    const start = performance.now();
    let hidden = false;

    const hide = () => {
      if (hidden) return;
      hidden = true;
      const remaining = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      window.setTimeout(() => {
        root.classList.add("pl-done");
        try {
          sessionStorage.setItem("pl", "1");
        } catch {
          /* storage penuh/blokir — abaikan */
        }
      }, remaining);
    };

    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });
    const fallback = window.setTimeout(hide, FALLBACK_MS);

    return () => {
      window.removeEventListener("load", hide);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="preloader" role="status" aria-label="Memuat halaman">
      <div className="preloader-inner">
        <span className="preloader-mark" aria-hidden="true">
          R
        </span>
        <span className="preloader-name">Ridwan Afriza Listiyono</span>
        <span className="preloader-bar" aria-hidden="true">
          <span />
        </span>
      </div>
    </div>
  );
}
