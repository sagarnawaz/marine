"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import LumaSpin from "@/components/ui/LumaSpin";

const LOADER_SESSION_KEY = "mrs-intro-loader-seen";

export default function InitialAppLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const loaderSeen = window.sessionStorage.getItem(LOADER_SESSION_KEY) === "true";
    const duration = loaderSeen || prefersReducedMotion ? 0 : 1050;
    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(LOADER_SESSION_KEY, "true");
      setIsVisible(false);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          aria-busy="true"
          aria-label="Loading Marine Registration Services"
          role="status"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[200] grid place-items-center bg-navy-950"
        >
          <div className="flex flex-col items-center gap-5">
            <LumaSpin />
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-accent">Marine Registration Services</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
