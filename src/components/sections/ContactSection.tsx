"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ButtonCTA from "@/components/ui/ButtonCTA";
import SocialIcon from "@/components/ui/SocialIcon";
import { profile, waLink, socials } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Kontak + Footer (latar `--navy-bg`), **komposisi dimodifikasi dari referensi**
 * (ATM — AGENTS §2b): referensi menumpuk H2 lebar + grid 5 kotak outline;
 * versi ini membelah dua kolom — kiri H2 + tombol WA, kanan **daftar tautan
 * vertikal** (baris hairline + panah) — lalu footer bar membentang penuh.
 * Elemen tetap sama: label, H2, tombol `ButtonCTA`, ikon brand, hairline, © + sosial.
 */
export default function ContactSection() {
  const ref = useRef(null);
  // once:false — animasi mengulang tiap section masuk layar (permintaan 11 Nov)
  const inView = useInView(ref, { once: false, margin: "-10%" });
  const year = new Date().getFullYear();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.6, ease },
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-navy-top pt-24 pb-10 md:pt-32"
    >
      <div className="wrap-md">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-6">
          {/* Kiri: label + H2 + bantu + tombol */}
          <div className="lg:col-span-6">
            <motion.div {...rise(0)}>
              <SectionLabel onDark>Kontak</SectionLabel>
            </motion.div>

            <motion.h2
              className="mt-4 font-semibold leading-[1.08] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(2rem, 3.6vw, 2.75rem)" }}
              {...rise(0.08)}
            >
              Punya proyek atau ide?
              <br />
              Ayo ngobrol.
            </motion.h2>

            <motion.p
              className="mt-5 text-base text-white/80 md:text-lg"
              {...rise(0.14)}
            >
              Balasan biasanya cepat.
            </motion.p>

            <motion.div className="mt-8" {...rise(0.2)}>
              <ButtonCTA href={waLink} variant="light" size="lg" whatsapp>
                Hubungi Saya via WhatsApp
              </ButtonCTA>
            </motion.div>
          </div>

          {/* Kanan: daftar tautan vertikal (bukan grid kotak) */}
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
            <ul className="border-b border-white/25">
              {socials.map((s, i) => (
                <motion.li
                  key={s.id}
                  className="border-t border-white/25"
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.24 + i * 0.05, duration: 0.5, ease }}
                >
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={`${s.label} — buka di tab baru`}
                    className="-mx-3 flex items-center gap-4 rounded-lg px-3 py-4 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <SocialIcon id={s.id} size={20} />
                    <span className="text-[17px] font-medium leading-none">
                      {s.label}
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="ml-auto text-white/60 transition-colors group-hover:text-white"
                      aria-hidden="true"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bar — hanya copyright; deret ikon sosial di atas (daftar tautan)
            sudah cukup, dua deret icon dianggap membingungkan oleh pemilik (10 Nov) */}
        <div className="mt-16 h-px" style={{ background: "rgba(255,255,255,.25)" }} />
        <div className="py-7">
          <p className="text-sm text-white/85">
            © {year} {profile.name}.
          </p>
        </div>
      </div>
    </section>
  );
}
