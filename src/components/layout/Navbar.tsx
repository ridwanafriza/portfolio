"use client";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { profile } from "@/lib/data";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "var(--card-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          boxShadow: scrolled ? "var(--shadow)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-medium text-xl tracking-tight transition-opacity hover:opacity-70"
            style={{ color: "var(--fg)" }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <span style={{ color: "var(--accent)" }}>R</span>A
            <span className="hidden sm:inline font-body text-sm font-normal ml-2" style={{ color: "var(--fg-muted)" }}>
              — {profile.tagline}
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleLink(href)}
                  className="px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 hover:text-accent"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              className="flex md:hidden flex-col gap-1.5 p-2"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className="block w-5 h-px transition-all duration-300 origin-center"
                style={{
                  background: "var(--fg)",
                  transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  background: "var(--fg)",
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300 origin-center"
                style={{
                  background: "var(--fg)",
                  transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 md:hidden transition-all duration-500 flex flex-col"
        style={{
          background: "var(--bg)",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "none" : "translateY(-8px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2">
          {navLinks.map(({ label, href }, i) => (
            <button
              key={href}
              onClick={() => handleLink(href)}
              className="font-display text-4xl font-medium transition-all duration-200 hover:opacity-60 py-2"
              style={{
                color: "var(--fg)",
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                transform: open ? "none" : "translateY(20px)",
                opacity: open ? 1 : 0,
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
