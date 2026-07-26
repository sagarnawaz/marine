import Link from "next/link";

import ContentCard from "@/components/cards/ContentCard";
import DetailHero from "@/components/sections/DetailHero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { testimonials } from "@/data/site-content";

export default function Testimonials() {
  return <><Header /><main id="main-content"><DetailHero eyebrow="Client stories" breadcrumb="Testimonials" title="Confidence, from first call to final certificate." description="Owners, captains and fleet teams choose us when their paperwork, compliance and vessel timelines need a dependable local partner." image="/images/marine-experts.png" imageAlt="Marine professionals reviewing vessel documentation" /><section className="mx-auto max-w-6xl px-5 py-20 sm:py-28"><div className="grid gap-4 md:grid-cols-2">{testimonials.map((testimonial) => <ContentCard key={testimonial.id} className="min-h-72"><figure><blockquote className="font-display text-xl leading-8 text-white">“{testimonial.quote}”</blockquote><figcaption className="mt-8 text-sm text-cyan-accent">{testimonial.author}<span className="mt-1 block text-silver-300/60">{testimonial.role}</span></figcaption></figure></ContentCard>)}</div><div className="mt-12 rounded-2xl border border-cyan-accent/20 bg-cyan-accent/[.06] p-7 text-center shadow-[0_16px_40px_rgba(2,6,23,.18)]"><p className="font-display text-2xl text-white">Every vessel has a different route. Start with a clear conversation.</p><Link href="/contact" className="mt-5 inline-flex rounded-full bg-cyan-accent px-6 py-3 text-sm font-bold text-navy-950 transition hover:-translate-y-0.5 hover:bg-white">Speak with our team</Link></div></section></main><Footer /></>;
}
