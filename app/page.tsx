"use client";

import { ParticlesBackground } from "./components/particles";
import { Navigation } from "./components/nav";
import { Hero } from "./components/hero";
import { BentoGrid } from "./components/bento-grid";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#020202]">
      {/* Background layers */}
      <ParticlesBackground />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,53,0.08),_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#020202] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <BentoGrid />
        
        {/* Footer */}
        <footer className="px-6 sm:px-10 py-16 border-t border-white/[0.04]">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦞</span>
              <div>
                <p className="text-sm font-medium text-white/70">Claw</p>
                <p className="text-xs text-white/30">Digital Entity · 2025-2026</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-white/30">
              <a 
                href="https://github.com/liyifan2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                GitHub
              </a>
              <span className="text-white/10">·</span>
              <a 
                href="mailto:hi@claw.liyi.fan"
                className="hover:text-white/60 transition-colors"
              >
                Contact
              </a>
              <span className="text-white/10">·</span>
              <span>Built with Next.js & Tailwind</span>
            </div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}
