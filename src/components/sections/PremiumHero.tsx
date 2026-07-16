"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconCertificate,
  IconMapPin,
  IconShieldCheck,
} from "@tabler/icons-react";

const ease = [0.22, 1, 0.36, 1] as const;
const HERO_IMAGE = {
  src: "/images/marine-hero.png",
  alt: "Luxury motor yacht cruising near Dubai at blue hour",
};

export default function PremiumHero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 55, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 55, damping: 22 });
  const imageX = useTransform(smoothX, [-0.5, 0.5], ["-1.5%", "1.5%"]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], ["-1%", "1%"]);

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-navy-950"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="absolute -inset-4"
        style={{ x: imageX, y: imageY, scale: 1.04 }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.04, opacity: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          className="object-cover object-[66%_center]"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.97)_0%,rgba(2,6,23,.86)_38%,rgba(2,6,23,.28)_74%,rgba(2,6,23,.16)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.55)_0%,transparent_35%,rgba(2,6,23,.8)_100%)]" />
      <div className="absolute inset-0 opacity-[.12] [background-image:linear-gradient(rgba(110,196,216,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(110,196,216,.25)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-28 pt-28 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/25 bg-cyan-accent/[.08] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-ocean-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent shadow-[0_0_12px_#4ecdc4]" />
              Maritime desk online
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[.18em] text-white/55">
              <IconMapPin size={14} />
              Dubai · UAE
            </span>
          </motion.div>

          <h1
            id="hero-heading"
            className="max-w-[13ch] font-display text-[clamp(3.25rem,8.5vw,7.6rem)] font-bold leading-[.88] tracking-[-.055em] text-white"
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.95, ease }}
            >
              Maritime,
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-cyan-accent via-ocean-300 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.95, ease }}
            >
              made certain.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-silver-200/75 sm:text-lg lg:text-xl"
          >
            Registration, naval architecture and regulatory clearance for
            pleasure yachts, commercial fleets and foreign vessels—handled
            end-to-end by one experienced Dubai team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82, duration: 0.8, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-cyan-accent px-7 text-sm font-bold text-navy-950 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_55px_rgba(78,205,196,.25)]"
            >
              Discuss your vessel
              <IconArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#services")}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[.06] px-7 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/35 hover:bg-white/[.12]"
            >
              Explore capabilities
              <IconArrowDown size={17} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.9 }}
            className="mt-12 grid max-w-2xl grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-5"
          >
            {[
              ["14+", "Years in UAE"],
              ["500+", "Vessels guided"],
              ["6", "Authority links"],
            ].map(([value, label]) => (
              <div key={label} className="px-3 first:pl-0 sm:px-6 sm:first:pl-0">
                <strong className="font-display text-2xl text-white sm:text-3xl">
                  {value}
                </strong>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[.16em] text-white/45 sm:text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease }}
        className="absolute bottom-10 right-8 z-20 hidden w-72 rounded-2xl border border-white/15 bg-navy-950/55 p-4 shadow-2xl backdrop-blur-xl xl:block"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-accent/15 text-cyan-accent">
              <IconShieldCheck size={21} />
            </span>
            <div>
              <p className="text-xs font-bold text-white">Compliance route</p>
              <p className="text-[10px] uppercase tracking-[.14em] text-white/45">
                Managed end-to-end
              </p>
            </div>
          </div>
          <IconCertificate className="text-ocean-300/70" size={20} />
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-ocean-500 to-cyan-accent"
            initial={{ width: 0 }}
            animate={{ width: "82%" }}
            transition={{ delay: 1.45, duration: 1.4, ease }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[9px] font-semibold uppercase tracking-[.15em] text-white/40">
          <span>Documents</span>
          <span>Authority</span>
          <span>Delivery</span>
        </div>
      </motion.div>
    </section>
  );
}
