"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  IconArrowUpRight,
  IconSpeedboat,
  IconBuildingFactory2,
  IconChartArcs3,
  IconChecklist,
  IconFileCertificate,
  IconFlame,
  IconRulerMeasure,
  IconSailboat,
  IconShieldCheck,
  IconWorld,
} from "@tabler/icons-react";

import MaritimeDecoration from "@/components/ui/MaritimeDecoration";

const ease = [0.22, 1, 0.36, 1] as const;
const marineImages = {
  hero: "/images/marine-hero.png",
  heroAlt: "Luxury motor yacht cruising near Dubai at blue hour",
  whoWeAre: "/images/marine-experts.png",
  whoWeAreAlt: "Naval architects reviewing yacht plans in a Dubai marine office",
  commercialDocs: "/images/commercial-vessel.png",
  commercialDocsAlt: "Commercial cargo vessel entering a Gulf port with tug assistance",
  foreignDocs: "/images/foreign-yacht.png",
  foreignDocsAlt: "International sailing yacht arriving in Dubai coastal waters",
};

const capabilities = [
  {
    title: "Registration & renewal",
    text: "New registrations, transfers and annual renewals coordinated with the relevant UAE authority.",
    icon: IconFileCertificate,
  },
  {
    title: "Stability engineering",
    text: "Trim, stability and damage assessment booklets prepared for technical approval.",
    icon: IconChartArcs3,
  },
  {
    title: "Naval architecture",
    text: "General arrangements, lines plans, offset tables and structural documentation.",
    icon: IconRulerMeasure,
  },
  {
    title: "Survey & load testing",
    text: "Inclining experiments, load tests, lightship and draft surveys managed on site.",
    icon: IconChecklist,
  },
  {
    title: "Commercial compliance",
    text: "Fleet licensing, tonnage, crew documentation and port authority clearances.",
    icon: IconBuildingFactory2,
  },
  {
    title: "Foreign vessel permits",
    text: "Temporary import, cruising licences and cross-border documentation support.",
    icon: IconWorld,
  },
  {
    title: "Fire & safety plans",
    text: "Safety plans, equipment support and compliance documentation for inspection.",
    icon: IconFlame,
  },
  {
    title: "Insurance support",
    text: "Practical guidance on the policies and supporting certificates authorities expect.",
    icon: IconShieldCheck,
  },
];

const vesselRoutes = [
  {
    id: "pleasure",
    label: "Pleasure",
    title: "Yachts & leisure craft",
    text: "A discreet registration service for owners, brokers and management companies—from first document check to certificate delivery.",
    image: marineImages.hero,
    alt: marineImages.heroAlt,
    icon: IconSpeedboat,
    tags: ["New registration", "Renewal", "Ownership transfer"],
  },
  {
    id: "commercial",
    label: "Commercial",
    title: "Working vessels & fleets",
    text: "Technical documentation and authority coordination designed around commercial timelines and operational continuity.",
    image: marineImages.commercialDocs,
    alt: marineImages.commercialDocsAlt,
    icon: IconBuildingFactory2,
    tags: ["Fleet licensing", "Tonnage", "Safety certification"],
  },
  {
    id: "foreign",
    label: "International",
    title: "Foreign-flagged vessels",
    text: "One local point of contact for cruising permits, temporary import and approvals in UAE waters.",
    image: marineImages.foreignDocs,
    alt: marineImages.foreignDocsAlt,
    icon: IconSailboat,
    tags: ["Cruising permit", "Temporary import", "Flag documents"],
  },
];

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.85, ease }}
    >
      {children}
    </motion.div>
  );
}

