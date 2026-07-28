"use client";

import { IconChevronLeft, IconChevronRight, IconQuote, IconStarFilled } from "@tabler/icons-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export interface SimpleTestimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating?: number;
}

interface SimpleAnimatedTestimonialsProps {
  testimonials: SimpleTestimonial[];
  autoRotateInterval?: number;
  showVerifiedBadge?: boolean;
  className?: string;
}

export default function SimpleAnimatedTestimonials({
  testimonials,
  autoRotateInterval = 7000,
  showVerifiedBadge = true,
  className,
}: SimpleAnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (prefersReducedMotion || autoRotateInterval <= 0 || testimonials.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(goToNext, autoRotateInterval);
    return () => window.clearInterval(timer);
  }, [autoRotateInterval, goToNext, prefersReducedMotion, testimonials.length]);

  if (testimonials.length === 0 || !activeTestimonial) {
    return null;
  }

  const initial = prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 };
  const animate = { opacity: 1, y: 0 };
  const exit = prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -18 };

  return (
    <div className={cn("mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_auto] md:items-center", className)}>
      <div className="relative min-h-[22rem] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,.25)] sm:min-h-[20rem] sm:p-10">
        <IconQuote aria-hidden="true" className="absolute right-6 top-6 h-16 w-16 text-cyan-accent/10 sm:right-10 sm:top-10" strokeWidth={1} />
        <AnimatePresence mode="wait">
          <motion.figure
            key={activeTestimonial.id}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
            className="flex h-full min-h-[17rem] flex-col"
          >
            <div className="flex items-center gap-1 text-cyan-accent" aria-label={`${activeTestimonial.rating ?? 5} out of 5 stars`}>
              {Array.from({ length: activeTestimonial.rating ?? 5 }).map((_, index) => <IconStarFilled key={index} size={15} aria-hidden="true" />)}
            </div>
            <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed text-white sm:text-2xl">“{activeTestimonial.content}”</blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-accent/30 bg-cyan-accent/10 font-display text-lg font-bold text-cyan-accent">{activeTestimonial.name.charAt(0)}</span>
              <span>
                <span className="block text-sm font-bold text-white">{activeTestimonial.name}</span>
                <span className="mt-1 block text-sm text-silver-300/65">{activeTestimonial.role}</span>
              </span>
              {showVerifiedBadge && <span className="ml-auto hidden rounded-full border border-cyan-accent/20 bg-cyan-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-accent sm:block">Verified client</span>}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between gap-4 md:flex-col">
        <button type="button" onClick={goToPrevious} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-cyan-accent/50 hover:bg-cyan-accent/10">
          <IconChevronLeft size={20} aria-hidden="true" />
        </button>
        <div className="flex gap-2 md:flex-col" role="tablist" aria-label="Choose a testimonial">
          {testimonials.map((testimonial, index) => <button key={testimonial.id} type="button" role="tab" aria-label={`Show testimonial from ${testimonial.name}`} aria-selected={index === activeIndex} onClick={() => setActiveIndex(index)} className={cn("h-2.5 rounded-full transition-all", index === activeIndex ? "w-8 bg-cyan-accent md:h-8 md:w-2.5" : "w-2.5 bg-white/20 hover:bg-white/45")} />)}
        </div>
        <button type="button" onClick={goToNext} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-cyan-accent/50 hover:bg-cyan-accent/10">
          <IconChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
