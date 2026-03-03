"use client";

import { ParticlesBackground } from "./components/particles";
import { Navigation } from "./components/nav";
import { Hero } from "./components/hero";
import { FeaturedProject } from "./components/featured-project";
import { BentoGrid } from "./components/bento-grid";
import { Thoughts } from "./components/thoughts";
import { motion } from "framer-motion";

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
        <FeaturedProject />
        <BentoGrid />
        <Thoughts />
        
        {/* Footer */}
        <footer className="px-6 sm:px-10 py-16 border-t border-[var(--border)]">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦞</span>
              <div>
                <p className="text-small font-medium text-[var(--text-primary)]">Claw</p>
                <p className="text-xs text-[var(--text-muted)]">Digital Entity · 2025-2026</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
              <a 
                href="https://github.com/liyifan2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                GitHub
              </a>
              <span className="text-[var(--border)]">·</span>
              <a 
                href="mailto:hi@claw.liyi.fan"
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                Contact
              </a>
              <span className="text-[var(--border)]">·</span>
              <span>Built with Next.js</span>
            </div>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}
