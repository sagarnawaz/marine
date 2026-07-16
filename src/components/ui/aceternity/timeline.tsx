"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  step?: string;
}

export const Timeline = ({
  data,
  className,
}: {
  data: TimelineEntry[];
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const widthTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={cn("w-full font-sans", className)} ref={containerRef}>
      {/* Desktop horizontal */}
      <div className="relative hidden lg:block">
        <div className="relative flex justify-between gap-6">
          <div className="absolute top-8 right-0 left-0 h-px bg-ocean-500/20" />
          <motion.div
            style={{ width: widthTransform, opacity: opacityTransform }}
            className="absolute top-8 left-0 h-px bg-gradient-to-r from-ocean-500 via-ocean-400 to-cyan-accent"
          />
          {data.map((item, index) => (
            <div key={index} className="relative flex-1 pt-16 text-center">
              <div className="absolute top-0 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-ocean-500/30 bg-navy-800 font-display text-lg font-semibold text-ocean-300 shadow-lg shadow-ocean-600/10">
                {item.step ?? String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <div className="mt-3 text-sm leading-relaxed text-silver-300/70">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical */}
      <div ref={ref} className="relative lg:hidden">
        {data.map((item, index) => (
          <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
            {index < data.length - 1 && (
              <div className="absolute top-14 left-7 h-[calc(100%-3.5rem)] w-px bg-ocean-500/20" />
            )}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ocean-500/30 bg-navy-800 font-display text-base font-semibold text-ocean-300">
              {item.step ?? String(index + 1).padStart(2, "0")}
            </div>
            <div className="pt-2">
              <h3 className="font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <div className="mt-2 text-sm leading-relaxed text-silver-300/70">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <motion.div
          style={{ height: heightTransform, opacity: opacityTransform }}
          className="absolute top-0 left-7 w-px bg-gradient-to-b from-ocean-500 via-ocean-400 to-transparent"
        />
      </div>
    </div>
  );
};
