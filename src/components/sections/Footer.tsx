"use client";

import { HoverBorderGradientStatic } from "@/components/ui/aceternity/hover-border-gradient";
import { siteConfig, navLinks } from "@/data/site-content";

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5" role="contentinfo">
      <div className="relative overflow-hidden bg-navy-900 py-28 md:py-36">
        <div className="absolute inset-0 maritime-grid opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean-600/5 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="section-label mb-6">Start Your Journey</p>
          <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
            Not sure where to start from.
            <br />
            <span className="text-ocean-300">Let us help you.</span>
          </h2>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="mt-12 inline-block"
          >
            <HoverBorderGradientStatic className="inline-flex items-center gap-3 text-base">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us Now
            </HoverBorderGradientStatic>
          </a>
        </div>
      </div>

      <div className="bg-navy-950 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="award-divider mb-10 w-full" />
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-display text-xl font-bold text-white">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-xs tracking-wider text-silver-300/40 uppercase">
                &copy; {new Date().getFullYear()} {siteConfig.legalName}
              </p>
            </div>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className="text-sm font-medium tracking-wide text-silver-300/65 transition-colors hover:text-ocean-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
