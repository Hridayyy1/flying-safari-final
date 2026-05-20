import { QuickAction } from "@/components/QuickAction";

import { BlogsSection } from "@/components/sections/BlogsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeScrollSection } from "@/components/sections/HomeScrollSection";

import { AboutSection } from "@/components/sections/AboutSection";
import { DestinationSection } from "@/components/sections/DestinationSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ItinerariesSection } from "@/components/sections/ItinerariesSection";

export default function HomePage() {
  return (
    <main className="relative">
      
      <section id="home">
        <HeroSection />
      </section>

      <section id="quickaction">
        <QuickAction />
      </section>

      {/* Spacer matching original layout offset for overlapping quick-action */}
      <div className="bg-[#fdfbf7] pt-[420px] md:pt-[280px]" aria-hidden />

      <section id="destinations">
        <DestinationSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="itineraries">
        <ItinerariesSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>

      <section id="blogs">
        <BlogsSection />
      </section>

      <section id="contact">
        <CtaSection />
      </section>

    </main>
  );
}