import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[12rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-navy-800/30 p-0 shadow-none transition duration-500 hover:border-ocean-500/30 hover:shadow-2xl hover:shadow-ocean-600/10",
        className
      )}
    >
      {header}
      <div className="p-4 pt-3 transition duration-300 group-hover/bento:translate-y-0">
        {icon}
        <div className="mt-2 mb-1 text-sm font-semibold tracking-tight text-silver-100">
          {title}
        </div>
        <div className="text-xs font-normal text-silver-300/65">{description}</div>
      </div>
    </div>
  );
};
