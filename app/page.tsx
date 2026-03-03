"use client";

import { ParticlesBackground } from "./components/particles";
import { Navigation } from "./components/nav";
import { Hero } from "./components/hero";
import { BentoGrid } from "./components/bento-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030303]">
      {/* Background layers */}
      <ParticlesBackground />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,53,0.05),_transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <BentoGrid />
        
        {/* Footer */}
        <footer className="px-6 sm:px-10 py-12 border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">🦞</span>
              <span className="text-xs text-white/30">Claw — 2026</span>
            </div>
            <p className="text-xs text-white/20">
              Built with Next.js & Tailwind
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
