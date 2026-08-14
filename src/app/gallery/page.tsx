"use client";

import { useState } from "react";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import DetailHero from "@/components/sections/DetailHero";
import ImageGallery from "@/components/ui/image-gallery";

const galleryImages = [
  ["marine-hero", "/images/marine-hero.png", "Yachts", "Luxury yacht cruising on open water"],
  ["commercial-vessel", "/images/commercial-vessel.png", "Commercial", "Commercial vessel underway"],
  ["foreign-yacht", "/images/foreign-yacht.png", "Yachts", "Foreign yacht in UAE waters"],
  ["naval-survey", "/images/naval-survey.png", "Technical", "Naval survey and vessel documentation"],
  ["marine-experts", "/images/marine-experts.png", "Technical", "Marine experts carrying out technical work"],
  ["yacht-registration", "/images/services/yacht-registration.png", "Yachts", "Yacht registration services"],
  ["boat-registration", "/images/services/boat-registration.png", "Yachts", "Boat registration services"],
  ["commercial-registration", "/images/services/commercial-vessel-registration.png", "Commercial", "Commercial vessel registration"],
  ["foreign-flag", "/images/services/foreign-flag-permit.png", "Commercial", "Foreign flag vessel permit"],
  ["registration-renewal", "/images/services/registration-renewal.png", "Registration", "Vessel registration renewal"],
  ["ownership-transfer", "/images/services/ownership-transfer.png", "Registration", "Vessel ownership transfer"],
  ["naval-architecture", "/images/services/naval-architecture.png", "Engineering", "Naval architecture planning"],
  ["general-arrangements", "/images/services/general-arrangements.png", "Engineering", "General arrangement drawings"],
  ["lines-plans", "/images/services/lines-plans.png", "Engineering", "Vessel lines plans"],
  ["resistance-powering", "/images/services/resistance-powering.png", "Engineering", "Resistance and powering calculations"],
  ["equipment-number", "/images/services/equipment-number.png", "Engineering", "Marine equipment number calculations"],
  ["tonnage-calculations", "/images/services/tonnage-calculations.png", "Engineering", "Vessel tonnage calculations"],
  ["freeboard-calculations", "/images/services/freeboard-calculations.png", "Engineering", "Freeboard calculations"],
  ["trim-stability", "/images/services/trim-stability.png", "Stability", "Trim and stability analysis"],
  ["damage-stability", "/images/services/damage-stability.png", "Stability", "Damage stability assessment"],
  ["inclining-experiments", "/images/services/inclining-experiments.png", "Stability", "Vessel inclining experiment"],
  ["tank-calibrations", "/images/services/tank-calibrations.png", "Technical", "Marine tank calibration"],
  ["draft-survey", "/images/services/draft-survey.png", "Technical", "Vessel draft survey"],
  ["load-tests", "/images/services/load-tests.png", "Technical", "Marine equipment load testing"],
  ["safety-equipment", "/images/services/safety-equipment.png", "Safety", "Marine safety equipment inspection"],
  ["fire-safety", "/images/services/fire-safety-plans.png", "Safety", "Vessel fire safety plans"],
  ["marine-insurance", "/images/services/marine-insurance.png", "Commercial", "Marine insurance support"],
  ["marine-survey-generated", "/images/services/marine-survey-generated.png", "Technical", "Generated marine survey inspection scene"],
  ["annual-survey-generated", "/images/services/annual-survey-generated.png", "Technical", "Generated annual survey coordination scene"],
  ["safety-equipment-inspection-generated", "/images/services/safety-equipment-inspection-generated.png", "Safety", "Generated safety equipment inspection scene"],
  ["annual-inspection-generated", "/images/services/annual-inspection-generated.png", "Technical", "Generated annual vessel inspection scene"],
  ["naval-architecture-generated", "/images/services/naval-architecture-generated.png", "Engineering", "Generated naval architecture planning scene"],
  ["technical-drawings-generated", "/images/services/technical-drawings-generated.png", "Engineering", "Generated technical drawings review scene"],
  ["stability-booklet-generated", "/images/services/stability-booklet-generated.png", "Stability", "Generated stability booklet preparation scene"],
  ["classification-services-generated", "/images/services/classification-services-generated.png", "Engineering", "Generated classification services coordination scene"],
  ["tdra-radio-license-generated", "/images/services/tdra-radio-license-generated.png", "Compliance", "Generated TDRA radio license equipment scene"],
  ["mmsi-registration-generated", "/images/services/mmsi-registration-generated.png", "Compliance", "Generated MMSI registration equipment scene"],
  ["yacht-insurance-generated", "/images/services/yacht-insurance-generated.png", "Commercial", "Generated yacht insurance document review scene"],
  ["berthing-assistance-generated", "/images/services/berthing-assistance-generated.png", "Commercial", "Generated marina berthing assistance scene"],
] as const;

const categories = [
  "All",
  ...Array.from(new Set(galleryImages.map(([, , category]) => category))),
] as const;

type Category = (typeof categories)[number];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(([, , category]) => category === activeCategory);
  const galleryItems = visibleImages.map(([id, src, , alt]) => ({
    id,
    src,
    alt,
  }));

  return (
    <>
      <Header />
      <main id="main-content">
        <DetailHero
          eyebrow="Gallery"
          breadcrumb="Gallery"
          title="A closer look at work on the water."
          description="Explore our vessels, engineering work, safety services and the people behind Marine Registration Services. Select an image to view it full screen."
          image="/images/marine-hero.png"
          imageAlt="Luxury yacht cruising on open water"
        />

        <section
          className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
          aria-labelledby="gallery-heading"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-accent">
              Marine portfolio
            </p>
            <h2
              id="gallery-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Every angle of our work.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-silver-200/70">
              Browse all {galleryImages.length} images. Hover or tap an image
              to expand it.
            </p>
          </div>

          <div
            className="mt-9 flex flex-wrap gap-2"
            aria-label="Filter gallery by category"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] transition ${
                  activeCategory === category
                    ? "border-cyan-accent bg-cyan-accent text-navy-950"
                    : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <ImageGallery images={galleryItems} className="mt-10" />
        </section>
      </main>
      <Footer />
    </>
  );
}
