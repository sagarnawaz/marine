"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/hooks/use-animations";

interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function MagneticButton({
  variant = "primary",
  children,
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "hero-cta group relative overflow-hidden rounded-full px-9 py-4 text-sm font-semibold tracking-wide transition-transform duration-300 ease-out",
        variant === "primary"
          ? "bg-ocean-600 text-white shadow-lg shadow-ocean-600/25 hover:shadow-ocean-500/40"
          : "border border-white/15 bg-white/5 text-white backdrop-blur-md hover:border-ocean-400/40 hover:bg-white/10",
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      {...props}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          variant === "primary"
            ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
            : "bg-gradient-to-r from-transparent via-ocean-400/10 to-transparent"
        )}
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
