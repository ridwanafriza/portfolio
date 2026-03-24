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
      label: "WhatsApp",
      value: profile.phone,
      href: `https://wa.me/${profile.whatsapp}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "ridwanafriza",
      href: profile.linkedin,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM6.9 20.45H3.55V9H6.9v11.45zM22.23 0H1.77C.79 0 .77 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0z" />
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
              {/* Google Maps embed — Magetan, Jawa Timur */}
              <div
                className="rounded-lg overflow-hidden"
                style={{ height: 160 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126302.15484697838!2d111.35764!3d-7.6385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a2d2b1a59e93%3A0x2f0b5b7d6b6a6b6a!2sMagetan%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="160"
                  style={{ border: 0, filter: "grayscale(0.5) contrast(1.05)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Magetan, Jawa Timur"
                />
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

                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/${profile.whatsapp}?text=Halo%20Ridwan%2C%20saya%20ingin%20terhubung%20dengan%20Anda!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full justify-center mt-2"
                    style={{ display: "inline-flex" }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: "#25D366" }}
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat via WhatsApp
                  </a>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
