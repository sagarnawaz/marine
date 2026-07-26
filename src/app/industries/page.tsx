import ContentCard from "@/components/cards/ContentCard";
import DetailHero from "@/components/sections/DetailHero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { industries } from "@/data/phase-one";

export default function IndustriesPage() {
  return <><Header/><main id="main-content"><DetailHero eyebrow="Industries" breadcrumb="Industries we serve" title="Maritime support built around your role." description="Whether you own one yacht or manage a busy fleet, our service fits the operational reality behind the paperwork." image="/images/foreign-yacht.png" imageAlt="Yacht on UAE waters"/><section className="py-20"><div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 md:grid-cols-2 lg:px-8">{industries.map((industry) => <ContentCard key={industry.slug} href={`/industries/${industry.slug}`}><h2 className="font-display text-2xl text-white">{industry.title}</h2><p className="mt-4 text-sm leading-7 text-silver-300/65">{industry.summary}</p><span className="mt-8 block text-sm font-bold text-cyan-accent">See how we help →</span></ContentCard>)}</div></section></main><Footer/></>;
}
