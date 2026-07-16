import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: "slow" | "normal";
  className?: string;
}

export default function Marquee({
  items,
  speed = "normal",
  className,
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative flex overflow-hidden border-y border-white/5 bg-navy-950/80 py-5",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "marquee-track flex shrink-0 items-center gap-12",
          speed === "slow" ? "marquee-slow" : "marquee-normal"
        )}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-12 whitespace-nowrap"
          >
            <span className="font-display text-2xl font-medium tracking-tight text-white/20 md:text-4xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-ocean-500/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
