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
    <main className="relative overflow-x-hidden">

      {/* HERO */}
      <section
        id="home"
        className="overflow-x-hidden"
      >
        <HeroSection />
      </section>

      {/* QUICK ACTION */}
      <section
        id="quickaction"
        className="overflow-x-hidden"
      >
        <QuickAction />
      </section>

      {/* SPACER */}
      <div
        className="overflow-x-hidden bg-[#fdfbf7] pt-[420px] md:pt-[280px]"
        aria-hidden
      />

      {/* DESTINATIONS */}
      <section
        id="destinations"
        className="overflow-x-hidden"
      >
        <DestinationSection />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="overflow-x-hidden"
      >
        <AboutSection />
      </section>

      {/* ITINERARIES */}
      <section
        id="itineraries"
        className="overflow-x-hidden"
      >
        <ItinerariesSection />
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="overflow-x-hidden"
      >
        <FeaturesSection />
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="overflow-x-hidden"
      >
        <GallerySection />
      </section>

      {/* BLOGS */}
      <section
        id="blogs"
        className="overflow-x-hidden"
      >
        <BlogsSection />
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="overflow-x-hidden"
      >
        <CtaSection />
      </section>

    </main>
  );
}