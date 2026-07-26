import DetailHero from "@/components/sections/DetailHero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import ServicesDirectory from "@/features/services/ServicesDirectory";

export default function ServicesPage() {
  return <><Header/><main id="main-content"><DetailHero eyebrow="All services" breadcrumb="Services" title="Every marine requirement, in one capable team." description="Registration, survey, technical, licensing and insurance support for yacht owners, commercial operators and foreign vessels across the UAE." image="/images/commercial-vessel.png" imageAlt="Commercial vessel operating in UAE waters"/><ServicesDirectory/></main><Footer/></>;
}
