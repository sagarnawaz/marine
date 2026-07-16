import Header from "@/components/sections/Header";
import PremiumHero from "@/components/sections/PremiumHero";
import {
  PremiumCapabilities,
  PremiumEngineering,
  PremiumStory,
  PremiumVesselRoutes,
} from "@/components/sections/PremiumLandingSections";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ApprovedBy from "@/components/sections/ApprovedBy";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import Marquee from "@/components/ui/Marquee";

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
      <main id="main-content">
        <PremiumHero />
        <Marquee items={MARQUEE_ITEMS} />
        <PremiumStory />
        <PremiumCapabilities />
        <PremiumVesselRoutes />
        <PremiumEngineering />
        <ProcessTimeline />
        <TestimonialCarousel />
        <ApprovedBy />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
