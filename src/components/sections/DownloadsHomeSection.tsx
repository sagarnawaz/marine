import Link from "next/link";

import {
  IconArrowUpRight,
  IconBuildingFactory2,
  IconFileDownload,
  IconShip,
  IconSpeedboat,
} from "@tabler/icons-react";

const downloadGroups = [
  ["Private", "7 PDF files", IconSpeedboat],
  ["Tourist", "5 PDF files", IconShip],
  ["Commercial", "6 PDF files", IconBuildingFactory2],
] as const;

export default function DownloadsHomeSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[.06] bg-navy-900/35 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 maritime-grid opacity-15" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/25 bg-cyan-accent/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-accent">
            <IconFileDownload size={15} />
            Documents
          </span>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Required vessel documents in one clear place.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-silver-300/70 sm:text-base">
            Download the correct PDF requirements for private, tourist, and
            commercial vessels from one organized document library.
          </p>
          <Link
            href="/resources/downloads"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-accent px-6 py-3 text-sm font-bold text-navy-950 transition hover:-translate-y-0.5 hover:bg-white"
          >
            Open documents
            <IconArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {downloadGroups.map(([title, count, Icon]) => (
            <Link
              key={title}
              href="/resources/downloads"
              className="group rounded-2xl border border-white/10 bg-navy-950/75 p-5 transition hover:-translate-y-1 hover:border-cyan-accent/45"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-accent/25 bg-cyan-accent/10 text-cyan-accent">
                <Icon size={21} stroke={1.7} />
              </span>
              <h3 className="mt-8 font-display text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-silver-300/60">{count}</p>
              <span className="mt-6 inline-block text-sm font-bold text-cyan-accent group-hover:text-white">
                Download PDFs
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
