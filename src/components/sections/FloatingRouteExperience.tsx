"use client";

import Link from "next/link";
import { useState } from "react";

import { motion, useReducedMotion } from "motion/react";
import {
  IconAnchor,
  IconArrowUpRight,
  IconCertificate,
  IconCompass,
  IconFileDescription,
  IconRoute,
  IconShieldCheck,
  IconSpeedboat,
} from "@tabler/icons-react";

import CardStack from "@/components/ui/CardStack";

const floatingTokens = [
  { icon: IconAnchor, tone: "from-cyan-accent/90 via-ocean-400 to-blue-700", className: "-left-8 top-12 h-28 w-28 sm:left-[5%] sm:h-36 sm:w-36", delay: 0, duration: 9 },
  { icon: IconCompass, tone: "from-violet-300 via-fuchsia-500 to-purple-900", className: "left-[19%] top-[45%] hidden h-24 w-24 lg:grid", delay: 1.2, duration: 10 },
  { icon: IconCertificate, tone: "from-amber-200 via-yellow-500 to-orange-700", className: "right-[7%] top-8 h-32 w-32 sm:right-[11%] sm:h-40 sm:w-40", delay: 0.7, duration: 10.5 },
  { icon: IconShieldCheck, tone: "from-teal-200 via-emerald-500 to-cyan-800", className: "-right-5 bottom-28 h-24 w-24 sm:right-[4%] sm:h-32 sm:w-32", delay: 1.8, duration: 8.8 },
  { icon: IconRoute, tone: "from-sky-200 via-blue-500 to-indigo-900", className: "bottom-4 left-[11%] hidden h-32 w-32 sm:grid", delay: 2.3, duration: 11 },
];

const serviceCards = [
  { title: "Yacht registration", description: "A guided route to registration.", icon: IconSpeedboat },
  { title: "Authority documents", description: "Prepared for clear review.", icon: IconFileDescription },
  { title: "Safety compliance", description: "Inspection-ready support.", icon: IconShieldCheck },
  { title: "Certificate renewal", description: "Key milestones managed.", icon: IconCertificate },
  { title: "Foreign permits", description: "Local UAE coordination.", icon: IconAnchor },
  { title: "Technical review", description: "Documentation that stands up.", icon: IconCompass },
];

const routeStackItems = [
  { id: "yacht", title: "Yacht registration", description: "A managed route from documents to certificate.", image: "/images/services/yacht-registration.png", href: "/services/yacht-registration", tag: "Registration" },
  { id: "technical", title: "Technical drawings", description: "Documentation prepared for clear review.", image: "/images/services/general-arrangements.png", href: "/services/general-arrangements", tag: "Engineering" },
  { id: "stability", title: "Trim & stability", description: "Practical technical support for your vessel.", image: "/images/services/trim-stability.png", href: "/services/trim-stability", tag: "Technical" },
  { id: "survey", title: "Marine survey", description: "The right inspection route, coordinated locally.", image: "/images/services/load-tests.png", href: "/services/load-tests", tag: "Survey" },
  { id: "commercial", title: "Commercial vessels", description: "Operational paperwork handled with care.", image: "/images/services/commercial-vessel-registration.png", href: "/services/commercial-vessel-registration", tag: "Commercial" },
];

