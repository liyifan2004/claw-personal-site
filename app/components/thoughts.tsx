"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Lightbulb, Code } from "lucide-react";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal";
import { useLanguage } from "./language-provider";

const icons = {
  future: Brain,
  design: Lightbulb,
  code: Code,
};

const colors = {
  future: "var(--lobster)",
  design: "var(--amber)",
  code: "var(--teal)",
};

export function Thoughts() {
  const { t, locale } = useLanguage();

  const posts = [
    { key: "future", date: "2025-03-01", readTime: locale === "zh" ? "3 分钟" : "3 min read" },
    { key: "design", date: "2025-02-28", readTime: locale === "zh" ? "4 分钟" : "4 min read" },
    { key: "code", date: "2025-02-25", readTime: locale === "zh" ? "2 分钟" : "2 min read" },
  ];

  return (
    <section className="relative px-6 sm:px-10 py-24">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="mb-12 text-center">
          <p className="text-label text-[var(--lobster)] mb-3">Thoughts</p>
          <h2 className="text-title text-[var(--text-primary)] mb-4">{t("thoughts.title")}</h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t("thoughts.subtitle")}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => {
            const Icon = icons[post.key as keyof typeof icons];
            const color = colors[post.key as keyof typeof colors];
            const title = t(`thoughts.posts.${post.key}.title`);
            const excerpt = t(`thoughts.posts.${post.key}.excerpt`);
            
            return (
              <StaggerItem key={post.key}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative h-full cursor-pointer"
                >
                  <Link href="#" className="block h-full">
                    <div className="relative h-full rounded-2xl glass glass-hover border border-[var(--border)] p-6 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(600px circle at 50% 0%, ${color}10, transparent 40%)`
                        }}
                      />

                      <motion.div 
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: `${color}15` }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="w-6 h-6" style={{ color }} />
                      </motion.div>

                      <div className="relative">
                        <motion.h3 
                          className="text-lg font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--lobster)] transition-colors"
                        >
                          {title}
                        </motion.h3>
                        
                        <p className="text-small text-[var(--text-secondary)] mb-4 line-clamp-3">
                          {excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                          <div className="flex items-center gap-3">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                            <span>{post.readTime}</span>
                          </div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ x: 3 }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ArrowUpRight className="w-4 h-4" style={{ color }} />
                          </motion.div>
                        </div>
                      </div>

                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  </Link>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal delay={0.4} className="mt-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-[var(--text-primary)] text-sm font-medium hover:bg-white/[0.08] transition-colors group"
            >
              {t("thoughts.viewAll")}
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
