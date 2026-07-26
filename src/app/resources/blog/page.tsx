import ContentCard from "@/components/cards/ContentCard";
import DetailHero from "@/components/sections/DetailHero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { blogPosts } from "@/data/phase-one";

export default function Blog() {
  return <><Header/><main id="main-content"><DetailHero eyebrow="Journal" breadcrumb="Blog" title="Clearer thinking for life on the water." description="Practical insights from our registration and technical teams." image="/images/naval-survey.png" imageAlt="Marine survey work"/><section className="py-20"><div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-3">{blogPosts.map((post) => <ContentCard key={post.slug} href={`/resources/blog/${post.slug}`}><p className="text-xs font-bold uppercase tracking-widest text-cyan-accent">{post.category}</p><h2 className="mt-10 font-display text-xl text-white">{post.title}</h2><p className="mt-4 text-sm leading-7 text-silver-300/65">{post.excerpt}</p><span className="mt-7 block text-sm font-bold text-ocean-300">Read article →</span></ContentCard>)}</div></section></main><Footer/></>;
}
