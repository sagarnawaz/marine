import { notFound } from "next/navigation";
import MarketingPage from "@/components/sections/MarketingPage";
import ServiceDetailPage from "@/features/services/ServiceDetailPage";
import { serviceDetailPages, services } from "@/data/phase-one";
const serviceHeroImages: Record<string, [string, string]> = {
  "vessel-registration": ["/images/services/yacht-registration.png", "Yacht travelling through Gulf waters"],
  "trim-stability": ["/images/services/trim-stability.png", "Technical stability assessment on a modern yacht"],
  "inclining-experiments": ["/images/services/inclining-experiments.png", "Marine engineers conducting an inclining experiment"],
  "load-tests": ["/images/services/load-tests.png", "Professional marine load test aboard a vessel"],
  "general-arrangements": ["/images/services/general-arrangements.png", "Yacht general arrangement plans and vessel profile"],
  "lines-plans": ["/images/services/lines-plans.png", "Naval architect reviewing vessel hull lines and offset plans"],
  "tank-calibrations": ["/images/services/tank-calibrations.png", "Marine professional completing tank calibration work"],
  "safety-equipment": ["/images/services/safety-equipment.png", "Marine safety equipment arranged on a yacht deck"],
  "marine-insurance": ["/images/services/marine-insurance.png", "Protected yacht at a Dubai marina"],
  "fire-safety-plans": ["/images/services/fire-safety-plans.png", "Marine safety officer reviewing vessel safety plans"],
  "freeboard-calculations": ["/images/services/freeboard-calculations.png", "Surveyor inspecting a vessel hull freeboard"],
  "equipment-number": ["/images/services/equipment-number.png", "Marine bridge equipment used for technical calculations"],
  "resistance-powering": ["/images/services/resistance-powering.png", "Yacht performance assessment underway"],
  "damage-stability": ["/images/services/damage-stability.png", "Naval architect completing a stability assessment"],
  "tonnage-calculations": ["/images/services/tonnage-calculations.png", "Marine surveyor measuring a yacht hull in dry dock"],
  "naval-architecture": ["/images/services/naval-architecture.png", "Naval architect reviewing yacht plans in a marine design office"],
  "draft-survey": ["/images/services/draft-survey.png", "Marine surveyor examining vessel draft markings"],
};
export function generateStaticParams(){return Array.from(new Set([...services, ...serviceDetailPages].map(({slug})=>slug))).map((slug)=>({slug}));}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const detailedService=serviceDetailPages.find((service)=>service.slug===slug);if(detailedService)return <ServiceDetailPage service={detailedService}/>;const service=services.find(x=>x.slug===slug);if(!service)notFound();const [image, imageAlt] = serviceHeroImages[slug] ?? [];return <MarketingPage eyebrow={service.category} title={service.title} intro={service.summary} image={image} imageAlt={imageAlt} cards={[["What we handle","We review your vessel particulars, prepare the appropriate documents and keep the process moving."],["A clear process","You receive a practical checklist, transparent updates and one point of contact."],["Ready when you are","Tell us about your vessel and we will confirm the next best step."]]} />}
