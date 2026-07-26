import type { Metadata } from "next";
import "./globals.css";
import SiteProviders from "@/components/providers/SiteProviders";
import SkipToContent from "@/components/a11y/SkipToContent";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased" suppressHydrationWarning><JsonLd /><SkipToContent /><SiteProviders>{children}</SiteProviders></body></html>;
}
