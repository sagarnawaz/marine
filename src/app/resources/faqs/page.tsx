"use client";

import { useState } from "react";
import Link from "next/link";

import DetailHero from "@/components/sections/DetailHero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

const faqs = [
  ["How long does registration take?", "Timing depends on vessel type, documentation and authority review. Once we review your particulars, we can map the practical sequence and likely timing."],
  ["What documents will I need?", "Typical requirements include owner identification, ownership evidence, insurance and vessel particulars. We provide a tailored checklist before you begin."],
  ["Can you support foreign-flagged vessels?", "Yes. We coordinate permits, supporting documentation and the local authority requirements relevant to a vessel entering or operating in UAE waters."],
  ["Do you handle technical studies?", "Our services include stability, tonnage, survey coordination, technical drawings and other naval architecture documentation."],
  ["Can you assist with renewals and ownership transfers?", "Yes. We manage renewal preparation, document reviews and registration transfers so owners can avoid last-minute issues."],
  ["Do you work with commercial fleets?", "We support commercial operators with coordinated registrations, certificates, technical documentation and ongoing compliance planning."],
  ["What happens after I submit an enquiry?", "A member of our team reviews the vessel details, confirms the right service route and comes back with the information needed to move forward."],
  ["Can you arrange surveys or inspections?", "We help coordinate the appropriate survey route and ensure the required documents are ready for review alongside the inspection."],
];

export default function Faqs() {
  const [open, setOpen] = useState(0);

  return <><Header /><main id="main-content"><DetailHero eyebrow="FAQs" breadcrumb="FAQs" title="Straight answers for your vessel." description="A practical starting point for common registration, compliance and technical questions from owners, captains and operators." image="/images/naval-survey.png" imageAlt="Marine surveyor reviewing vessel information" /><section className="mx-auto max-w-4xl px-5 py-20 sm:py-28"><div className="divide-y divide-white/10 rounded-2xl border border-white/10">{faqs.map(([question, answer], index) => <div key={question}><button aria-expanded={open === index} className="flex w-full items-center justify-between gap-5 p-6 text-left font-display text-lg text-white" onClick={() => setOpen(open === index ? -1 : index)}>{question}<span className="text-cyan-accent">{open === index ? "−" : "+"}</span></button>{open === index && <p className="px-6 pb-6 text-sm leading-7 text-silver-300/70">{answer}</p>}</div>)}</div><p className="mt-8 text-center text-sm text-silver-300/65">Need advice specific to your vessel? <Link href="/contact" className="font-bold text-cyan-accent hover:text-white">Contact the team</Link>.</p></section></main><Footer /></>;
}
