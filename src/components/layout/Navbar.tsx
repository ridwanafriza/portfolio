"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const [active, setActive] = useState("#about");

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      },
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  const handleLink = (href: string) => {
    setActive(href);
    setOpen(false);

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-2 md:px-4"
        style={{
          background: scrolled ? "var(--card-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          boxShadow: scrolled ? "var(--shadow)" : "none",
        }}
      >
        <div className="w-full h-16 flex items-center justify-between">

          {/* LEFT (LOGO) */}
          <div className="flex items-center pl-4 md:pl-6">
            <a
              href="#"
              className="font-display font-medium text-xl tracking-tight hover:opacity-70"
              style={{ color: "var(--fg)" }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span style={{ color: "var(--accent)" }}>R</span>A
              <span
                className="hidden sm:inline font-body text-sm ml-2"
                style={{ color: "var(--fg-muted)" }}
              >
                — {profile.tagline}
              </span>
            </a>
          </div>

          {/* CENTER (NAV) */}
          <ul className="hidden md:flex items-center gap-2 relative">
            {navLinks.map(({ label, href }) => (
              <li key={href} className="relative">
                {active === href && (
                  <motion.span
                    layoutId="nav-highlight"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "var(--accent)",
                      opacity: 0.15,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                <button
                  onClick={() => handleLink(href)}
                  className="relative z-10 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    color:
                      active === href
                        ? "var(--accent)"
                        : "var(--fg-muted)",
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT (TOGGLE + MENU) */}
          <div className="flex items-center gap-3 pr-4 md:pr-6">
            <ThemeToggle />

            <button
              className="flex md:hidden flex-col gap-1.5 p-2"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  background: "var(--fg)",
                  transform: open
                    ? "rotate(45deg) translate(3px, 3px)"
                    : "none",
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  background: "var(--fg)",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-px transition-all duration-300"
                style={{
                  background: "var(--fg)",
                  transform: open
                    ? "rotate(-45deg) translate(3px, -3px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 md:hidden transition-all duration-500 flex flex-col"
        style={{
          background: "var(--bg)",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-4">
          {navLinks.map(({ label, href }, i) => (
            <button
              key={href}
              onClick={() => handleLink(href)}
              className="text-4xl font-display"
              style={{
                color:
                  active === href
                    ? "var(--accent)"
                    : "var(--fg)",
                transform: open ? "none" : "translateY(20px)",
                opacity: open ? 1 : 0,
                transitionDelay: `${i * 80}ms`,
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