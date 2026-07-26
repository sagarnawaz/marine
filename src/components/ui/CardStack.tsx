"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { motion, useReducedMotion } from "motion/react";

export interface CardStackItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  tag: string;
}

interface CardStackProps {
  items: CardStackItem[];
}

function getOffset(index: number, activeIndex: number, length: number) {
  const raw = index - activeIndex;
  const alternate = raw > 0 ? raw - length : raw + length;
  return Math.abs(alternate) < Math.abs(raw) ? alternate : raw;
}

export default function CardStack({ items }: CardStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || isPaused || items.length < 2) return;
    const interval = window.setInterval(() => setActiveIndex((index) => (index + 1) % items.length), 3600);
    return () => window.clearInterval(interval);
  }, [isPaused, items.length, reduceMotion]);

  return <div className="mx-auto mt-14 w-full max-w-4xl" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}><div className="relative h-[22rem] sm:h-[25rem]" role="region" aria-label="Explore maritime services" tabIndex={0} onKeyDown={(event) => { if (event.key === "ArrowLeft") setActiveIndex((index) => (index - 1 + items.length) % items.length); if (event.key === "ArrowRight") setActiveIndex((index) => (index + 1) % items.length); }}>{items.map((item, index) => { const offset = getOffset(index, activeIndex, items.length); const isActive = offset === 0; const isVisible = Math.abs(offset) <= 2; return <motion.article key={item.id} className="absolute left-1/2 top-0 w-[15.5rem] -translate-x-1/2 cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-navy-950 shadow-2xl sm:w-80" initial={false} animate={{ opacity: isVisible ? (isActive ? 1 : 0.56) : 0, x: `${offset * 44}%`, y: isActive ? 0 : 24 + Math.abs(offset) * 12, rotate: offset * 8, scale: isActive ? 1 : 0.88, zIndex: 10 - Math.abs(offset) }} transition={{ type: "spring", stiffness: 260, damping: 27 }} onClick={() => setActiveIndex(index)} aria-hidden={!isVisible}><div className="relative aspect-[4/5]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 248px, 320px" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" /><span className="absolute left-4 top-4 rounded-full border border-white/20 bg-navy-950/60 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.16em] text-cyan-accent backdrop-blur-md">{item.tag}</span><div className="absolute inset-x-0 bottom-0 p-5"><h3 className="font-display text-xl font-bold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-silver-300/75">{item.description}</p>{isActive && <Link href={item.href} onClick={(event) => event.stopPropagation()} className="mt-4 inline-flex text-sm font-bold text-cyan-accent transition hover:text-white">Explore service →</Link>}</div></div></motion.article>; })}</div><div className="mt-4 flex justify-center gap-2">{items.map((item, index) => <button key={item.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show ${item.title}`} aria-current={index === activeIndex} className={`h-2.5 rounded-full transition ${index === activeIndex ? "w-7 bg-cyan-accent" : "w-2.5 bg-white/25 hover:bg-white/50"}`} />)}</div></div>;
}
