import Image from "next/image";
import Link from "next/link";

import { IconArrowUpRight, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconMail, IconPhone } from "@tabler/icons-react";

import MaritimeDecoration from "@/components/ui/MaritimeDecoration";
import { siteConfig } from "@/data/site-content";

const footerGroups = [
  ["Company", [["About us", "/about-us"], ["Why choose us", "/why-choose-us"], ["Our process", "/our-process"], ["Careers", "/careers"]]],
  ["Services", [["All services", "/services"], ["Registration", "/services/vessel-registration"], ["Naval architecture", "/services/naval-architecture"], ["Request a quote", "/quote-request"]]],
  ["Who we serve", [["Yacht owners", "/industries/private-yacht-owners"], ["Vessel owners", "/industries/commercial-vessel-owners"], ["Marine companies", "/industries/marine-companies"], ["Charter companies", "/industries/charter-companies"]]],
  ["Resources", [["Blog", "/resources/blog"], ["FAQs", "/resources/faqs"], ["Downloads", "/resources/downloads"], ["Gallery", "/gallery"]]],
  ["Legal", [["Privacy", "/privacy-policy"], ["Terms & conditions", "/terms-conditions"], ["Cookie policy", "/cookie-policy"]]],
] as const;

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com", IconBrandLinkedin],
  ["Instagram", "https://www.instagram.com", IconBrandInstagram],
  ["Facebook", "https://www.facebook.com", IconBrandFacebook],
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[.08] bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="absolute inset-0 maritime-grid opacity-[.08]" aria-hidden="true" />
      <MaritimeDecoration position="right" symbol="anchor" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 xl:grid-cols-[1.3fr_repeat(5,.8fr)]">
          <div className="max-w-xs">
            <div className="inline-flex rounded-xl bg-white p-2 shadow-sm"><Image src="/images/logo.png" alt="Marine Registration Services" width={200} height={54} className="h-10 w-auto object-contain" /></div>
            <p className="mt-4 text-sm leading-6 text-silver-300/65">A Dubai-based maritime partner for registration, compliance and technical documentation.</p>
            <Link href="/quote-request" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-accent transition hover:text-white">Start your vessel route <IconArrowUpRight size={16}/></Link>
          </div>
          {footerGroups.map(([title, items]) => <div key={title}><h2 className="text-[10px] font-bold uppercase tracking-[.18em] text-white/90">{title}</h2><ul className="mt-5 space-y-3">{items.map(([label, href]) => <li key={href}><Link href={href} className="text-sm text-silver-300/60 transition hover:text-cyan-accent">{label}</Link></li>)}</ul></div>)}
        </div>

        <div className="mt-14 grid gap-5 rounded-2xl border border-white/[.08] bg-white/[.035] p-5 sm:grid-cols-2 sm:items-center sm:p-6">
          <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-cyan-accent">Get in touch</p><div className="mt-3 flex flex-col gap-2 text-sm text-silver-300/70 sm:flex-row sm:gap-5"><a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 transition hover:text-white"><IconMail size={15} className="text-cyan-accent"/>{siteConfig.email}</a><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 transition hover:text-white"><IconPhone size={15} className="text-cyan-accent"/>{siteConfig.phone}</a></div></div><a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-navy-950 transition hover:-translate-y-0.5 hover:bg-white sm:justify-self-end"><IconBrandWhatsapp size={18}/> WhatsApp the team</a>
        </div>
      </div>
      <div className="relative border-t border-white/[.08]"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-silver-300/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p><div className="flex items-center gap-3">{socialLinks.map(([label, href, Icon]) => <a key={label} href={href} aria-label={label} className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-silver-300/60 transition hover:border-cyan-accent/50 hover:text-cyan-accent"><Icon size={15}/></a>)}</div></div></div>
    </footer>
  );
}
