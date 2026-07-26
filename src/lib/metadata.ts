import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/data/site-content";

export function buildMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const title = `${siteConfig.legalName} | Maritime Registration & Naval Architecture`;
  const description =
    "Taking care of your maritime needs since 2011. Premium vessel registration, renewal, and naval architecture services in Dubai and the UAE.";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [
      "marine registration",
      "yacht registration Dubai",
      "vessel registration UAE",
      "naval architecture",
      "maritime services",
    ],
    alternates: { canonical: "/" },
    icons: {
      icon: "/icon.svg",
      shortcut: "/favicon.ico",
      apple: "/icon.svg",
    },
    openGraph: {
      title: siteConfig.legalName,
      description,
      type: "website",
      url: siteUrl,
      siteName: siteConfig.name,
      locale: "en_AE",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.legalName,
      description,
      images: ["/og-image.jpg"],
    },
  };
}
