"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function LanguageSwitcher() {
  const [lang, setLang] = useState<"en" | "zh">("en");

  return (
    <motion.button
      onClick={() => setLang(lang === "en" ? "zh" : "en")}
      className="relative w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/[0.08] transition-colors text-xs font-medium text-[var(--text-secondary)]"
      whileTap={{ scale: 0.95 }}
      aria-label="Switch language"
    >
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        {lang === "en" ? "EN" : "中"}
      </motion.span>
    </motion.button>
  );
}
