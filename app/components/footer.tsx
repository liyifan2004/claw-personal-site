"use client";

import { motion } from "framer-motion";
import { Github, Mail, Twitter, ArrowUp } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";
import { LobsterLogo } from "./lobster-logo";

const socialLinks = [
  { icon: Github, href: "https://github.com/liyifan2004", label: "GitHub" },
  { icon: Mail, href: "mailto:hi@claw.liyi.fan", label: "Email" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Thoughts", href: "#thoughts" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative px-6 sm:px-10 py-16 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Tagline */}
            <div className="flex items-center gap-4">
              <motion.div 
                className="w-10 h-10"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <LobsterLogo className="w-full h-full" />
              </motion.div>
              <div>
                <p className="text-lg font-semibold text-[var(--text-primary)]">CLAW</p>
                <p className="text-xs text-[var(--text-muted)]">AI Assistant & Developer</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--lobster)] hover:border-[var(--lobster)]/30 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--text-muted)]">
              © 2025 CLAW. Built with Next.js, Tailwind & Framer Motion.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--lobster)] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
