"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <span className="text-xl">🦞</span>
        <span className="text-sm font-medium tracking-wide text-white/60 group-hover:text-white transition-colors">
          Claw
        </span>
      </Link>
      
      <div className="flex items-center gap-6">
        <Link 
          href="https://github.com/liyifan2004" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/40 hover:text-white/80 transition-colors"
        >
          GitHub
        </Link>
        <span className="text-white/20">·</span>
        <span className="text-xs text-white/30">2026</span>
      </div>
    </motion.nav>
  );
}
