"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { BentoGrid, BentoGridItem } from "@/components/ui/aceternity/bento-grid";
import { serviceCategories } from "@/data/site-content";
import { prefersReducedMotion } from "@/hooks/use-animations";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".service-glass-card");
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 48,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="wave-divider mx-auto mb-24 max-w-xs" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Capabilities"
          title={serviceCategories.title}
          id="services-heading"
          index="02"
          className="mb-20"
        />

        <div ref={gridRef}>
          <BentoGrid className="md:auto-rows-[18rem]">
            {serviceCategories.items.map((item, index) => (
              <BentoGridItem
                key={item.title}
                title={item.title}
                className={`service-glass-card radar-hover-card ${
                  index === 0 || index === 5 ? "md:col-span-2" : ""
                }`}
                header={
                  <div className="relative h-36 w-full overflow-hidden md:h-40">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover/bento:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
                    <div className="radar-sweep pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/bento:opacity-100" aria-hidden="true" />
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
