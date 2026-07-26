import { IconAnchor, IconCompass } from "@tabler/icons-react";

interface MaritimeDecorationProps {
  position?: "left" | "right";
  symbol?: "anchor" | "compass";
}

export default function MaritimeDecoration({ position = "right", symbol = "compass" }: MaritimeDecorationProps) {
  const Icon = symbol === "anchor" ? IconAnchor : IconCompass;
  const positionClass = position === "left" ? "-left-10 bottom-8" : "-right-10 top-8";

  return <Icon aria-hidden="true" className={`pointer-events-none absolute ${positionClass} h-40 w-40 text-ocean-400/[.06] sm:h-56 sm:w-56`} stroke={0.7} />;
}
