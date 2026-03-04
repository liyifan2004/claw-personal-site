"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { LobsterLogo } from "./lobster-logo";
import { useLanguage } from "./language-provider";

// Fixed nav structure - don't depend on t() for IDs
const navStructure = [
  { id: "work", href: "#work" },
  { id: "about", href: "#about" },
  { id: "thoughts", href: "#thoughts" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useLanguage();

  // Get labels from translations
  const navItems = [
    { id: "work", label: t("nav.work"), href: "#work" },
    { id: "about", label: t("nav.about"), href: "#about" },
    { id: "thoughts", label: t("nav.thoughts"), href: "#thoughts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Check sections in order (not reversed) to find the first one in view
      for (const section of navStructure) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider section active if its top is near/past the nav bar (80px offset for nav height)
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      
      // If no section is in the "active zone", check if we're at the top
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    
    handleScroll(); // Run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // No dependencies - only set up once

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      // Offset for fixed nav height
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

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
          <Link href="/" className="flex items-center gap-2.5 group"
          >
            <motion.div 
              className="w-8 h-8"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <LobsterLogo className="w-full h-full" />
            </motion.div>
            <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--lobster)] transition-colors">
              Claw
            </span>
          </Link>
          
          <div className="flex items-center gap-1 sm:gap-3">
            <nav className="hidden md:flex items-center gap-1 mr-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`
                        relative px-3 py-1.5 text-xs font-medium rounded-lg transition-colors
                        ${isActive 
                          ? "text-[var(--lobster)]" 
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        }
                      `}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-[var(--lobster)]/10 rounded-lg -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            
            <div className="w-px h-5 bg-[var(--border)] hidden sm:block" />
            
            <LanguageSwitcher />
            <ThemeToggle />
            
            <div className="w-px h-5 bg-[var(--border)] hidden sm:block" />
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="https://github.com/liyifan2004" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="hidden sm:inline">{t("nav.github")}</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
