"use client";

import SmoothScrollProvider from "./SmoothScrollProvider";
import PageScrollReveal from "./PageScrollReveal";
import FilmGrain from "@/components/ui/FilmGrain";
import CustomCursor from "@/components/ui/CustomCursor";

export default function SiteProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      <FilmGrain />
      <CustomCursor />
      <PageScrollReveal />
      {children}
    </SmoothScrollProvider>
  );
}
