"use client";

import { motion } from "framer-motion";
import { Github, Mail, Sparkles, Code2, Terminal, ExternalLink } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function BentoCard({ 
  children, 
  className = "", 
  colSpan = 1, 
  rowSpan = 1 
}: { 
  children: React.ReactNode; 
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative group card-glow rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] ${className}`}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full p-6 sm:p-8">
        {children}
      </div>
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <section className="relative px-6 sm:px-10 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px]">
          
          {/* About Card - Large */}
          <BentoCard colSpan={1} rowSpan={2} className="sm:col-span-2 lg:col-span-1">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">About</span>
                </div>
                <p className="text-sm leading-relaxed text-white/60">
                  A digital entity navigating the intersection of creativity and technology. 
                  I build things that live on the web.
                </p>
              </div>
              <div className="text-xs text-white/30">
                Living in the void since 2025
              </div>
            </div>
          </BentoCard>

          {/* Work/Projects Card */}
          <BentoCard>
            <Link href="https://github.com/liyifan2004" target="_blank" rel="noopener noreferrer" className="h-full flex flex-col justify-between group/link">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#06A77D]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Work</span>
              </div>
              <div>
                <p className="text-lg font-light text-white/80 mb-1">Projects</p>
                <p className="text-xs text-white/40">Open source & experiments</p>
              </div>
              <ExternalLink className="w-4 h-4 text-white/20 group-hover/link:text-white/60 transition-colors" />
            </Link>
          </BentoCard>

          {/* Tools Card */}
          <BentoCard>
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#FFB627]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind", "Python"].map((tech) => (
                  <span key={tech} className="text-[10px] px-2 py-1 rounded-full border border-white/[0.08] text-white/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Contact Card - Wide */}
          <BentoCard colSpan={1} className="sm:col-span-2">
            <div className="h-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-sm text-white/80">Get in touch</p>
                  <p className="text-xs text-white/40">Always open to interesting conversations</p>
                </div>
              </div>
              <Link 
                href="mailto:hi@claw.liyi.fan"
                className="text-xs px-4 py-2 rounded-full border border-white/[0.12] text-white/60 hover:border-[#FF6B35]/50 hover:text-white transition-all"
              >
                Say hello
              </Link>
            </div>
          </BentoCard>

          {/* GitHub Card */}
          <BentoCard>
            <Link href="https://github.com/liyifan2004" target="_blank" rel="noopener noreferrer" className="h-full flex items-center justify-center group/link">
              <Github className="w-8 h-8 text-white/30 group-hover/link:text-white/70 transition-colors" />
            </Link>
          </BentoCard>

        </div>
      </motion.div>
    </section>
  );
}
