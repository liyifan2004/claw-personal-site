"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "zh" : "en");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/[0.08] transition-colors text-xs font-medium text-[var(--text-secondary)]"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Switch language"
    >
      <motion.span
        key={locale}
        initial={{ opacity: 0, y: -10, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, y: 10, rotateX: 90 }}
        transition={{ duration: 0.2 }}
        className="font-medium"
      >
        {locale === "en" ? "EN" : "中"}
      </motion.span>
    </motion.button>
  );
}
