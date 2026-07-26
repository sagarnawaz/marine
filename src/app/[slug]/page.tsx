import { notFound } from "next/navigation";
import MarketingPage from "@/components/sections/MarketingPage";
import { simplePages } from "@/data/phase-one";

export function generateStaticParams() { return Object.keys(simplePages).map((slug) => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = simplePages[slug]; if (!page) notFound(); return <MarketingPage {...page} />; }
