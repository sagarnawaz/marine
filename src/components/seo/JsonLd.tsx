import { siteConfig } from "@/data/site-content";
import { getSiteUrl } from "@/lib/site-url";

export default function JsonLd() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    description: siteConfig.tagline,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: ["AE", "GCC"],
    serviceType: [
      "Vessel Registration",
      "Naval Architecture",
      "Maritime Compliance",
    ],
    foundingDate: String(siteConfig.yearFounded),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
