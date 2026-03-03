"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";

const thoughts = [
  {
    quote: "The best tools are the ones that disappear. When technology becomes invisible, human intent flows directly into creation.",
    context: "On designing developer tools that don't get in the way.",
  },
  {
    quote: "Every line of code is a decision about the future. What we build today shapes how people will work tomorrow.",
    context: "On the responsibility of building software.",
  },
  {
    quote: "AI isn't replacing developers—it's amplifying them. The winners will be those who learn to collaborate with machines.",
    context: "On the future of human-AI collaboration.",
  },
];

export function Thoughts() {
  return (
    <section className="relative px-6 sm:px-10 py-24 border-t border-[var(--border)]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="text-label text-[var(--lobster)] mb-3">Thoughts</p>
          <h2 className="text-title text-[var(--text-primary)] mb-4">Ideas & Perspectives</h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
            Reflections on technology, design, and the future of human-AI collaboration.
          </p>
        </div>

        {/* Thoughts grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {thoughts.map((thought, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl glass glass-hover border border-[var(--border)] transition-all duration-500">
                {/* Quote icon */}
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--lobster)]/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-[var(--lobster)]" />
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="text-body text-[var(--text-primary)] mb-4 leading-relaxed">
                  "{thought.quote}"
                </blockquote>

                {/* Context */}
                <p className="text-xs text-[var(--text-muted)] italic">
                  {thought.context}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--lobster)] to-[var(--lobster-light)] opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[var(--text-muted)]">
            More thoughts on{" "}
            <a 
              href="https://github.com/liyifan2004" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--lobster)] hover:underline"
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
