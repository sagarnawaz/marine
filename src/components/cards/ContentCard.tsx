import Link from "next/link";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const cardClassName = "group relative overflow-hidden rounded-2xl border border-white/[.09] bg-navy-900/55 p-5 shadow-[0_16px_40px_rgba(2,6,23,.18)] transition duration-300 hover:-translate-y-1 hover:border-cyan-accent/40 hover:shadow-[0_22px_48px_rgba(2,6,23,.38)] sm:p-6";

export default function ContentCard({ children, className = "", href }: ContentCardProps) {
  const content = <>{children}<span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-accent to-transparent transition-transform duration-500 group-hover:scale-x-100" /></>;
  const classes = `${cardClassName} ${className}`;

  return href ? <Link href={href} className={classes}>{content}</Link> : <article className={classes}>{content}</article>;
}
