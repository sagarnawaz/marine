interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  index?: string;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  index,
  className = "",
  id,
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`relative ${alignClass} ${className}`}>
      {index && (
        <span
          className={`section-index absolute -top-8 font-display ${
            align === "center"
              ? "left-1/2 -translate-x-1/2"
              : "-left-2 -top-12"
          }`}
          aria-hidden="true"
        >
          {index}
        </span>
      )}

      <div className="relative max-w-3xl">
        {label && (
          <div
            className={`mb-5 flex items-center gap-3 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <span className="section-label">{label}</span>
            <span className="award-divider w-16" />
          </div>
        )}

        <h2 id={id} className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-5 text-base leading-relaxed text-silver-300/75 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
