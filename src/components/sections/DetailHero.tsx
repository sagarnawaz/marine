"use client";

import Image from "next/image";
import Link from "next/link";

import { IconArrowRight, IconArrowUpRight, IconMapPin } from "@tabler/icons-react";
import { motion, useReducedMotion } from "motion/react";

import MaritimeDecoration from "@/components/ui/MaritimeDecoration";

interface DetailHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumb: string;
}

const revealTransition = { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const };

export default function DetailHero({ eyebrow, title, description, image, imageAlt, breadcrumb }: DetailHeroProps) {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: "105%" }, animate: { opacity: 1, y: 0 } };

  return (
    <section data-motion="none" className="relative overflow-hidden border-b border-white/[.07] pt-24 sm:pt-32">
      <div className="absolute inset-0 maritime-grid opacity-20" aria-hidden="true" />
      <MaritimeDecoration symbol="compass" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-14 sm:gap-10 sm:px-6 sm:pb-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24">
        <div className="max-w-xl">
          <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...revealTransition, duration: 0.45 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/45 transition hover:text-cyan-accent">
              Home <IconArrowRight size={13} /> {breadcrumb}
            </Link>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ...revealTransition, delay: 0.08 }} className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-cyan-accent">
            <span>{eyebrow}</span><span className="h-px w-10 bg-cyan-accent/50" />
          </motion.div>
          <div className="mt-5 overflow-hidden">
            <motion.h1 {...reveal} transition={{ ...revealTransition, delay: 0.14 }} className="max-w-[16ch] font-display text-4xl font-bold leading-[.98] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </motion.h1>
          </div>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ ...revealTransition, delay: 0.28 }} className="mt-5 max-w-lg text-sm leading-7 text-silver-300/75 sm:text-base sm:leading-7">
            {description}
          </motion.p>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...revealTransition, delay: 0.38 }} className="mt-7 flex flex-wrap items-center gap-4">
            <Link href="/quote-request" className="group inline-flex items-center gap-2 rounded-full bg-cyan-accent px-5 py-3 text-sm font-bold text-navy-950 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_35px_rgba(78,205,196,.2)]">
              Request a quote <IconArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-white/50"><IconMapPin size={14} className="text-cyan-accent" /> Dubai · UAE</span>
          </motion.div>
        </div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 22 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ ...revealTransition, delay: 0.18 }} className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-900/60 shadow-2xl">
          <Image src={image} alt={imageAlt} fill priority className="object-cover transition duration-700 hover:scale-[1.03]" sizes="(max-width: 1024px) 100vw, 55vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-navy-950/60 px-3 py-2 text-[9px] font-bold uppercase tracking-[.14em] text-white/75 backdrop-blur-md sm:bottom-5 sm:left-5 sm:text-[10px] sm:tracking-[.16em]">Marine Registration Services</div>
        </motion.div>
      </div>
    </section>
  );
}
