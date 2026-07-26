import { processSteps } from "@/data/site-content";

import SectionHeading from "./SectionHeading";

export default function ProcessTimeline() {
  return (
    <section data-motion="none" className="relative py-16 sm:py-24 lg:py-32" aria-label="Our process">
      <div className="wave-divider mx-auto mb-10 max-w-xs sm:mb-16" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label="Process"
          title="How We Do What We Do"
          description="A transparent, four-step route from the first document review to final delivery."
          index="06"
          className="mb-10 sm:mb-14"
        />
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.step} className="glass-card rounded-2xl p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-accent/35 sm:p-6">
              <span className="font-display text-3xl font-bold text-ocean-400/80">{step.step}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-300/75">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
