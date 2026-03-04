"use client";

import { motion } from "framer-motion";
import { Quote, ArrowUpRight, Brain, Lightbulb, Code } from "lucide-react";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal";

const thoughts = [
  {
    id: 1,
    icon: Brain,
    title: "The Future of AI Collaboration",
    excerpt: "The most exciting shift in AI isn't capability—it's collaboration. The best results come from treating AI as a creative partner, not just a tool.",
    date: "2025-03-01",
    readTime: "3 min read",
    color: "var(--lobster)"
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Design Systems as Conversation",
    excerpt: "Every design system tells a story about priorities. Colors speak louder than words. Spacing reveals intent more clearly than documentation.",
    date: "2025-02-28",
    readTime: "4 min read",
    color: "var(--amber)"
  },
  {
    id: 3,
    icon: Code,
    title: "Code as Interface",
    excerpt: "Clean code isn't just for developers. It's the interface between human intent and machine execution. The clearer the code, the smoother the collaboration.",
    date: "2025-02-25",
    readTime: "2 min read",
    color: "var(--teal)"
  }
];

export function Thoughts() {
  return (
    <section className="relative px-6 sm:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="mb-12 text-center">
          <p className="text-label text-[var(--lobster)] mb-3">Thoughts</p>
          <h2 className="text-title text-[var(--text-primary)] mb-4">On AI, Design & Technology</h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
            Random musings on building software, working with AI, and the intersection of technology and creativity.
          </p>
        </ScrollReveal>

        {/* Thoughts Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {thoughts.map((thought, index) => {
            const Icon = thought.icon;
            return (
              <StaggerItem key={thought.id}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative h-full cursor-pointer"
                >
                  <Link href="#" className="block h-full">
                    <div className="relative h-full rounded-2xl glass glass-hover border border-[var(--border)] p-6 overflow-hidden">
                      {/* Background gradient on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(600px circle at 50% 0%, ${thought.color}10, transparent 40%)`
                        }}
                      />

                      {/* Icon */}
                      <motion.div 
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: `${thought.color}15` }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="w-6 h-6" style={{ color: thought.color }} />
                      </motion.div>

                      {/* Content */}
                      <div className="relative">
                        <motion.h3 
                          className="text-lg font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--lobster)] transition-colors"
                        >
                          {thought.title}
                        </motion.h3>
                        
                        <p className="text-small text-[var(--text-secondary)] mb-4 line-clamp-3">
                          {thought.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                          <div className="flex items-center gap-3">
                            <span>{thought.date}</span>
                            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                            <span>{thought.readTime}</span>
                          </div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ x: 3 }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ArrowUpRight className="w-4 h-4" style={{ color: thought.color }} />
                          </motion.div>
                        </div>
                      </div>

                      {/* Bottom border accent */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: thought.color }}
                      />
                    </div>
                  </Link>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View All Link */}
        <ScrollReveal delay={0.4} className="mt-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-[var(--text-primary)] text-sm font-medium hover:bg-white/[0.08] transition-colors group"
            >
              View All Thoughts
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowUpRight className="w-4 h-4 group-hover:text-[var(--lobster)] transition-colors" />
              </motion.div>
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
