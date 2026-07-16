"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  duration = 1,
  clockwise = true,
  onClick,
  type = "button",
  disabled,
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = useCallback(
    (currentDirection: Direction): Direction => {
      const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
      const currentIndex = directions.indexOf(currentDirection);
      const nextIndex = clockwise
        ? (currentIndex - 1 + directions.length) % directions.length
        : (currentIndex + 1) % directions.length;
      return directions[nextIndex];
    },
    [clockwise]
  );

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #3ba8c4 0%, rgba(59,168,196,0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #3ba8c4 0%, rgba(59,168,196,0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, #3ba8c4 0%, rgba(59,168,196,0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, #3ba8c4 0%, rgba(59,168,196,0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #2389a8 0%, rgba(35,137,168,0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex h-min w-fit flex-col flex-nowrap items-center justify-center overflow-visible rounded-full border border-transparent bg-navy-900/40 p-px decoration-clone transition duration-500 hover:bg-navy-800/60",
        containerClassName
      )}
    >
      <div
        className={cn(
          "z-10 w-auto rounded-[inherit] bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]"
        style={{ filter: "blur(2px)", width: "100%", height: "100%" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="absolute inset-[2px] z-[1] flex-none rounded-[inherit] bg-navy-950" />
    </button>
  );
}

/** Non-interactive variant for use inside links */
export function HoverBorderGradientStatic({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center overflow-visible rounded-full border border-ocean-500/30 bg-navy-900/60 p-px",
        containerClassName
      )}
    >
      <span
        className={cn(
          "relative z-10 rounded-[inherit] bg-navy-900 px-10 py-4 text-sm font-semibold text-white",
          className
        )}
      >
        {children}
      </span>
      <span className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-ocean-600/20 via-ocean-400/30 to-cyan-accent/20" />
    </span>
  );
}
