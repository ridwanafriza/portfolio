"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import ButtonCTA from "@/components/ui/ButtonCTA";
import SocialIcon from "@/components/ui/SocialIcon";
import { socials } from "@/lib/data";
import { scrollToId, scrollToTop } from "@/components/fx/SmoothScroll";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
];

export default function Navbar() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  const panelRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  /* Garis bawah meluncur — posisi & lebar diukur dari link aktif supaya
     garisnya bergerak halus (permintaan pemilik 11 Nov: "jangan kaku") */
  const listRef = useRef<HTMLUListElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [bar, setBar] = useState({ left: 0, width: 0, shown: false });

  /* Transparent → blur saat scroll (DESIGN §4) */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy: link aktif hanya lebih gelap/tebal, tanpa pill */
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  /* Menu overlay: Esc menutup, focus trap, kunci scroll */
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const first = panelRef.current?.querySelector<HTMLElement>("button, a");
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        const nodes = Array.from(
          panelRef.current?.querySelectorAll<HTMLElement>("button, a") ?? [],
        );
        if (!nodes.length) return;
        const firstEl = nodes[0];
        const lastEl = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* Ukur garis bawah mengikuti link aktif (dipanggil ulang saat resize /
     font selesai dimuat supaya tidak meleset) */
  useEffect(() => {
    const measure = () => {
      const el = btnRefs.current[active];
      if (!el) {
        // Section di luar nav (mis. Kontak) — garis menghilang dulu
        setBar((b) => (b.shown ? { ...b, shown: false } : b));
        return;
      }
      setBar({ left: el.offsetLeft, width: el.offsetWidth, shown: true });
    };
    measure();
    window.addEventListener("resize", measure);
    if (document.fonts) document.fonts.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const go = (href: string) => {
    setActive(href);
    setOpen(false);
    scrollToId(href); // lewat Lenis bila aktif; fallback scrollIntoView
  };

  return (
    <>
      <motion.nav
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 h-[72px] border-b transition-all duration-300 ${
          scrolled
            ? "border-line bg-[var(--nav-bg)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="wrap flex h-full items-center justify-between gap-4">
          {/* Kiri: logo + nama + link tepat di sebelahnya (DESIGN §4) */}
          <div className="flex min-w-0 items-center gap-6">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex shrink-0 items-center gap-3"
              aria-label="Ridwan Afriza Listiyono — ke atas"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent text-sm font-semibold text-white">
                R
              </span>
              <span className="text-[21px] font-medium leading-none tracking-[-0.03em]">
                Ridwan
              </span>
            </a>

            <ul ref={listRef} className="relative hidden items-center gap-6 md:flex">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    ref={(el) => {
                      btnRefs.current[href] = el;
                    }}
                    onClick={() => go(href)}
                    className={`pb-1.5 text-sm transition-colors ${
                      active === href
                        ? "font-semibold text-fg"
                        : "font-medium text-fg-muted hover:text-fg"
                    }`}
                    aria-current={active === href ? "page" : undefined}
                  >
                    {label}
                  </button>
                </li>
              ))}

              {/* Satu garis yang MELUNCUR ke link aktif (bukan muncul-hilang) */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 rounded-full bg-fg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                style={{
                  width: bar.width,
                  transform: `translateX(${bar.left}px)`,
                  opacity: bar.shown ? 1 : 0,
                }}
              />
            </ul>
          </div>

          {/* Kanan: toggle tema + CTA (ButtonCTA) + hamburger */}
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <span className="hidden md:inline-flex">
              <ButtonCTA
                href="#contact"
                size="nav"
                onClick={(e) => {
                  e.preventDefault();
                  go("#contact");
                }}
              >
                Hubungi Saya
              </ButtonCTA>
            </span>

            <button
              ref={burgerRef}
              className="btn btn-circle md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span className="relative block h-3 w-4">
                <span
                  className="absolute inset-x-0 top-0 h-0.5 bg-current transition-transform duration-300"
                  style={{ transform: open ? "translateY(5px) rotate(45deg)" : "none" }}
                />
                <span
                  className="absolute inset-x-0 top-1.5 h-0.5 bg-current transition-opacity duration-200"
                  style={{ opacity: open ? 0 : 1 }}
                />
                <span
                  className="absolute inset-x-0 top-3 h-0.5 bg-current transition-transform duration-300"
                  style={{ transform: open ? "translateY(-5px) rotate(-45deg)" : "none" }}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu overlay mobile */}
      <div
        id="mobile-menu"
        ref={panelRef}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-hero transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0 invisible"
        }`}
      >
        {navLinks.map(({ label, href }) => (
          <button
            key={href}
            onClick={() => go(href)}
            tabIndex={open ? 0 : -1}
            className={`text-[28px] font-semibold tracking-tight ${
              active === href ? "text-fg" : "text-fg-muted"
            }`}
          >
            <span className="relative inline-block pb-1.5">
              {label}
              {/* Garis tumbuh halus (scale-x) — versi menu mobile */}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-0.5 origin-left rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                  active === href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </span>
          </button>
        ))}
        <div className="mt-2">
          <ButtonCTA
            href="#contact"
            size="md"
            onClick={(e) => {
              e.preventDefault();
              go("#contact");
            }}
          >
            Hubungi Saya
          </ButtonCTA>
        </div>

        {/* Baris ikon sosial paling bawah (DESIGN §4) */}
        <nav className="mt-1 flex gap-3" aria-label="Sosial">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={`${s.label} Ridwan`}
              tabIndex={open ? 0 : -1}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-fg text-[var(--on-fg)] transition-colors hover:bg-accent hover:text-white"
            >
              <SocialIcon id={s.id} size={18} />
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
