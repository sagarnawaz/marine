"use client";

import { cn } from "@/lib/utils";

interface LumaSpinProps {
  className?: string;
}

export default function LumaSpin({ className }: LumaSpinProps) {
  return (
    <span className={cn("relative block aspect-square w-16", className)} aria-hidden="true">
      <span className="luma-spin-ring absolute rounded-full shadow-[inset_0_0_0_3px] shadow-cyan-accent" />
      <span className="luma-spin-ring luma-spin-ring-delayed absolute rounded-full shadow-[inset_0_0_0_3px] shadow-white/70" />
    </span>
  );
}
