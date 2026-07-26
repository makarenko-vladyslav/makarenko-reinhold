"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import content from "@/lib/content.json";

interface I18nContextType {
  locale: string;
  setLocale: (l: string) => void;
  t: (path: string) => unknown;
}

const LocaleContext = createContext<I18nContextType>({
  locale: content.defaultLocale,
  setLocale: () => {},
  t: () => "",
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("locale") || content.defaultLocale;
    }
    return content.defaultLocale;
  });

  const setLocale = useCallback((l: string) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", l);
    }
  }, []);

  const t = useCallback((path: string): unknown => {
    const keys = path.split(".");
    const locales = content.locales as Record<string, Record<string, unknown>>;
    let val: unknown = locales[locale];
    
    for (const k of keys) {
      if (val && typeof val === "object" && k in (val as Record<string, unknown>)) {
        val = (val as Record<string, unknown>)[k];
      } else {
        val = undefined;
        break;
      }
    }
    
    if (val !== undefined) return val;
    
    // Fallback
    val = locales[content.defaultLocale];
    for (const k of keys) {
      if (val && typeof val === "object" && k in (val as Record<string, unknown>)) {
        val = (val as Record<string, unknown>)[k];
      } else {
        val = undefined;
        break;
      }
    }
    return val ?? path;
  }, [locale]);

  return (
    <LocaleContext value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
