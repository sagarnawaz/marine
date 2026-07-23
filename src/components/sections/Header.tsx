"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FloatingNav } from "@/components/ui/aceternity/floating-navbar";
import { MovingBorderButton } from "@/components/ui/aceternity/moving-border";
import { navLinks, siteConfig } from "@/data/site-content";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const detailRoutes: Record<string, string> = {
      "#who-we-are": "/who-we-are",
      "#contact": "/contact",
    };
    if (detailRoutes[href]) {
      router.push(detailRoutes[href]);
      return;
    }
    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = navLinks.filter((link) => link.href !== "#contact").map((link) => ({
    name: link.label,
    link: link.href,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      handleNavClick(link.href);
    },
  }));

  const logo = (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label={`${siteConfig.name} - Home`}
      onClick={(e) => {
        e.preventDefault();
        if (pathname === "/") {
          handleNavClick("#hero");
        } else {
          router.push("/");
        }
      }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-ocean-500/30 bg-navy-800/80">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-ocean-400" aria-hidden="true">
          <path d="M3 18L12 4L21 18H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M7 18H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <span className="hidden font-display text-sm font-semibold text-white sm:block">
        MRS
      </span>
    </Link>
  );

  const cta = (
    <MovingBorderButton
      borderRadius="9999px"
      containerClassName="h-10 w-auto"
      className="bg-ocean-600/90 px-5 py-2 text-xs font-semibold"
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        handleNavClick("#contact");
      }}
    >
      Contact Us
    </MovingBorderButton>
  );

  return (
    <>
      <FloatingNav navItems={navItems} logo={logo} cta={cta} />

      <button
        type="button"
        className="fixed top-5 right-4 z-[5001] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-navy-950/80 backdrop-blur-xl lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-expanded={mobileOpen}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {mobileOpen && (
        <nav
          className="fixed inset-x-4 top-20 z-[4999] rounded-2xl border border-white/10 bg-navy-950/95 p-4 backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.filter((link) => link.href !== "#contact").map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block border-b border-white/5 py-3.5 text-sm font-medium text-silver-200 hover:text-ocean-400 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="block py-3.5 text-sm font-semibold text-cyan-accent hover:text-white"
          >
            Contact Us
          </a>
        </nav>
      )}
    </>
  );
}
