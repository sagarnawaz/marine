"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import { prefersReducedMotion } from "@/hooks/use-animations";
import type { HorizonThreeController } from "@/components/ui/horizon-three-engine";

function splitChars(text: string) {
  return text.split("").map((char, i) => (
    <span key={`${char}-${i}`} className="horizon-title-char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export function HorizonHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<HorizonThreeController | null>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [enable3D, setEnable3D] = useState(false);
  const reducedMotion = prefersReducedMotion();

  const scrollTo = useCallback((id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* ── Three.js — lazy load when hero enters viewport (desktop only) ── */
  useEffect(() => {
    const mobile = window.innerWidth < 768;
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (reducedMotion || mobile || !canvas || !container) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;

    const loadScene = () => {
      import("@/components/ui/horizon-three-engine")
        .then(({ createHorizonScene }) => {
          if (cancelled || !canvasRef.current) return;
          return createHorizonScene(canvasRef.current);
        })
        .then((controller) => {
          if (cancelled || !controller) return;
          engineRef.current = controller;
          setEnable3D(true);
        })
        .catch(() => {
          /* gradient fallback remains visible */
        });
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer?.disconnect();
          loadScene();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.05 }
    );
    observer.observe(container);

    const handleResize = () => engineRef.current?.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      observer?.disconnect();
      window.removeEventListener("resize", handleResize);
      engineRef.current?.dispose();
      engineRef.current = null;
    };
  }, [reducedMotion]);

  /* ── GSAP entrance — runs immediately, independent of Three.js ── */
  useEffect(() => {
    const targets = [
      badgeRef.current,
      titleRef.current,
      subtitleRef.current,
      ctaRef.current,
      statsRef.current,
      scrollRef.current,
    ].filter(Boolean);

    if (reducedMotion) {
      gsap.set(targets, { visibility: "visible", opacity: 1, y: 0, x: 0 });
      return;
    }

    gsap.set(targets, { visibility: "visible" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (badgeRef.current) {
      tl.from(badgeRef.current, { x: -40, opacity: 0, duration: 0.8 });
    }

    const chars = titleRef.current?.querySelectorAll(".horizon-title-char");
    if (chars?.length) {
      tl.from(
        chars,
        { y: 120, opacity: 0, duration: 1.2, stagger: 0.025, ease: "power4.out" },
        "-=0.4"
      );
    }

    if (subtitleRef.current) {
      tl.from(subtitleRef.current, { y: 40, opacity: 0, duration: 0.9 }, "-=0.6");
    }

    if (ctaRef.current) {
      tl.from(
        ctaRef.current.children,
        { y: 30, opacity: 0, duration: 0.7, stagger: 0.1 },
        "-=0.5"
      );
    }

    if (statsRef.current) {
      tl.from(
        statsRef.current.children,
        { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 },
        "-=0.4"
      );
    }

    if (scrollRef.current) {
      tl.from(scrollRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3");
    }

    return () => {
      tl.kill();
    };
  }, [reducedMotion]);

  /* ── Scroll-driven camera ── */
  useEffect(() => {
    if (!enable3D || !containerRef.current) return;

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const heroH = containerRef.current.offsetHeight;
      const progress = Math.min(Math.max(-rect.top / heroH, 0), 1);
      setScrollProgress(progress);
      engineRef.current?.updateScroll(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [enable3D]);

  const hiddenStyle = reducedMotion ? undefined : { visibility: "hidden" as const };

  return (
    <div
      ref={containerRef}
      id="hero"
      className="horizon-hero relative min-h-[100dvh] w-full overflow-hidden bg-navy-950"
      aria-label="Hero"
    >
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full ${enable3D ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />

      {!enable3D && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-ocean-600/20"
          aria-hidden="true"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />

      <div className="pointer-events-none absolute top-24 right-8 z-[5] hidden h-32 w-32 opacity-40 lg:block" aria-hidden="true">
        <div className="absolute inset-0 rounded-full border border-ocean-400/20 hero-radar-ring" />
        <div className="absolute inset-4 rounded-full border border-ocean-400/15 hero-radar-ring" style={{ animationDelay: "1.2s" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-ocean-400/30" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="0.5" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeWidth="0.5" />
            <path d="M12 6l2 6-6 2 2-6 6-2-2-6z" strokeWidth="0.75" />
          </svg>
        </div>
      </div>

      <div
        className="absolute top-1/2 right-6 z-20 hidden -translate-y-1/2 lg:block"
        aria-hidden="true"
      >
        <p
          className="font-display text-[10px] font-semibold tracking-[0.45em] text-ocean-400/40"
          style={{ writingMode: "vertical-rl" }}
        >
          MARINE REGISTRATION — DUBAI
        </p>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl items-center px-6 pt-28 pb-24 lg:px-8">
        <div className="max-w-3xl">
          <div
            ref={badgeRef}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-ocean-500/20 bg-navy-900/50 px-4 py-2 backdrop-blur-md"
            style={hiddenStyle}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ocean-400" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-ocean-300/80 uppercase">
              Est. 2011 — Dubai, UAE
            </span>
          </div>

          <h1
            ref={titleRef}
            className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white"
            style={hiddenStyle}
          >
            {splitChars("Taking Care of your ")}
            <span className="text-ocean-300">{splitChars("Maritime needs ")}</span>
            {splitChars("Since 2011")}
          </h1>

          <p
            ref={subtitleRef}
            className="mt-8 max-w-xl text-base leading-relaxed text-silver-300/85 sm:text-lg"
            style={hiddenStyle}
          >
            Premium vessel registration, naval architecture, and maritime compliance
            for yachts, commercial fleets, and foreign-flagged vessels across the UAE
            and beyond.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4" style={hiddenStyle}>
            <MagneticButton variant="primary" onClick={() => scrollTo("#contact")}>
              Contact Us
            </MagneticButton>
            <MagneticButton variant="secondary" onClick={() => scrollTo("#who-we-are")}>
              Explore Services
            </MagneticButton>
          </div>

          <div
            ref={statsRef}
            className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 md:gap-12"
            style={hiddenStyle}
          >
            {[
              { value: "14+", label: "Years Experience" },
              { value: "500+", label: "Vessels Registered" },
              { value: "6", label: "Authority Partners" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-ocean-300 md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-silver-300/65 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
        style={hiddenStyle}
      >
        <span className="text-[9px] font-semibold tracking-[0.35em] text-silver-300/40 uppercase">
          Scroll
        </span>
        <div className="h-px w-16 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-ocean-400 transition-all duration-150"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default HorizonHeroSection;
