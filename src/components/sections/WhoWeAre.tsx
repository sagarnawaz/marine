"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { MovingBorderButton } from "@/components/ui/aceternity/moving-border";
import { HoverBorderGradient } from "@/components/ui/aceternity/hover-border-gradient";
import { whoWeAreContent, marineImages } from "@/data/site-content";

export default function WhoWeAre() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="who-we-are"
      className="relative py-24 lg:py-32"
      aria-labelledby="who-we-are-heading"
    >
      <div className="absolute inset-0 maritime-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="About Us"
          title="Who We Are"
          index="01"
          align="left"
          className="mb-20"
        />

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative lg:sticky lg:top-32">
            <div className="glass-card group overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5] md:aspect-[3/4]">
                <Image
                  src={marineImages.whoWeAre}
                  alt={marineImages.whoWeAreAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-ocean-500/20 bg-navy-800/90 px-6 py-4 backdrop-blur-sm">
                <div className="font-display text-3xl font-semibold text-ocean-300">
                  Since 2011
                </div>
                <div className="text-xs uppercase tracking-wider text-silver-300/60">
                  Trusted Maritime Partner
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-silver-300/90 sm:text-lg">
              {whoWeAreContent.intro}
            </p>

            <div className="mt-8">
              <h3
                id="who-we-are-heading"
                className="mb-4 text-sm font-semibold uppercase tracking-wider text-ocean-400"
              >
                Approved Authorities & Partners
              </h3>
              <ul className="space-y-3" role="list">
                {whoWeAreContent.authorities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-silver-200/80"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-ocean-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <MovingBorderButton
                borderRadius="9999px"
                containerClassName="h-11 w-auto"
                className="bg-ocean-600 px-7 py-2.5 text-sm font-semibold"
                onClick={() => scrollTo("#services")}
              >
                Our Services
              </MovingBorderButton>
              <HoverBorderGradient
                className="px-7 py-2.5 text-sm font-semibold"
                onClick={() => scrollTo("#contact")}
              >
                Contact Us
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
