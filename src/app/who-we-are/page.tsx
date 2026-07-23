import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconCheck, IconCompass, IconShieldCheck } from "@tabler/icons-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import DetailHero from "@/components/sections/DetailHero";
import { siteConfig, whoWeAreContent } from "@/data/site-content";

const values = [
  ["01", "Clear communication", "One accountable team keeps owners, captains and authorities aligned."],
  ["02", "Technical confidence", "Every document is prepared to be understood, reviewed and approved."],
  ["03", "Long-term partnership", "We stay close beyond registration, supporting renewals and changing needs."],
];

export default function WhoWeArePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DetailHero eyebrow="Our story" breadcrumb="Who we are" title="The team behind smoother waters." description="Marine Registration Services is a Dubai-based maritime partner helping owners and operators move from complex requirements to clear, confident action." image="/images/marine-experts.png" imageAlt="Marine experts reviewing vessel plans in a Dubai office" />

        <section className="relative py-24 sm:py-28 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[.24em] text-cyan-accent">A steady hand</span>
              <h2 className="mt-5 max-w-[10ch] font-display text-[clamp(2.5rem,5vw,4.8rem)] font-bold leading-[.95] tracking-[-.045em] text-white">Experience that keeps moving.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-silver-300/75 sm:text-lg">
              <p>{whoWeAreContent.intro}</p>
              <p>Our role is simple: bring the right technical knowledge, documentation and authority coordination together before it becomes a problem. Whether it is a pleasure yacht, a commercial fleet or a foreign-flagged vessel, we make the route visible and manageable.</p>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
                {[["2011", "Founded"], ["500+", "Vessels guided"], ["6", "Authority links"], ["UAE", "Home waters"]].map(([value, label]) => <div key={label} className="bg-navy-950 p-4 sm:p-5"><strong className="font-display text-2xl text-white">{value}</strong><span className="mt-1 block text-[10px] font-bold uppercase tracking-[.15em] text-white/40">{label}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/[.07] bg-navy-900/35 py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><span className="text-[11px] font-bold uppercase tracking-[.24em] text-cyan-accent">What guides us</span><h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[.95] tracking-[-.045em] text-white">Built for certainty.</h2></div><p className="max-w-md text-base leading-7 text-silver-300/65">The detail matters. So does the way it feels to work with the people handling it.</p></div>
            <div className="grid gap-3 md:grid-cols-3">{values.map(([number, title, text]) => <article key={number} className="group rounded-2xl border border-white/[.08] bg-navy-950/75 p-6 transition hover:-translate-y-1 hover:border-cyan-accent/35 sm:p-8"><span className="font-display text-sm font-bold text-ocean-300/70">{number}</span><h3 className="mt-12 font-display text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-silver-300/60">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="relative py-24 sm:py-28 lg:py-36"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8"><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10"><Image src="/images/naval-survey.png" alt="Marine surveyor inspecting a vessel" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /><div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" /><div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-navy-950/70 p-4 backdrop-blur-xl"><div className="flex items-center gap-3"><IconShieldCheck className="text-cyan-accent" size={21}/><span className="text-sm font-semibold text-white">Trusted maritime partner since {siteConfig.yearFounded}</span></div></div></div><div><span className="text-[11px] font-bold uppercase tracking-[.24em] text-cyan-accent">Connected expertise</span><h2 className="mt-5 max-w-[11ch] font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[.95] tracking-[-.045em] text-white">From the drawing board to the water.</h2><p className="mt-7 text-base leading-8 text-silver-300/70">Our team brings together registration specialists, naval architecture knowledge and practical local relationships. That combination lets us solve the whole route, not just one part of it.</p><ul className="mt-8 space-y-3">{whoWeAreContent.authorities.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-white/75"><IconCheck size={17} className="mt-0.5 shrink-0 text-cyan-accent" />{item}</li>)}</ul><Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-cyan-accent px-6 py-3 text-sm font-bold text-navy-950 transition hover:bg-white">Talk to our team <IconArrowUpRight size={17}/></Link></div></div></section>
      </main>
      <Footer />
    </>
  );
}
