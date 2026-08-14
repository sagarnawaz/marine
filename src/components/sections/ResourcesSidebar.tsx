import Link from "next/link";

const documentLinks = [
  {
    title: "Private",
    description: "Pleasure boat and sailing boat PDF requirements.",
    href: "#private-documents",
  },
  {
    title: "Tourist",
    description: "Touring boat and amphibious bus PDF requirements.",
    href: "#tourist-documents",
  },
  {
    title: "Commercial",
    description: "Commercial vessel PDF requirements by size and GT.",
    href: "#commercial-documents",
  },
] as const;

export default function ResourcesSidebar() {
  return (
    <aside className="h-fit lg:sticky lg:top-28" aria-label="Documents navigation">
      <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-3">
        <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-accent">
          Documents
        </p>
        <nav className="mt-1 space-y-2">
          {documentLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl border border-cyan-accent/20 bg-cyan-accent/8 p-4 text-white transition hover:border-cyan-accent/55 hover:bg-cyan-accent/12"
            >
              <span className="font-display text-lg font-semibold">
                {link.title}
              </span>
              <span className="mt-2 block text-xs leading-5 text-silver-300/65">
                {link.description}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
