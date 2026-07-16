"use client";

import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
  logo,
  cta,
}: {
  navItems: {
    name: string;
    link: string;
    onClick?: (e: React.MouseEvent) => void;
  }[];
  className?: string;
  logo?: React.ReactNode;
  cta?: React.ReactNode;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() ?? 0;
      const direction = current - previous;
      setAtTop(current < 0.02);
      if (current < 0.02) {
        setVisible(true);
      } else if (direction < 0) {
        setVisible(true);
      } else if (direction > 0.002) {
        setVisible(false);
      }
    }
  });

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: visible ? 0 : -120,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={cn(
        "fixed top-4 inset-x-0 z-[5000] mx-auto flex max-w-fit items-center justify-center px-4",
        className
      )}
      role="banner"
    >
      <nav
        className={cn(
          "flex items-center gap-1 rounded-full border px-2 py-2 shadow-lg backdrop-blur-xl transition-colors duration-500",
          atTop
            ? "border-white/10 bg-navy-950/40"
            : "border-ocean-500/20 bg-navy-950/85 shadow-navy-950/50"
        )}
        aria-label="Main navigation"
      >
        {logo && <div className="pl-2 pr-1">{logo}</div>}

        <div className="hidden items-center lg:flex">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              onClick={navItem.onClick}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-silver-200/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {navItem.name}
            </a>
          ))}
        </div>

        {cta && (
          <>
            <div className="mx-2 hidden h-5 w-px bg-white/10 lg:block" />
            <div className="hidden lg:block">{cta}</div>
          </>
        )}
      </nav>
    </motion.header>
  );
};