export function PremiumStory() {
  return (
    <section id="who-we-are" className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-ocean-500/[.08] blur-[110px]" />
      <MaritimeDecoration symbol="compass" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-24 lg:px-8">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.03] p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem]">
              <Image
                src={marineImages.whoWeAre}
                alt={marineImages.whoWeAreAlt}
                fill
                className="object-cover transition duration-1000 hover:scale-[1.035]"
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            </div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 26 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.8, ease }}
            className="absolute -bottom-6 right-2 w-[72%] rounded-2xl border border-white/15 bg-navy-900/85 p-5 shadow-2xl backdrop-blur-xl sm:-right-7 sm:w-64"
          >
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-ocean-300">
              Built around certainty
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Technical precision with one accountable local team.
            </p>
          </motion.div>
        </Reveal>

        <Reveal className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-[.24em] text-cyan-accent">
            Who we are
          </span>
          <h2 className="mx-auto mt-5 max-w-[12ch] font-display text-[clamp(2.55rem,5vw,5rem)] font-bold leading-[.98] tracking-[-.045em] text-white">
            The calm hand behind every clearance.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-silver-300/75 sm:text-lg">
            {`Since 2011, we have helped owners and operators turn complex maritime requirements into a clear, managed route. Our work connects naval engineering, documentation and authority liaison—so nothing gets lost between the drawing board and the water.`}
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {[
              ["01", "Dubai-based expertise"],
              ["02", "Local & international vessels"],
              ["03", "Technical documentation"],
              ["04", "Authority coordination"],
            ].map(([number, value]) => (
              <div key={number} className="bg-navy-950/95 p-4 text-center sm:p-5">
                <span className="text-[10px] font-bold tracking-[.18em] text-ocean-400">
                  {number}
                </span>
                <p className="mt-2 text-xs font-semibold text-white/80 sm:text-sm">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PremiumCapabilities() {
  return (
    <section id="services" className="relative overflow-hidden border-y border-white/[.06] bg-navy-900/35 py-24 sm:py-28 lg:py-36">
      <div className="absolute inset-0 maritime-grid opacity-20" />
      <MaritimeDecoration position="left" symbol="anchor" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[.24em] text-cyan-accent">
              Complete capability
            </span>
            <h2 className="mx-auto mt-5 max-w-[13ch] font-display text-[clamp(2.55rem,5vw,4.75rem)] font-bold leading-[.98] tracking-[-.045em] text-white">
              From first drawing to final certificate.
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-silver-300/70">
            Every service is connected. That means fewer hand-offs, cleaner
            documentation and a faster route through review.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (index % 4) * 0.07, duration: 0.7, ease }}
                whileHover={{ y: -8 }}
                className="group relative min-h-52 overflow-hidden rounded-2xl border border-white/[.08] bg-navy-950/75 p-5 transition-colors hover:border-cyan-accent/35 sm:min-h-64 sm:p-6"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-ocean-500/0 blur-3xl transition-colors duration-500 group-hover:bg-ocean-500/15" />
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-ocean-400/20 bg-ocean-400/[.08] text-ocean-300 transition group-hover:border-cyan-accent/45 group-hover:text-cyan-accent">
                    <Icon size={21} stroke={1.7} />
                  </span>
                  <span className="text-[10px] font-bold tracking-[.18em] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-silver-300/60">
                  {item.text}
                </p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-accent to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-white/[.08] bg-white/[.035] p-5 text-center sm:p-6">
          <p className="text-sm text-white/65">
            Also covering{" "}
            <span className="font-semibold text-white">
              17+ specialist technical services
            </span>{" "}
            including tank calibration, powering and equipment calculations.
          </p>
          <button
            type="button"
            onClick={() => {
              window.location.href = "/contact";
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-accent transition hover:text-white"
          >
            Ask about a service
            <IconArrowUpRight size={17} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export function PremiumVesselRoutes() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-36" aria-labelledby="vessel-routes-title">
      <MaritimeDecoration symbol="compass" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[.24em] text-cyan-accent">
            Choose your route
          </span>
          <h2
            id="vessel-routes-title"
            className="mx-auto mt-5 max-w-[14ch] font-display text-[clamp(2.55rem,5vw,4.75rem)] font-bold leading-[.98] tracking-[-.045em] text-white"
          >
            Different vessels. One clear standard.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-5">
          {vesselRoutes.map((route, index) => {
            const Icon = route.icon;
            return (
              <motion.article
                id={route.id}
                key={route.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.85, ease }}
                className="group grid overflow-hidden rounded-[1.75rem] border border-white/[.08] bg-navy-900/45 lg:grid-cols-[1.05fr_.95fr]"
              >
                <div className={`relative min-h-72 overflow-hidden sm:min-h-96 ${index % 2 ? "lg:order-2" : ""}`}>
                  <Image
                    src={route.image}
                    alt={route.alt}
                    fill
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-950/55 px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white backdrop-blur-md">
                    <Icon size={15} className="text-cyan-accent" />
                    {route.label}
                  </span>
                </div>

                <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${index % 2 ? "lg:order-1" : ""}`}>
                  <span className="font-display text-sm font-bold text-ocean-300/70">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {route.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-silver-300/70">
                    {route.text}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {route.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.12em] text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PremiumEngineering() {
  return (
    <section className="relative overflow-hidden border-y border-white/[.06] bg-navy-900/30 py-24 sm:py-28 lg:py-36">
      <MaritimeDecoration position="left" symbol="anchor" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <Reveal className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-[.24em] text-cyan-accent">
            Engineering desk
          </span>
          <h2 className="mx-auto mt-5 max-w-[12ch] font-display text-[clamp(2.55rem,5vw,4.75rem)] font-bold leading-[.98] tracking-[-.045em] text-white">
            Precision you can put before an authority.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-silver-300/70">
            Our naval architecture work is built to be reviewed, understood and
            approved—not simply made to look complete.
          </p>
          <ul className="mx-auto mt-9 grid max-w-lg gap-3 text-left sm:grid-cols-2" role="list">
            {[
              "Stability & hydrostatics",
              "General arrangements",
              "Lines & offset tables",
              "Freeboard calculations",
              "Damage stability",
              "Resistance & powering",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent shadow-[0_0_10px_#4ecdc4]" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/images/naval-survey.png"
              alt="Marine surveyor inspecting a commercial vessel in dry dock"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />
            <motion.div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-accent to-transparent shadow-[0_0_18px_#4ecdc4]"
              animate={{ y: [0, 440, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/15 bg-navy-950/75 p-4 backdrop-blur-xl sm:left-8 sm:right-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-ocean-300">
                Technical review
              </p>
              <p className="mt-1 text-xs text-white/60">Field data → approved documentation</p>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cyan-accent text-navy-950">
              <IconShieldCheck size={19} />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
