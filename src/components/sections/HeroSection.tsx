"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { profile, stats, socials } from "@/lib/data";
import SocialIcon from "@/components/ui/SocialIcon";

const ease = [0.16, 1, 0.3, 1] as const;

/** Id sosial yang tampil di hero — hanya LinkedIn & GitHub (DESIGN §5.1, amandemen 9 Nov). */
const HERO_SOCIAL_IDS = ["linkedin", "github"];

export default function HeroSection() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 16 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  });

  const [line1, line2] = profile.headline.includes(" & ")
    ? profile.headline.split(" & ")
    : [profile.headline, ""];

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-hero min-h-[min(100svh,880px)] pt-[88px] pb-12 md:block md:pt-0 md:pb-0 flex flex-col"
    >
      {/* Ghost text — di belakang arch (DESIGN §5.1) */}
      <motion.span
        className="ghost"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.03 }}
      >
        RIDWAN
      </motion.span>

      {/* Arch + foto + pill */}
      <motion.div className="hero-figure" {...rise(0.06)}>
        <div className="arch" aria-hidden="true" />
        <div className="photo">
          <Image
            src="/screens/profil_ridwan.webp"
            alt="Foto Ridwan Afriza Listiyono"
            width={1402}
            height={1122}
            priority
            className="cutout"
          />
        </div>
        <span className="pill pill-float pill-left float-soft">
          Web Development
        </span>
        <span
          className="pill pill-float pill-right float-soft"
          style={{ animationDelay: "2s" }}
        >
          Mobile Development
        </span>
        {/* Pill ketiga — di bawah "Mobile Development", sejajar tapi lebih rendah */}
        <span
          className="pill pill-float pill-third float-soft"
          style={{ animationDelay: "4s" }}
        >
          UI/UX Designer
        </span>
      </motion.div>

      {/* Blok bawah: teks kiri + stat kanan */}
      <div className="relative z-10 mt-10 md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:pb-[72px]">
        <div className="wrap flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
          {/* Kiri: sapaan + H1 + ringkasan */}
          <div className="md:max-w-[46%]">
            <motion.p
              className="text-[15px] leading-snug text-fg-muted"
              {...rise(0.12)}
            >
              {profile.greeting}
            </motion.p>
            <motion.h1
              className="mt-2 text-[clamp(2.5rem,4.6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
              {...rise(0.18)}
            >
              {line1} &amp;
              {line2 && (
                <>
                  <br />
                  {line2}
                </>
              )}
            </motion.h1>
            {/* HeroLinks — tepat 2 tautan: LinkedIn & GitHub (DESIGN §5.1) */}
            <motion.div className="mt-7 flex flex-wrap gap-3" {...rise(0.3)}>
              {socials
                .filter((s) => HERO_SOCIAL_IDS.includes(s.id) && s.href)
                .map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} Ridwan Afriza (tab baru)`}
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-surface pl-3 pr-4 text-sm font-medium text-fg shadow-sm transition-colors hover:bg-accent hover:text-white"
                  >
                    <SocialIcon id={s.id} size={16} />
                    {s.label}
                  </a>
                ))}
            </motion.div>
          </div>

          {/* Kanan: 2 stat card bertumpuk */}
          <motion.div
            className="grid shrink-0 grid-cols-2 gap-2.5 md:w-[clamp(220px,26vw,300px)] md:grid-cols-1"
            {...rise(0.42)}
          >
            {stats.map((s, i) => (
              <div
                key={s.value + i}
                className={`stat-card flex items-center justify-between gap-4 ${i === 1 ? "stat-fade" : ""}`}
              >
                <p className="text-[13px] leading-tight text-fg-muted">
                  {s.label[0]}
                  <br />
                  {s.label[1]}
                </p>
                <p className="tabular text-[1.75rem] font-medium leading-none md:text-[2rem]">
                  {s.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
