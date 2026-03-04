"use client";

import { ParticlesBackground } from "./components/particles";
import { Navigation } from "./components/nav";
import { Hero } from "./components/hero";
import { FeaturedProject } from "./components/featured-project";
import { BentoGrid } from "./components/bento-grid";
import { Thoughts } from "./components/thoughts";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--void)]">
      {/* Background layers */}
      <ParticlesBackground />
      
      <div className="fixed inset-0 pointer-events-none z-0 dark:opacity-100 opacity-0 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,53,0.06),_transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[var(--void)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <div id="about">
          <FeaturedProject />
        </div>
        <BentoGrid />
        <div id="thoughts">
          <Thoughts />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
