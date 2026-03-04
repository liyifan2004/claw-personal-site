"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { ExternalLink, Github, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";
import { useRef } from "react";
import { useLanguage } from "./language-provider";

export function FeaturedProject() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const steps = [
    { num: "01", title: t("featured.querySwitch.problem.title"), desc: t("featured.querySwitch.problem.desc") },
    { num: "02", title: t("featured.querySwitch.approach.title"), desc: t("featured.querySwitch.approach.desc") },
    { num: "03", title: t("featured.querySwitch.result.title"), desc: t("featured.querySwitch.result.desc") },
  ];

  return (
    <section ref={sectionRef} className="relative px-6 sm:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="mb-8">
          <motion.span 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--lobster)]/10 border border-[var(--lobster)]/20 text-xs font-medium text-[var(--lobster)] cursor-default"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-3.5 h-3.5" />
            </motion.div>
            {t("featured.badge")}
          </motion.span>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal direction="left" delay={0.1}>
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative group cursor-pointer"
            >
              <motion.div 
                className="relative aspect-[16/10] rounded-2xl overflow-hidden glass border border-[var(--border)]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(255,140,105,0.1) 50%, transparent 100%)",
                      "linear-gradient(225deg, rgba(255,107,53,0.2) 0%, rgba(255,140,105,0.1) 50%, transparent 100%)",
                      "linear-gradient(315deg, rgba(255,107,53,0.2) 0%, rgba(255,140,105,0.1) 50%, transparent 100%)",
                      "linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(255,140,105,0.1) 50%, transparent 100%)",
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C69] flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
                      <svg className="w-10 h-10 text-black relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </motion.div>
                    <motion.p 
                      className="text-lg font-semibold text-[var(--text-primary)]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.3 }}
                    >
                      QuerySwitch
                    </motion.p>
                    <motion.p 
                      className="text-sm text-[var(--text-muted)]"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Browser Extension
                    </motion.p>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10"
                  animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-xs text-[var(--text-secondary)]">Google → DuckDuckGo</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10"
                  animate={{ y: [0, 5, 0], x: [0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-[var(--teal)]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs text-[var(--text-secondary)]">Active</span>
                </motion.div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)",
                    transform: "translateX(-100%)",
                    animation: "shine 2s ease-in-out",
                  }}
                />
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div>
                <motion.h3 
                  className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  QuerySwitch
                </motion.h3>
                <p className="text-[var(--text-muted)]">
                  {t("featured.querySwitch.subtitle")}
                </p>
              </div>

              <div className="space-y-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 group cursor-default"
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-[var(--lobster)]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--lobster)]/20 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <span className="text-xs text-[var(--lobster)]">{step.num}</span>
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">{step.title}</p>
                      <p className="text-sm text-[var(--text-muted)]">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                {t("featured.querySwitch.tech")?.split(",").map((tech, i) => (
                  <motion.span 
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/[0.05] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--lobster)]/30 cursor-default"
                  >
                    {tech.trim()}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div 
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="https://github.com/liyifan2004/QuerySwitch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--lobster)] text-black text-sm font-medium hover:shadow-[0_0_30px_rgba(255,107,53,0.4)] transition-shadow"
                  >
                    {t("featured.querySwitch.buttons.source")}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-[var(--text-primary)] text-sm font-medium hover:bg-white/[0.08] transition-colors group"
                  >
                    {t("featured.querySwitch.buttons.demo")}
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink className="w-4 h-4 group-hover:text-[var(--lobster)] transition-colors" />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
