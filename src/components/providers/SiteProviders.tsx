"use client";

import SmoothScrollProvider from "./SmoothScrollProvider";
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
      {children}
    </SmoothScrollProvider>
  );
}
