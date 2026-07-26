"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { prefersReducedMotion } from "@/hooks/use-animations";

gsap.registerPlugin(ScrollTrigger);

/** Applies a consistent, accessible reveal to page-level content sections. */
export default function PageScrollReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("main > section").forEach((section) => {
        if (section.dataset.motion === "none" || section.id === "hero") return;
        gsap.from(section, {
          autoAlpha: 0,
          y: 28,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 88%", once: true },
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
