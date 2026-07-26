import { IconBrandWhatsapp } from "@tabler/icons-react";

import { siteConfig } from "@/data/site-content";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-3 z-[110] grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-navy-950 shadow-[0_14px_34px_rgba(37,211,102,.25)] transition hover:scale-105 sm:right-5 sm:h-14 sm:w-14"
    >
      <IconBrandWhatsapp size={26} stroke={2.1} />
    </a>
  );
}
