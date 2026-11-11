"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";
import ButtonCTA from "@/components/ui/ButtonCTA";
import Chip from "@/components/ui/Chip";
import TechBadge from "@/components/ui/TechBadge";
import { scrollToId } from "@/components/fx/SmoothScroll";
import { profile, education, interests, hobbies, stats } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease },
  }),
};

/** Logo teknologi yang ditumpuk di kartu Pendidikan (terpotong tepi kanan). */
const EDU_BADGES = ["next", "typescript", "laravel", "mysql", "flutter"];

export default function AboutSection() {
  const ref = useRef(null);
  // once:false — animasi jalan SETIAP masuk layar (permintaan pemilik 11 Nov).
  // Keluar layar elemen kembali ke posisi awal; bila terasa berkedik, kembalikan ke true.
  const inView = useInView(ref, { once: false, margin: "-15%" });

  const goContact = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    e.preventDefault();
    scrollToId("#contact");
  };

  return (
    <section id="about" ref={ref} className="blend-from-hero py-24 md:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-x-6">
        {/* Kiri: label */}
        <motion.div
          className="lg:col-span-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          <SectionLabel>Tentang Saya</SectionLabel>
        </motion.div>

        {/* Kanan: pernyataan besar (H2 §2.2) */}
        <motion.h2
          className="lg:col-span-8 max-w-[660px] text-[clamp(2rem,3.4vw,3rem)] font-medium leading-[1.1] tracking-[-0.035em]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
        >
          {profile.about}
        </motion.h2>

        {/* CTA di bawah pernyataan (DESIGN §5.2 baris 1) */}
        <motion.div
          className="lg:col-span-8 lg:col-start-5"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
        >
          <ButtonCTA href="#contact" size="md" onClick={goContact}>
            Hubungi Saya
          </ButtonCTA>
        </motion.div>

        {/* Baris 2 — bento, **komposisi dibalik dari referensi** (ATM): klaster
            kiri (stat · pendidikan · minat & hobi), kartu foto di KANAN 35%.
            Mobile tetap foto dulu (order DOM), desktop foto pindah kanan. */}
        <motion.div
          className="lg:col-span-12 mt-4 grid gap-4 lg:mt-12 lg:grid-cols-[1fr_35%] lg:gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={3}
        >
          {/* Kartu foto — cutout menempel dasar, terpotong lurus oleh kartu */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-surface lg:order-2 lg:aspect-auto lg:h-full lg:min-h-[490px]">
            <Image
              src="/screens/profil_ridwan.webp"
              alt="Foto Ridwan Afriza Listiyono"
              width={1402}
              height={1122}
              className="absolute inset-x-0 bottom-0 h-[86%] w-full object-cover"
            />
          </div>

          {/* Klaster kartu — rata bawah dengan kartu foto */}
          <div className="grid gap-4 self-end sm:grid-cols-2 lg:order-1">
            {/* Stat */}
            {stats.map((s) => (
              <div
                key={s.value + s.label[0]}
                className="flex min-h-[100px] items-center justify-between gap-4 rounded-[20px] bg-surface p-5"
              >
                <p className="text-[15px] leading-tight text-fg-muted">
                  {s.label[0]}
                  <br />
                  {s.label[1]}
                </p>
                <p className="tabular text-[36px] font-medium leading-none">
                  {s.value}
                </p>
              </div>
            ))}

            {/* Kartu Pendidikan + klaster badge logo teknologi */}
            <div className="flex flex-col overflow-hidden rounded-[20px] bg-surface p-6">
              <h3 className="text-[1.375rem] font-medium tracking-[-0.02em]">
                Pendidikan
              </h3>
              <ul className="mt-4 space-y-4">
                {education.map((edu) => (
                  <li key={edu.institution}>
                    <p className="text-base font-medium leading-snug">
                      {edu.degree}
                    </p>
                    <p className="mt-1 text-sm text-fg-muted">
                      {edu.institution} · {edu.period}
                    </p>
                  </li>
                ))}
              </ul>
              {/* Klaster badge — RATA DI DALAM kartu (bleed -mr-10 dihapus karena
                  logo Flutter terpotong `overflow-hidden`; permintaan pemilik 11 Nov) */}
              <div className="mt-auto flex justify-end space-x-[-12px] pt-7">
                {EDU_BADGES.map((name) => (
                  <TechBadge key={name} name={name} />
                ))}
              </div>
            </div>

            {/* Kartu Minat & Hobi */}
            <div className="rounded-[20px] bg-surface p-6">
              <h3 className="text-[1.375rem] font-medium tracking-[-0.02em]">
                Minat &amp; Hobi
              </h3>

              <p className="mt-4 text-sm text-fg-muted">Minat</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-fg-muted">Hobi</p>
              <ul className="mt-2 space-y-1.5">
                {hobbies.map((item) => (
                  <li key={item} className="text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
