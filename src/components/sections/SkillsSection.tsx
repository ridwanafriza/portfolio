"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassPill from "@/components/ui/GlassPill";
import TechBadge from "@/components/ui/TechBadge";
import ButtonCTA from "@/components/ui/ButtonCTA";
import Chip from "@/components/ui/Chip";
import { scrollToId } from "@/components/fx/SmoothScroll";
import { skills } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

/** Kartu biru = 2 kategori pertama; sisanya kartu putih. */
const isBlue = (i: number) => i < 2;

/** Deskripsi tiap kartu — diturunkan dari isi `skills`, bukan klaim baru. */
const DESCRIPTIONS = [
  "Antarmuka web dengan Next.js, TypeScript, dan PrimeReact.",
  "Sisi server dan logika aplikasi dengan Laravel, Filament, dan Express.js.",
  "MySQL dan PostgreSQL untuk menyimpan data, ditambah Linux tingkat dasar.",
  "Aplikasi mobile dengan Flutter dan Kotlin di Android Studio, dikelola lewat Git.",
];

const PILL_ROTATION = [-8, 5, -4, 9, -6, 3];

/** Badge logo pada busur di kartu "Mobile & Tools". */
const ARC_BADGES = ["flutter", "kotlin", "android", "git"];
const ARC_OFFSET = [14, 0, 0, 14];

export default function SkillsSection() {
  const ref = useRef(null);
  // once:false — animasi mengulang tiap section masuk layar (permintaan 11 Nov)
  const inView = useInView(ref, { once: false, margin: "-15%" });

  const goContact = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    e.preventDefault();
    scrollToId("#contact");
  };

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.6, ease },
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-navy py-24 md:py-28"
    >
      <div className="wrap">
        {/* Header pola B — label & H2 di tengah, teks putih */}
        <motion.div className="flex justify-center" {...rise(0)}>
          <SectionLabel onDark>Keahlian</SectionLabel>
        </motion.div>
        <motion.h2
          className="mx-auto mt-4 max-w-[22ch] text-center text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.025em] text-white"
          {...rise(0.08)}
        >
          Bahasa dan alat yang saya pakai untuk membangun.
        </motion.h2>

        {/* Panel kaca berisi bento — komposisi dimodifikasi (ATM): grid 2 kolom
            (baris atas 2 kartu biru, baris bawah 2 kartu putih) + kartu CTA
            jadi strip horizontal di bawah, bukan kolom 3 dua baris seperti referensi. */}
        <motion.div
          className="mt-12 rounded-[28px] p-4 md:p-6"
          style={{
            background: "var(--glass)",
            border: "1px solid rgba(255,255,255,.08)",
            backdropFilter: "blur(6px)",
          }}
          {...rise(0.16)}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((group, i) => (
              <article
                key={group.category}
                className={`relative flex flex-col overflow-hidden rounded-[20px] p-[22px] ${
                  isBlue(i) ? "text-white" : "bg-surface"
                }`}
                style={isBlue(i) ? { background: "var(--blue-card)" } : undefined}
              >
                <h3 className="text-[1.75rem] font-medium leading-tight tracking-[-0.02em]">
                  {group.category}
                </h3>
                <p
                  className={`mt-3 text-base leading-relaxed ${
                    isBlue(i) ? "text-white/85" : "text-fg-muted"
                  }`}
                >
                  {DESCRIPTIONS[i]}
                </p>

                {/* Kartu biru: pill kaca miring di dasar */}
                {isBlue(i) && (
                  <div className="-ml-1 mt-auto flex flex-wrap gap-2 pt-8 [&>span]:-ml-1">
                    {group.items.map((item, j) => (
                      <GlassPill key={item} rotate={PILL_ROTATION[j % 6]}>
                        {item}
                      </GlassPill>
                    ))}
                  </div>
                )}

                {/* Kartu putih (Database): blok inset berisi chip teknologi —
                    sebelumnya kosong & nyaris tak terlihat di mode gelap */}
                {i === 2 && (
                  <div
                    className="mt-auto flex flex-wrap items-center gap-2 rounded-[12px] border border-[var(--border)] p-3.5"
                    style={{ background: "var(--inset-gradient)" }}
                  >
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] font-medium text-fg-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* Kartu putih (Mobile & Tools): busur konsentris + badge logo */}
                {i === 3 && (
                  <div className="relative mt-auto h-[120px] overflow-hidden" aria-hidden="true">
                    <span
                      className="absolute left-1/2 top-4 h-[280px] w-[280px] -translate-x-1/2 rounded-full border"
                      style={{
                        borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
                      }}
                    />
                    <span
                      className="absolute left-1/2 top-[66px] h-[190px] w-[190px] -translate-x-1/2 rounded-full border"
                      style={{
                        borderColor: "color-mix(in srgb, var(--accent) 22%, transparent)",
                      }}
                    />
                    <div className="absolute inset-x-0 top-7 flex justify-center gap-3">
                      {ARC_BADGES.map((name, j) => (
                        <span
                          key={name}
                          style={{ transform: `translateY(${ARC_OFFSET[j] ?? 0}px)` }}
                        >
                          <TechBadge name={name} />
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}

            {/* Kartu CTA — strip membentang 2 kolom penuh di bawah (deviasi ATM);
                sebelumnya cuma 1 kolom → menyisakan lubang kosong di kanan */}
            <article className="flex flex-col gap-6 overflow-hidden rounded-[20px] bg-surface p-[22px] sm:col-span-2 sm:flex-row sm:items-center sm:gap-8">
              <div
                className="h-[150px] w-full shrink-0 rounded-[14px] sm:h-[170px] sm:w-[40%]"
                style={{ background: "var(--blue-card)" }}
                aria-hidden="true"
              />
              <div className="flex flex-1 flex-col">
                <div>
                  <Chip>Siap berkolaborasi</Chip>
                </div>
                <h3 className="mt-4 text-[1.75rem] font-medium leading-tight tracking-[-0.02em]">
                  Ayo Berkolaborasi
                </h3>
                <p className="mt-3 text-base leading-relaxed text-fg-muted">
                  Diskusikan kebutuhan proyek Anda langsung dengan saya.
                </p>
                <div className="mt-6">
                  <ButtonCTA href="#contact" size="md" onClick={goContact}>
                    Hubungi Saya
                  </ButtonCTA>
                </div>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
