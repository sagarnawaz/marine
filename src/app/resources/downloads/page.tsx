import DetailHero from "@/components/sections/DetailHero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import ResourcesSidebar from "@/components/sections/ResourcesSidebar";

interface DownloadFile {
  title: string;
  description: string;
  href: string;
}

interface DownloadSection {
  title: string;
  description: string;
  files: DownloadFile[];
}

const downloadSections: DownloadSection[] = [
  {
    title: "Private",
    description:
      "Client-supplied requirements and reference documents for private pleasure boats.",
    files: [
      {
        title: "Pleasure boats under 8m",
        description: "Requirements for private pleasure boats below 8 metres.",
        href: "/downloads/private/pleasure-boats-under-8m.pdf",
      },
      {
        title: "Pleasure boats 8-12m",
        description: "Requirements for private pleasure boats from 8 to 12 metres.",
        href: "/downloads/private/pleasure-boats-8-12m.pdf",
      },
      {
        title: "Pleasure boats 12-24m",
        description: "Requirements for private pleasure boats from 12 to 24 metres.",
        href: "/downloads/private/pleasure-boats-12-24m.pdf",
      },
      {
        title: "Pleasure boats above 24m",
        description: "Requirements for private pleasure boats above 24 metres.",
        href: "/downloads/private/pleasure-boats-above-24m.pdf",
      },
      {
        title: "Rowing pleasure boats under 8m",
        description: "Requirements for rowing pleasure boats below 8 metres.",
        href: "/downloads/private/rowing-pleasure-boats-under-8m.pdf",
      },
      {
        title: "Rowing boats crossing the ocean",
        description: "Additional requirements for rowing boats crossing the ocean.",
        href: "/downloads/private/rowing-boats-ocean-crossing-additional-requirements.pdf",
      },
      {
        title: "Sailing boats",
        description: "Requirements for private sailing boats.",
        href: "/downloads/private/sailing-boats.pdf",
      },
    ],
  },
  {
    title: "Tourist",
    description:
      "Client-supplied requirements and reference documents for tourist vessels.",
    files: [
      {
        title: "Touring boats up to 8m",
        description: "Requirements for tourist touring boats up to 8 metres.",
        href: "/downloads/tourist/touring-boats-up-to-8m.pdf",
      },
      {
        title: "Touring boats 8-12m",
        description: "Requirements for tourist touring boats from 8 to 12 metres.",
        href: "/downloads/tourist/touring-boats-8-12m.pdf",
      },
      {
        title: "Touring boats 12-24m",
        description: "Requirements for tourist touring boats from 12 to 24 metres.",
        href: "/downloads/tourist/touring-boats-12-24m.pdf",
      },
      {
        title: "Touring boats above 24m",
        description: "Requirements for tourist touring boats above 24 metres.",
        href: "/downloads/tourist/touring-boats-above-24m.pdf",
      },
      {
        title: "Amphibious bus",
        description: "Requirements for amphibious bus tourist operations.",
        href: "/downloads/tourist/amphibious-bus.pdf",
      },
    ],
  },
  {
    title: "Commercial",
    description:
      "Client-supplied requirements and reference documents for commercial vessels.",
    files: [
      {
        title: "Commercial vessels up to 8m",
        description: "Requirements for commercial vessels up to 8 metres.",
        href: "/downloads/commercial/commercial-vessels-up-to-8m.pdf",
      },
      {
        title: "Commercial vessels 8-12m",
        description: "Requirements for commercial vessels from 8 to 12 metres.",
        href: "/downloads/commercial/commercial-vessels-8-12m.pdf",
      },
      {
        title: "Commercial vessels 12-24m",
        description: "Requirements for commercial vessels from 12 to 24 metres.",
        href: "/downloads/commercial/commercial-vessels-12-24m.pdf",
      },
      {
        title: "Commercial vessels up to 150 GT",
        description: "Requirements for commercial vessels up to 150 gross tonnage.",
        href: "/downloads/commercial/commercial-vessels-up-to-150gt.pdf",
      },
      {
        title: "Commercial vessels 150-300 GT",
        description: "Requirements for commercial vessels from 150 to 300 gross tonnage.",
        href: "/downloads/commercial/commercial-vessels-150-300gt.pdf",
      },
      {
        title: "Commercial vessels 300-500 GT",
        description: "Requirements for commercial vessels from 300 to 500 gross tonnage.",
        href: "/downloads/commercial/commercial-vessels-300-500gt.pdf",
      },
    ],
  },
];

export default function Downloads() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DetailHero
          eyebrow="Documents"
          breadcrumb="Documents"
          title="PDF requirements, ready when you are."
          description="Private, tourist, and commercial vessel documents organized by category."
          image="/images/marine-experts.png"
          imageAlt="Marine specialists preparing documentation"
        />
        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[17rem_1fr] lg:px-8">
          <ResourcesSidebar />
          <div className="space-y-14">
            {downloadSections.map((section) => (
              <section
                key={section.title}
                id={`${section.title.toLowerCase()}-documents`}
                aria-labelledby={`${section.title.toLowerCase()}-documents-title`}
                className="scroll-mt-28"
              >
                <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-accent">
                      Document category
                    </p>
                    <h2
                      id={`${section.title.toLowerCase()}-documents-title`}
                      className="mt-2 font-display text-3xl font-bold text-white"
                    >
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-silver-300/65">
                      {section.description}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-silver-300/60">
                    {section.files.length > 0
                      ? `${section.files.length} PDF files`
                      : "Coming soon"}
                  </span>
                </div>

                {section.files.length > 0 ? (
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {section.files.map((file, index) => (
                      <a
                        key={file.href}
                        href={file.href}
                        download
                        className="group rounded-2xl border border-white/10 bg-navy-900/50 p-6 transition hover:-translate-y-0.5 hover:border-cyan-accent/50"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-accent">
                          PDF {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-3 font-display text-xl text-white">
                          {file.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-silver-300/65">
                          {file.description}
                        </p>
                        <span className="mt-6 inline-block text-sm font-bold text-cyan-accent group-hover:text-white">
                          Download PDF
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.025] p-6 text-sm text-silver-300/60">
                    Files for this section are not available yet.
                  </div>
                )}
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
