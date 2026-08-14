import { IconCheck } from "@tabler/icons-react";

const authorities = [
  "FEDERAL TRANSPORT AUTHORITY (FTA)",
  "DUBAI MARITIME CITY AUTHORITY (DMCA)",
  "EMIRATES CLASSIFICATION SOCIETY (TASNEEF)",
  "TELECOMMUNICATION REGULATORY AUTHORITY (TRA)",
  "UAE COAST GUARD",
] as const;

export default function HomeWhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      aria-labelledby="home-who-we-are-title"
    >
      <div className="absolute inset-0 maritime-grid opacity-10" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[.24em] text-cyan-accent">
            Who we are
          </span>
          <h2
            id="home-who-we-are-title"
            className="mt-5 max-w-xl font-display text-[clamp(2.45rem,5vw,4.75rem)] font-bold leading-[.98] text-white"
          >
            Who We Are
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-silver-300/75 sm:text-lg">
            Marine Registration Services provides a multitude of services to
            the local and international maritime market. Taking care of Boats
            & Yachts in the UAE since 2011. We are approved by the following
            Government entities to provide our customers with all marine
            related services.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {authorities.map((authority) => (
              <div
                key={authority}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-navy-950/70 p-4"
              >
                <IconCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-cyan-accent"
                  aria-hidden="true"
                />
                <span className="text-xs font-bold uppercase leading-5 tracking-[.1em] text-white/80">
                  {authority}
                </span>
              </div>
            ))}
          </div>

        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/45 p-2 lg:self-center">
          <div className="overflow-hidden rounded-xl bg-navy-950">
            <iframe
              title="Marine Registration Services overview video"
              src="https://www.youtube-nocookie.com/embed/muPTVJ9-j1E"
              className="aspect-video w-full border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="p-4 sm:p-5">
            <div className="rounded-xl border border-white/10 bg-navy-950/70 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-cyan-accent">
                Since 2011
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Taking care of Boats & Yachts in the UAE.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl rounded-2xl border border-cyan-accent/20 bg-cyan-accent/10 p-5 text-center sm:p-6 lg:col-span-2 lg:-mt-2">
          <p className="text-sm leading-7 text-silver-300/75 sm:text-base">
            We are authorized service agents for Emirates Classification
            Society (TASNEEF) to carry out vessel inspections and surveys led
            by our in house naval architectural team. We handle all the
            requirements laid out by the local authorities for vessels that
            fall under the new G.C.C code where certain technical requirement
            are now a must to complete the new registration process in the
            U.A.E.
          </p>
        </div>
      </div>
    </section>
  );
}
