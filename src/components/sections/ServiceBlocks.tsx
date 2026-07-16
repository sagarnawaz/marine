"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { serviceBlocks } from "@/data/site-content";
import { prefersReducedMotion } from "@/hooks/use-animations";

gsap.registerPlugin(ScrollTrigger);

const sectionIds: Record<string, string> = {
  pleasure: "pleasure",
  commercial: "commercial",
  foreign: "foreign",
};

const visualTheme: Record<string, string> = {
  pleasure: "block-visual-yacht",
  commercial: "block-visual-blueprint",
  foreign: "block-visual-globe",
  "naval-architecture": "block-visual-blueprint",
  "tourism-commercial": "block-visual-yacht",
};

export default function ServiceBlocks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const blocks = sectionRef.current.querySelectorAll(".service-block-item");
    const ctx = gsap.context(() => {
      blocks.forEach((block) => {
        gsap.from(block, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32" aria-label="Service blocks">
      <div className="mx-auto max-w-7xl space-y-16 px-6 lg:space-y-24 lg:px-8">
        {serviceBlocks.map((block, index) => (
          <CardSpotlight
            key={block.id}
            id={sectionIds[block.id] ?? block.id}
            className="service-block-item overflow-hidden"
            color="rgba(35, 137, 168, 0.12)"
          >
            <article
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={block.image}
                      alt={block.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                    <div
                      className={`pointer-events-none absolute inset-0 ${visualTheme[block.id] ?? ""}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-navy-950/70 px-4 py-2 backdrop-blur-sm">
                    <span className="text-xs font-medium uppercase tracking-wider text-ocean-400">
                      {block.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <span className="section-label mb-3 block">Service</span>
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-silver-300/85">
                  {block.description}
                </p>
                <ul className="mt-6 space-y-3" role="list">
                  {block.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-silver-200/80">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ocean-500/30 bg-ocean-600/10">
                        <svg className="h-3 w-3 text-ocean-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
}
