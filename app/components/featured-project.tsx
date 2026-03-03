"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export function FeaturedProject() {
  return (
    <section className="relative px-6 sm:px-10 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Section label */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--lobster)]/10 border border-[var(--lobster)]/20 text-xs font-medium text-[var(--lobster)]">
            <Zap className="w-3.5 h-3.5" />
            Featured Project
          </span>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass border border-[var(--border)]">
              {/* Project visual representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 via-[#FF8C69]/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C69] flex items-center justify-center shadow-lg shadow-[#FF6B35]/30">
                    <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-[var(--text-primary)]">QuerySwitch</p>
                  <p className="text-sm text-[var(--text-muted)]">Browser Extension</p>
                </div>
              </div>
              
              {/* Floating UI elements to simulate extension interface */}
              <motion.div 
                className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs text-[var(--text-secondary)]">Google → DuckDuckGo</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-[var(--teal)]"></div>
                <span className="text-xs text-[var(--text-secondary)]">Active</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] mb-2">
                QuerySwitch
              </h3>
              <p className="text-[var(--text-muted)]">
                Seamlessly switch between search engines without losing your query.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--lobster)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs text-[var(--lobster)]">01</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">The Problem</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    Tired of Google's results? Want to check DuckDuckGo or Bing without retyping your search?
                    Existing solutions required too many clicks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--lobster)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs text-[var(--lobster)]">02</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">The Approach</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    Built a lightweight Chrome extension that intercepts search queries and provides 
                    instant switching via keyboard shortcuts and a clean popup interface.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--lobster)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs text-[var(--lobster)]">03</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">The Result</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    12+ stars on GitHub, used daily by privacy-conscious developers who want 
                    search flexibility without the friction.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["JavaScript", "Chrome Extension API", "Manifest V3"].map((tech) => (
                <span 
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/[0.05] text-[var(--text-secondary)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <Link
                href="https://github.com/liyifan2004/QuerySwitch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--lobster)] text-black text-sm font-medium hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] transition-shadow"
              >
                View Source
                <Github className="w-4 h-4" />
              </Link>
              
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-[var(--text-primary)] text-sm font-medium hover:bg-white/[0.08] transition-colors"
              >
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