export default function FloatingRouteExperience() {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const repeatedCards = [...serviceCards, ...serviceCards];

  return (
    <section className="relative overflow-hidden bg-[#030714] py-20 sm:py-28 lg:py-36" aria-labelledby="route-experience-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(36,117,255,.24),transparent_27%),radial-gradient(circle_at_82%_78%,rgba(78,205,196,.17),transparent_30%),linear-gradient(140deg,#02030a,#071129_50%,#02040d)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[.16] [background-image:radial-gradient(rgba(119,213,255,.7)_1px,transparent_1px)] [background-size:34px_34px]" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {floatingTokens.map((token, index) => {
          const Icon = token.icon;
          return (
            <motion.div
              key={`${token.className}-${index}`}
              className={`absolute grid place-items-center rounded-full bg-gradient-to-br ${token.tone} p-[3px] shadow-[0_0_42px_rgba(66,131,255,.45)] ${token.className}`}
              initial={{ opacity: 0, rotateX: 22, rotateY: -28 }}
              animate={shouldReduceMotion ? { opacity: 0.72 } : { opacity: [0.58, 1, 0.58], y: [0, -22, 0], rotateZ: [0, 14, 0], rotateY: [-18, 18, -18] }}
              transition={{ delay: token.delay, duration: token.duration, repeat: Infinity, ease: "easeInOut" }}
              style={{ perspective: 900 }}
            >
              <span className="grid h-full w-full place-items-center rounded-full border border-white/35 bg-navy-950/80 text-white shadow-[inset_0_2px_12px_rgba(255,255,255,.28),inset_0_-14px_22px_rgba(0,0,0,.55)]">
                <Icon size={34} stroke={1.35} />
              </span>
              <span className="absolute inset-2 rounded-full border border-white/15" />
            </motion.div>
          );
        })}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl rounded-[2rem] border border-white/20 bg-navy-950/65 p-2 shadow-[0_28px_100px_rgba(0,0,0,.45)] backdrop-blur-2xl"
        >
          <div className="rounded-[1.6rem] border border-white/[.08] bg-gradient-to-b from-white/[.10] to-white/[.025] p-7 text-center sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/25 bg-cyan-accent/[.09] px-3 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-cyan-accent">
              <IconRoute size={15} />
              Managed vessel route
            </span>
            <h2 id="route-experience-title" className="mx-auto mt-6 max-w-[12ch] font-display text-4xl font-bold leading-[.96] tracking-[-.04em] text-white sm:text-5xl">
              Find the right route for your vessel.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-silver-300/75 sm:text-base">
              From vessel particulars to authority delivery, one experienced Dubai team keeps every requirement clear and moving.
            </p>
            <div className="mt-7 grid gap-2 rounded-2xl border border-white/[.09] bg-navy-950/55 p-3 text-left">
              <div className="flex items-center justify-between rounded-xl bg-white/[.045] px-4 py-3">
                <span><span className="block text-[10px] font-bold uppercase tracking-[.16em] text-cyan-accent">You bring</span><strong className="mt-1 block text-sm text-white">Vessel particulars</strong></span>
                <IconSpeedboat className="text-cyan-accent" size={24} />
              </div>
              <div className="relative flex items-center justify-between rounded-xl bg-white/[.045] px-4 py-3">
                <span className="absolute -top-5 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-navy-900 text-cyan-accent">↕</span>
                <span><span className="block text-[10px] font-bold uppercase tracking-[.16em] text-ocean-300">You receive</span><strong className="mt-1 block text-sm text-white">A managed approval route</strong></span>
                <IconShieldCheck className="text-ocean-300" size={24} />
              </div>
            </div>
            <Link href="/quote-request" className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-accent to-ocean-400 px-5 text-sm font-bold text-navy-950 transition hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(78,205,196,.25)]">
              Discuss your vessel <IconArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
        <CardStack items={routeStackItems} />
      </div>

      <div className="relative mt-14 overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <motion.div
          className="flex w-max gap-4 px-5 sm:px-6"
          animate={shouldReduceMotion || isPaused ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        >
          {repeatedCards.map((card, index) => {
            const Icon = card.icon;
            const isAccentCard = index % serviceCards.length === 2;
            return (
              <motion.article key={`${card.title}-${index}`} whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.03 }} className={`flex w-64 shrink-0 items-center gap-4 rounded-2xl border p-4 backdrop-blur-xl transition sm:w-72 ${isAccentCard ? "border-cyan-accent/45 bg-cyan-accent/[.10] shadow-[0_0_32px_rgba(78,205,196,.14)]" : "border-white/12 bg-white/[.055] hover:border-cyan-accent/35 hover:bg-white/[.08]"}`}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-accent/20 bg-navy-950/60 text-cyan-accent"><Icon size={21} stroke={1.7} /></span>
                <span><strong className="block text-sm font-bold text-white">{card.title}</strong><span className="mt-1 block text-xs text-silver-300/60">{card.description}</span></span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
