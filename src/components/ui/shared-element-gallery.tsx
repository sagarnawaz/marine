"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

interface GalleryImageData {
  id: string;
  src: string;
  alt: string;
}

interface GalleryContextValue {
  selectedImage: GalleryImageData | null;
  setSelectedImage: (image: GalleryImageData | null) => void;
}

interface GalleryImageProps extends GalleryImageData {
  className?: string;
}

const GalleryContext = createContext<GalleryContextValue | null>(null);

const spring = {
  type: "spring",
  stiffness: 350,
  damping: 35,
  mass: 1,
} as const;

export function Gallery({ children }: { children: ReactNode }) {
  const [selectedImage, setSelectedImage] =
    useState<GalleryImageData | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return (
    <GalleryContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
      <GalleryModal />
    </GalleryContext.Provider>
  );
}

export function GalleryGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:auto]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function GalleryImage({
  src,
  alt,
  id,
  className,
}: GalleryImageProps) {
  const context = useContext(GalleryContext);

  if (!context) {
    throw new Error("GalleryImage must be used within a Gallery");
  }

  return (
    <motion.button
      type="button"
      layoutId={`image-${id}`}
      whileHover={{ scale: 0.985 }}
      whileTap={{ scale: 0.96 }}
      transition={spring}
      className={cn(
        "group relative mb-4 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-navy-900 text-left shadow-lg cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-accent",
        className,
      )}
      onClick={() => context.setSelectedImage({ id, src, alt })}
      aria-label={`Open image: ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.button>
  );
}

function GalleryModal() {
  const context = useContext(GalleryContext);

  if (!context) return null;

  const { selectedImage, setSelectedImage } = context;

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded image: ${selectedImage.alt}`}
        >
          <motion.button
            type="button"
            aria-label="Close expanded image"
            className="absolute inset-0 cursor-zoom-out bg-navy-950/90 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedImage(null)}
          />

          <motion.div
            layoutId={`image-${selectedImage.id}`}
            className="relative z-10 h-[min(82vh,900px)] w-[min(92vw,1400px)] cursor-grab overflow-hidden rounded-2xl bg-navy-900 shadow-2xl active:cursor-grabbing"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.75}
            onDragEnd={(_, info) => {
              if (
                Math.abs(info.offset.y) > 100 ||
                Math.abs(info.velocity.y) > 300
              ) {
                setSelectedImage(null);
              }
            }}
            transition={spring}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              priority
              unoptimized
              draggable={false}
              className="object-contain"
              sizes="92vw"
            />
          </motion.div>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ delay: 0.08, duration: 0.2 }}
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-accent sm:right-7 sm:top-7"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
            autoFocus
          >
            <IconX aria-hidden="true" size={21} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
