import SectionHeading from "./SectionHeading";
import ChecklistCard from "./ChecklistCard";
import Image from "next/image";
import {
  pleasureDocuments,
  commercialDocuments,
  foreignDocuments,
  marineImages,
} from "@/data/site-content";

interface RegistrationSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  documents: {
    newRegistration: { title: string; items: string[] };
    renewal: { title: string; items: string[] };
  };
}

function RegistrationSection({
  id,
  title,
  description,
  image,
  imageAlt,
  documents,
}: RegistrationSectionProps) {
  return (
    <section id={id} className="relative py-20 lg:py-28" aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            label="Documentation"
            title={title}
            description={description}
            className="mb-0"
          />
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/10]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ChecklistCard
            title={documents.newRegistration.title}
            items={documents.newRegistration.items}
          />
          <ChecklistCard
            title={documents.renewal.title}
            items={documents.renewal.items}
          />
        </div>
      </div>
    </section>
  );
}

export default function RegistrationDocuments() {
  return (
    <div aria-label="Registration document requirements">
      <RegistrationSection
        id="pleasure-docs"
        title="Pleasure Vessel Documents"
        description="Required documentation for pleasure craft registration and renewal with UAE maritime authorities."
        image={marineImages.pleasureDocs}
        imageAlt={marineImages.pleasureDocsAlt}
        documents={pleasureDocuments}
      />
      <div className="wave-divider mx-auto max-w-xs" />
      <RegistrationSection
        id="commercial-docs"
        title="Commercial Vessel Documents"
        description="Complete documentation checklist for commercial vessel registration and fleet renewals."
        image={marineImages.commercialDocs}
        imageAlt={marineImages.commercialDocsAlt}
        documents={commercialDocuments}
      />
      <div className="wave-divider mx-auto max-w-xs" />
      <RegistrationSection
        id="foreign-docs"
        title="Foreign Vessel Documents"
        description="Documentation requirements for foreign-flagged vessels operating in UAE waters."
        image={marineImages.foreignDocs}
        imageAlt={marineImages.foreignDocsAlt}
        documents={foreignDocuments}
      />
    </div>
  );
}
