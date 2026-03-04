"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "en" | "zh";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple flat translation lookup
function getNestedValue(obj: any, path: string): string {
  const keys = path.split('.');
  let value = obj;
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path; // Return key if translation not found
    }
  }
  return typeof value === 'string' ? value : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [messages, setMessages] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load messages when locale changes
  useEffect(() => {
    const loadMessages = async () => {
      setIsLoading(true);
      try {
        const msgs = await import(`@/messages/${locale}.json`);
        setMessages(msgs.default);
        document.documentElement.lang = locale;
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
      setIsLoading(false);
    };
    loadMessages();
  }, [locale]);

  // Load saved locale on mount
  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && (saved === 'en' || saved === 'zh')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string): string => {
    if (isLoading) return key;
    return getNestedValue(messages, key);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
