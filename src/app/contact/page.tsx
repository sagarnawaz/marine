import { IconArrowUpRight, IconBrandWhatsapp, IconClock, IconMail, IconMapPin, IconPhone, IconPrinter } from "@tabler/icons-react";

import ContactForm from "@/components/sections/ContactForm";
import DetailHero from "@/components/sections/DetailHero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { siteConfig } from "@/data/site-content";

const contactDetails = [
  [IconPhone, "Call directly", siteConfig.phone, `tel:${siteConfig.phone.replace(/\s/g, "")}`],
  [IconMail, "Write to us", siteConfig.email, `mailto:${siteConfig.email}`],
  [IconPrinter, "Fax", siteConfig.fax, `fax:${siteConfig.fax.replace(/\s/g, "")}`],
  [IconMapPin, "Visit us", siteConfig.address, ""],
] as const;

export default function ContactPage() {
  return <><Header/><main id="main-content"><DetailHero eyebrow="Concierge desk" breadcrumb="Contact" title="Let’s make a clear route forward." description="Tell us what you are moving, where it is registered and what you need next. Our maritime team will come back with the right route and documents." image="/images/foreign-yacht.png" imageAlt="Sailing yacht arriving in Dubai coastal waters"/><section className="relative py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">{contactDetails.map(([Icon, label, value, href]) => <div key={label} className="rounded-2xl border border-white/[.08] bg-navy-900/45 p-5"><Icon size={20} className="text-cyan-accent"/><p className="mt-6 text-[10px] font-bold uppercase tracking-[.18em] text-white/40">{label}</p>{href ? <a href={href} className="mt-2 block text-sm font-semibold text-white transition hover:text-cyan-accent">{value}</a> : <p className="mt-2 text-sm font-semibold leading-6 text-white">{value}</p>}</div>)}</div></section><ContactForm/><section className="pb-8"><div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="overflow-hidden rounded-2xl border border-white/[.08]"><iframe title="Marine Registration Services office in Al Hudaiba, Dubai" src="https://www.google.com/maps?q=Dubai%20Real%20Estate%20Centre%20Building%2C%20Al%20Mina%20Street%2C%20Dubai&output=embed" className="h-80 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div></section><section className="pb-24"><div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/[.08] bg-white/[.035] p-6 sm:flex-row sm:items-center sm:p-8"><div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-accent/10 text-cyan-accent"><IconClock size={20}/></span><div><p className="font-semibold text-white">A practical first conversation</p><p className="mt-1 text-sm text-white/50">Share the basics and we’ll help identify the next step.</p></div></div><div className="flex flex-wrap gap-5"><a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-sm font-bold text-cyan-accent hover:text-white">Email the desk <IconArrowUpRight size={17}/></a><a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="inline-flex items-center gap-2 text-sm font-bold text-cyan-accent hover:text-white"><IconBrandWhatsapp size={18}/> WhatsApp us</a></div></div></div></section></main><Footer/></>;
}
