import Header from "@/components/sections/Header";
import PremiumHero from "@/components/sections/PremiumHero";
import {
  PremiumCapabilities,
  PremiumEngineering,
  PremiumVesselRoutes,
} from "@/components/sections/PremiumLandingSections";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ApprovedBy from "@/components/sections/ApprovedBy";
import Footer from "@/components/sections/Footer";
import Marquee from "@/components/ui/Marquee";
import MarineRouteVisual from "@/components/sections/MarineRouteVisual";
import FloatingRouteExperience from "@/components/sections/FloatingRouteExperience";
import DownloadsHomeSection from "@/components/sections/DownloadsHomeSection";
import HomeWhoWeAreSection from "@/components/sections/HomeWhoWeAreSection";

const MARQUEE_ITEMS = [
  "Registration & Renewal",
  "Naval Architecture",
  "Stability Engineering",
  "Commercial Compliance",
  "Foreign Vessel Permits",
  "Safety & Survey",
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-w-0 overflow-x-clip">
        <PremiumHero />
        <Marquee items={MARQUEE_ITEMS} />
        <HomeWhoWeAreSection />
        <MarineRouteVisual />
        <FloatingRouteExperience />
        <PremiumCapabilities />
        <PremiumVesselRoutes />
        <DownloadsHomeSection />
        <PremiumEngineering />
        <ProcessTimeline />
        <TestimonialCarousel />
        <ApprovedBy />
      </main>
      <Footer />
    </>
  );
}
