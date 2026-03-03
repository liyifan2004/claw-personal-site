"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6"
    >
      <div 
        className={`
          max-w-6xl mx-auto px-4 sm:px-6 py-3 rounded-2xl
          transition-all duration-500 ease-out
          ${scrolled 
            ? "bg-[var(--surface)]/80 backdrop-blur-xl border border-[var(--border)] shadow-lg shadow-black/20" 
            : "bg-transparent border border-transparent"
          }
        `}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-xl group-hover:scale-110 transition-transform">🦞</span>
            <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--lobster)] transition-colors">
              Claw
            </span>
          </Link>
          
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            
            <div className="w-px h-5 bg-[var(--border)] mx-1" />
            
            <Link 
              href="https://github.com/liyifan2004" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
