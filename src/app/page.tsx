import React from "react";
import Hero from "@/components/Hero";
import TrustedLogos from "@/components/TrustedLogos";
import BentoGrid from "@/components/BentoGrid";
import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import Testimonials from "@/components/Testimonials";
import StatsTeam from "@/components/StatsTeam";
import FoundersDesk from "@/components/FoundersDesk";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-bg-light text-text-light-primary flex flex-col">
      {/* Dark Hero Section */}
      <Hero />

      {/* Light Body Sections (wrapped in IDs for Navbar scroll link anchors) */}
      <div id="work">
        {/* Section 2 A: Trusted Logos */}
        <TrustedLogos />

        {/* Section 2 B: Asymmetric Bento Grid */}
        <BentoGrid />

        {/* Section 3.5: Apple Cards Carousel Showcase */}
        <AppleCardsCarouselDemo />
      </div>

      {/* Section 4: Light Testimonials Carousel */}
      <div id="products">
        <Testimonials />
      </div>

      {/* Section 5: Team Showcase & Counter stats */}
      <StatsTeam />

      {/* Section 8: Dark Founder's Bio Desk + Carousel #2 */}
      <FoundersDesk />

      {/* Section 9: FAQ (radix/shadcn Accordion) */}
      <div id="blog">
        <FAQ />
      </div>

      {/* Section 10: Dark Footer CTA & Sitemap */}
      <Footer />
    </div>
  );
}
