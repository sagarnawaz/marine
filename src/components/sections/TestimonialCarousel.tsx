"use client";

import SectionHeading from "./SectionHeading";
import { AnimatedTestimonials } from "@/components/ui/aceternity/animated-testimonials";
import { testimonials } from "@/data/site-content";

export default function TestimonialCarousel() {
  const formatted = testimonials.map((t) => ({
    quote: t.quote,
    name: t.author,
    designation: t.role,
  }));

  return (
    <section className="relative py-16 sm:py-24 lg:py-32" aria-label="Client testimonials">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Said"
          index="05"
          className="mb-10 sm:mb-20"
        />
        <AnimatedTestimonials testimonials={formatted} autoplay />
      </div>
    </section>
  );
}
