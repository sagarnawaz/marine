import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconMapPin } from "@tabler/icons-react";

interface DetailHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumb: string;
}

export default function DetailHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
}: DetailHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[.07] pt-32 sm:pt-40">
      <div className="absolute inset-0 maritime-grid opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:gap-20 lg:px-8 lg:pb-28">
        <div>
          <Link href="/" className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/45 transition hover:text-cyan-accent">
            Home <IconArrowRight size={13} /> {breadcrumb}
          </Link>
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.24em] text-cyan-accent">
            <span>{eyebrow}</span><span className="h-px w-14 bg-cyan-accent/50" />
          </div>
          <h1 className="mt-5 max-w-[11ch] font-display text-[clamp(3rem,7vw,6.8rem)] font-bold leading-[.9] tracking-[-.055em] text-white">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-silver-300/75 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-white/50">
            <IconMapPin size={15} className="text-cyan-accent" /> Dubai · UAE
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900/60">
          <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
