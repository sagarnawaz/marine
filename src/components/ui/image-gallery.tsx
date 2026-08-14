"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

export interface ImageGalleryItem {
  id: string;
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: readonly ImageGalleryItem[];
  className?: string;
  itemsPerRow?: number;
}

function chunkImages(images: readonly ImageGalleryItem[], size: number) {
  const rows: ImageGalleryItem[][] = [];

  for (let index = 0; index < images.length; index += size) {
    rows.push(images.slice(index, index + size));
  }

  return rows;
}

export default function ImageGallery({
  images,
  className,
  itemsPerRow = 6,
}: ImageGalleryProps) {
  const [activeImageId, setActiveImageId] = useState<string | null>(null);
  const rows = chunkImages(images, itemsPerRow);

  if (images.length === 0) {
    return (
      <p className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-sm text-silver-300/70">
        No gallery images found for this filter.
      </p>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {rows.map((row, rowIndex) => (
        <div
          key={row.map((image) => image.id).join("-")}
          className="grid gap-3 sm:flex sm:h-[24rem] sm:items-stretch"
        >
          {row.map((image, imageIndex) => {
            const isActive =
              activeImageId === image.id ||
              (!activeImageId && rowIndex === 0 && imageIndex === 0);

            return (
              <button
                key={image.id}
                type="button"
                className={cn(
                  "group relative min-h-64 overflow-hidden rounded-xl border border-white/10 bg-navy-900 text-left shadow-lg transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-accent sm:h-full sm:w-32 sm:flex-1",
                  isActive && "sm:flex-[4]",
                )}
                onClick={() =>
                  setActiveImageId((current) =>
                    current === image.id ? null : image.id,
                  )
                }
                onMouseEnter={() => setActiveImageId(image.id)}
                onFocus={() => setActiveImageId(image.id)}
                aria-label={`Expand image: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-35" />
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
