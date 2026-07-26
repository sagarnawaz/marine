import SectionHeading from "./SectionHeading";
import { LogoCloud } from "@/components/ui/aceternity/logo-cloud";
import { approvedAuthorities } from "@/data/site-content";

export default function ApprovedBy() {
  return (
    <section
      className="relative border-y border-white/5 bg-navy-900/50 py-16 sm:py-20 lg:py-24"
      aria-label="Approved authorities"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title="Marine Registration Services is Approved by"
          index="07"
          className="mb-10 sm:mb-16"
        />
        <LogoCloud logos={approvedAuthorities} />
      </div>
    </section>
  );
}
