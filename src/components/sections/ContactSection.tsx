"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { profile } from "@/lib/data";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("done");
  };

  const contactLinks = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "ridwanafriza",
      href: profile.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM6.9 20.45H3.55V9H6.9v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "ridwanafriza",
      href: profile.github,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.1-.77.42-1.29.76-1.59-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      value: "@ridwan_afrizaa",
      href: profile.instagram,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-36 relative">
      {/* Bg gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--bg-alt)" }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="section-label justify-center mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Kontak
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Mari <em style={{ color: "var(--accent)" }}>Terhubung</em>
          </motion.h2>
          <motion.p
            className="text-base max-w-md mx-auto"
            style={{ color: "var(--fg-muted)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Terbuka untuk kolaborasi, diskusi teknologi, atau sekadar saling
            sapa.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — contact info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  color: "var(--fg)",
                  textDecoration: "none",
                }}
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{
                    background: "rgba(200,169,110,0.10)",
                    color: "var(--accent)",
                  }}
                >
                  {link.icon}
                </span>
                <div>
                  <p
                    className="text-xs font-mono"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {link.label}
                  </p>
                  <p className="text-sm font-medium mt-0.5">{link.value}</p>
                </div>
                <svg
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--accent)" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* Location */}
            <div
              className="p-4 rounded-xl"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(200,169,110,0.10)",
                    color: "var(--accent)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p
                    className="text-xs font-mono"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    Lokasi
                  </p>
                  <p className="text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <h3 className="font-display text-2xl font-medium mb-6">
                Kirim Pesan
              </h3>

              {status === "done" ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✉️</div>
                  <p className="font-display text-xl font-medium mb-2">
                    Pesan Terkirim!
                  </p>
                  <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                    Terima kasih telah menghubungi. Akan segera dibalas.
                  </p>
                  <button
                    className="btn-outline mt-6"
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", message: "" });
                    }}
                  >
                    Kirim Lagi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className="block text-xs font-mono mb-2"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      className="form-input"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-mono mb-2"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@contoh.com"
                      className="form-input"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-mono mb-2"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      Pesan
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tulis pesan Anda di sini..."
                      className="form-input resize-none"
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                            opacity="0.3"
                          />
                          <path d="M21 12a9 9 0 0 1-9 9" />
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
