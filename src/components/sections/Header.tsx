"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";

const primaryLinks = [
  ["Home", "/"],
  ["About", "/about-us"],
  ["Why choose us", "/why-choose-us"],
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Resources", "/resources"],
  ["Blog", "/resources/blog"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

const serviceLinks = [
  ["Vessel Registration", "/services/vessel-registration"],
  ["Naval Architecture", "/services/naval-architecture"],
  ["Safety & Surveys", "/services/draft-survey"],
  ["All services", "/services"],
] as const;

const mobileLinks = [
  ...primaryLinks,
  ["Testimonials", "/testimonials"],
  ["Careers", "/careers"],
  ["Request a quote", "/quote-request"],
] as const;

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

function desktopLinkClass(isActive: boolean) {
  return `rounded-full px-3 py-2 text-xs font-semibold transition duration-300 ${
    isActive
      ? "bg-navy-950 text-white shadow-sm"
      : "text-navy-950/70 hover:bg-navy-950/8 hover:text-navy-950"
  }`;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-2 pt-2 sm:px-5 sm:pt-3">
      <div className="mx-auto flex h-14 min-w-0 max-w-7xl items-center justify-between gap-2 overflow-visible rounded-2xl border border-white/80 bg-[#eaf4f6]/95 px-2.5 shadow-2xl shadow-navy-950/25 backdrop-blur-xl sm:h-16 sm:px-4">
        <Link href="/" className="flex min-w-0 shrink items-center rounded-xl p-1" aria-label="Marine Registration Services home">
          <Image src="/images/logo.png" alt="Marine Registration Services" width={180} height={48} priority className="h-8 w-auto max-w-[9.5rem] object-contain sm:h-9 sm:max-w-none" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center rounded-full border border-navy-950/10 bg-navy-950/[.045] p-1 xl:flex">
          {primaryLinks.map(([label, href]) => {
            const isServices = href === "/services";
            const isActive = isActivePath(pathname, href);

            if (!isServices) {
              return <Link key={href} href={href} className={desktopLinkClass(isActive)}>{label}</Link>;
            }

            return (
              <div key={href} className="relative">
                <button type="button" onClick={() => setIsServicesOpen((value) => !value)} aria-expanded={isServicesOpen} className={`${desktopLinkClass(isActive)} inline-flex items-center gap-1`}>
                  {label} <IconChevronDown size={13} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 top-[calc(100%+0.65rem)] w-56 rounded-2xl border border-white/90 bg-[#eaf4f6]/98 p-2 shadow-2xl shadow-navy-950/20 backdrop-blur-xl">
                    {serviceLinks.map(([serviceLabel, serviceHref]) => <Link key={serviceHref} href={serviceHref} onClick={() => setIsServicesOpen(false)} className={`block rounded-xl px-3 py-2.5 text-sm transition ${isActivePath(pathname, serviceHref) ? "bg-cyan-accent/20 font-bold text-navy-950" : "text-navy-950/70 hover:bg-navy-950/7 hover:text-navy-950"}`}>{serviceLabel}</Link>)}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link href="/quote-request" className={`hidden rounded-full px-4 py-2.5 text-xs font-bold transition duration-300 sm:inline-flex ${isActivePath(pathname, "/quote-request") ? "bg-navy-950 text-white" : "bg-cyan-accent text-navy-950 hover:-translate-y-0.5 hover:bg-navy-950 hover:text-white"}`}>Request a quote</Link>
          <button type="button" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-navy-950 transition hover:bg-navy-950/8 xl:hidden" onClick={() => setIsMobileMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={isMobileMenuOpen}>{isMobileMenuOpen ? <IconX size={21}/> : <IconMenu2 size={21}/>}</button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="mx-auto mt-2 max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto rounded-2xl border border-white/80 bg-[#eaf4f6]/98 p-2.5 shadow-2xl shadow-navy-950/20 backdrop-blur-xl sm:p-3 xl:hidden">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {mobileLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setIsMobileMenuOpen(false)} className={`rounded-xl px-3 py-3 text-center text-sm font-semibold transition ${isActivePath(pathname, href) ? "bg-navy-950 text-white" : "bg-navy-950/[.045] text-navy-950/75 hover:bg-navy-950/10 hover:text-navy-950"}`}>{label}</Link>)}
          </div>
        </nav>
      )}
    </header>
  );
}
