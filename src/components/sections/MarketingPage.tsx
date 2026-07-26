import Link from "next/link";

import ContentCard from "@/components/cards/ContentCard";

import DetailHero from "./DetailHero";
import Footer from "./Footer";
import Header from "./Header";

const heroVisuals: Record<string, [string, string]> = {
  Registration: ["/images/marine-hero.png", "Yacht travelling across open water"],
  Engineering: ["/images/naval-survey.png", "Naval survey and technical planning"],
  Safety: ["/images/marine-experts.png", "Marine specialists reviewing safety documentation"],
  Survey: ["/images/naval-survey.png", "Marine survey work on a vessel"],
  Compliance: ["/images/foreign-yacht.png", "Yacht preparing for compliance clearance"],
  "Industries we serve": ["/images/commercial-vessel.png", "Commercial vessel operating at sea"],
  Journal: ["/images/naval-survey.png", "Marine professional reviewing vessel documentation"],
  Legal: ["/images/marine-experts.png", "Professional team handling maritime documentation"],
  "About MRS": ["/images/marine-experts.png", "Marine Registration Services team at work"],
  "Why MRS": ["/images/foreign-yacht.png", "Yacht moving through Dubai waters"],
  "Our process": ["/images/naval-survey.png", "Technical vessel review in progress"],
  "Partners & certifications": ["/images/commercial-vessel.png", "Commercial vessel supported by a maritime network"],
  Careers: ["/images/marine-experts.png", "Marine professionals collaborating"],
};

interface MarketingPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  cards: [string, string][];
  cta?: boolean;
  image?: string;
  imageAlt?: string;
}

export default function MarketingPage({
  eyebrow,
  title,
  intro,
  cards,
  cta = true,
  image: customImage,
  imageAlt: customImageAlt,
}: MarketingPageProps) {
  const [defaultImage, defaultImageAlt] = heroVisuals[eyebrow] ?? ["/images/marine-hero.png", "Marine vessel on open water"];

  return <><Header /><main id="main-content"><DetailHero eyebrow={eyebrow} breadcrumb={eyebrow} title={title} description={intro} image={customImage ?? defaultImage} imageAlt={customImageAlt ?? defaultImageAlt} /><section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="grid gap-4 md:grid-cols-3">{cards.map(([heading, copy], index) => <ContentCard key={heading}><p className="text-[11px] font-bold uppercase tracking-[.2em] text-cyan-accent">0{index + 1} · Marine Registration Services</p><h2 className="mt-12 font-display text-2xl font-semibold text-white">{heading}</h2><p className="mt-4 text-sm leading-7 text-silver-300/70">{copy}</p></ContentCard>)}</div><div className="mt-12 grid gap-5 rounded-2xl border border-white/[.08] bg-white/[.025] p-6 shadow-[0_16px_40px_rgba(2,6,23,.18)] sm:grid-cols-[1fr_auto] sm:items-center sm:p-8"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-cyan-accent">A clear next step</p><p className="mt-3 max-w-2xl text-base leading-7 text-silver-300/75">Bring us your vessel particulars, current documents and timeline. We will outline the appropriate route, likely requirements and the right first action.</p></div>{cta && <Link className="inline-flex justify-center rounded-full bg-cyan-accent px-6 py-3 text-sm font-bold text-navy-950 transition hover:-translate-y-0.5 hover:bg-white" href="/quote-request">Request a quote</Link>}</div></div></section></main><Footer /></>;
}
