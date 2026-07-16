import { cn } from "@/lib/utils";

export const LogoCloud = ({
  logos,
  className,
}: {
  logos: { name: string; abbr: string }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-6 sm:gap-10",
        className
      )}
    >
      {logos.map((logo) => (
        <div
          key={logo.abbr}
          className="group flex h-24 w-36 flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] px-4 transition-all duration-500 hover:border-ocean-500/30 hover:bg-ocean-600/5 sm:h-28 sm:w-44"
        >
          <span className="font-display text-2xl font-bold text-silver-300/30 grayscale transition-all duration-500 group-hover:scale-105 group-hover:text-ocean-400 group-hover:grayscale-0 sm:text-3xl">
            {logo.abbr}
          </span>
          <span className="mt-1 text-center text-[10px] leading-tight text-silver-300/25 transition-colors duration-500 group-hover:text-silver-300/70">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  );
};
