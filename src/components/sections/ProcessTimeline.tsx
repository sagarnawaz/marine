"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { processSteps } from "@/data/site-content";
import { prefersReducedMotion } from "@/hooks/use-animations";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current || !pinRef.current) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: pinRef.current,
          scrub: 0.6,
        },
      });

      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        tl.fromTo(
          step,
          { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 24 },
          { opacity: 1, y: 0, duration: 1 },
          i
        );
        if (i > 0) {
          tl.to(stepsRef.current[i - 1], { opacity: 0.25, y: -12, duration: 0.5 }, i);
        }
      });

      if (progressRef.current) {
        tl.to(progressRef.current, { scaleX: 1, ease: "none", duration: stepsRef.current.length }, 0);
      }

      return () => tl.scrollTrigger?.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32" aria-label="Our process">
      <div className="wave-divider mx-auto mb-24 max-w-xs" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={pinRef}>
          <SectionHeading
            label="Process"
            title="How We Do What We Do"
            index="06"
            className="mb-16"
          />
          <div className="mb-10 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-ocean-500 via-cyan-accent to-transparent" ref={progressRef} />
          <div className="grid gap-8 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                ref={(el) => {
                  stepsRef.current[i] = el;
                }}
                className="glass-card rounded-2xl p-6"
              >
                <span className="font-display text-3xl font-bold text-ocean-400/80">{step.step}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver-300/75">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
