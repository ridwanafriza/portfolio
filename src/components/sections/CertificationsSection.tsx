"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { BadgeCheck } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Chip from "@/components/ui/Chip";
import { certifications } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Sertifikasi — **komposisi dimodifikasi dari referensi** (ATM): referensi
 * (pola kartu gambar `05-blog.png`) memakai grid 2 kolom kartu persegi;
 * versi ini memakai **baris kartu lebar** — visual gradasi + penerbit di kiri,
 * judul + chip tahun di kanan. Elemen tetap sama: kartu `--surface`, radius,
 * blok gradasi pengganti foto, label penerbit, chip tahun.
 */
export default function CertificationsSection() {
  const ref = useRef(null);
  // once:false — animasi mengulang tiap section masuk layar (permintaan 11 Nov)
  const inView = useInView(ref, { once: false, margin: "-15%" });

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.6, ease },
  });

  return (
    <section id="certificates" ref={ref} className="py-24 md:py-32">
      <div className="wrap-md">
        {/* Header pola B — label & H2 di tengah */}
        <motion.div className="flex justify-center" {...rise(0)}>
          <SectionLabel>Sertifikasi</SectionLabel>
        </motion.div>

        <motion.h2
          className="mx-auto mt-4 max-w-[18ch] text-center text-[clamp(2rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.025em]"
          {...rise(0.08)}
        >
          Sertifikat yang menunjang keahlian saya.
        </motion.h2>

        <div className="mt-12 grid gap-4">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              className="grid gap-5 rounded-[20px] bg-surface p-4 md:grid-cols-[minmax(0,300px)_1fr] md:items-center md:gap-8 md:p-4 md:pr-8"
              {...rise(0.16 + i * 0.08)}
            >
              {/* Blok gambar pengganti — gradasi biru (token) */}
              <div
                className="flex aspect-[1.7] items-center justify-center rounded-[14px] px-6 text-center"
                style={{ background: "var(--cta-gradient)" }}
              >
                <div>
                  <BadgeCheck
                    size={30}
                    strokeWidth={1.5}
                    className="mx-auto text-white"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-base font-medium text-white">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="px-1 md:px-0">
                <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-medium leading-snug tracking-[-0.02em]">
                  {cert.title}
                </h3>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Chip>{cert.year}</Chip>
                  <span className="text-sm text-fg-muted">{cert.issuer}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
