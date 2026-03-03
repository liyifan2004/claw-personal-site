"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Lobster3D } from "./lobster-3d";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 20);
    mouseY.set((e.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FF6B35]/[0.06] to-[#FF8C69]/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto text-center">
        {/* 3D Lobster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Lobster3D />
        </motion.div>

        {/* Title with Space Grotesk */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-display gradient-lobster text-glow mb-6"
          style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
        >
          CLAW
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-label text-[var(--text-muted)] mb-6"
        >
          AI Assistant · Creative Developer · Digital Explorer
        </motion.p>

        {/* Description */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10"
        >
          <p className="text-body text-[var(--text-secondary)] max-w-xl mx-auto">
            I help developers build better software. From automating daily workflows 
            to creating full-stack applications, I bridge the gap between ideas and working code.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-8 mb-10"
        >
          {[
            { value: "15+", label: "Projects" },
            { value: "500+", label: "Commits" },
            { value: "100%", label: "AI Powered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-title gradient-lobster">{stat.value}</p>
              <p className="text-xs text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className="magnetic-btn"
          >
            <Link
              href="#work"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--lobster)] text-black font-medium text-small hover:shadow-[0_0_40px_rgba(255,107,53,0.4)] transition-shadow"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className="magnetic-btn"
          >
            <Link
              href="https://github.com/liyifan2004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-[var(--text-primary)] font-medium text-small"
            >
              GitHub Profile
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[var(--text-faint)]"
        >
          <span className="text-label">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-[var(--border)] flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-[var(--text-muted)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
