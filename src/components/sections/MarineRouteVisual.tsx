"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { IconCompass, IconRoute } from "@tabler/icons-react";

export default function MarineRouteVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-white/[.06] bg-navy-900/35 py-16 sm:py-20">
      <div className="absolute inset-0 maritime-grid opacity-15" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-cyan-accent/15 bg-navy-950/85 shadow-[0_24px_70px_rgba(2,6,23,.35)] lg:grid-cols-[.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-5 sm:p-10 lg:p-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-accent/20 bg-cyan-accent/[.07] px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-cyan-accent">
              <IconRoute size={15} />
              Your route, managed
            </span>
            <h2 className="mt-6 max-w-[15ch] font-display text-[clamp(2rem,8vw,2.5rem)] font-bold leading-[1.02] tracking-tight text-white sm:max-w-[12ch] sm:text-5xl sm:leading-[.98]">
              A clearer course from first call to final certificate.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-silver-300/70 sm:mt-6 sm:text-lg">
              We connect your documents, vessel particulars and authority requirements into one visible route—so every next step is easy to understand.
            </p>
          </div>

          <div className="relative min-h-72 overflow-hidden sm:min-h-96">
            <Image
              src="/images/marine-route-visual.png"
              alt="Top-down yacht following a teal navigation route across deep navy water"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/55 via-transparent to-transparent" />
            <div className="absolute inset-x-8 top-1/2 h-px overflow-hidden bg-cyan-accent/30 sm:inset-x-12" aria-hidden="true">
              <motion.span
                className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_7px_rgba(78,205,196,.7)]"
                animate={shouldReduceMotion ? undefined : { left: ["0%", "100%"] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <motion.div
              className="absolute bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-navy-950/75 p-3.5 backdrop-blur-xl sm:bottom-7 sm:right-7"
              animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-accent/15 text-cyan-accent">
                <IconCompass size={19} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-cyan-accent">Live route</p>
                <p className="mt-1 text-xs font-semibold text-white">Documents → Delivery</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
