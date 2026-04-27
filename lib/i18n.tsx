"use client";
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import content from '@/lib/content.json';

const LocaleContext = createContext<{ locale: string; setLocale: (l: string) => void; t: (path: string) => unknown }>({
  locale: content.defaultLocale,
  setLocale: () => {},
  t: () => '',
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(content.defaultLocale);

  useEffect(() => {
    const stored = localStorage.getItem('locale');
    if (stored) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = useCallback((l: string) => {
    setLocaleState(l);
    localStorage.setItem('locale', l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback((path: string): unknown => {
    const keys = path.split('.');
    const locales = content.locales as Record<string, Record<string, unknown>>;
    let val: unknown = locales[locale];
    
    for (const k of keys) {
      if (val && typeof val === 'object' && k in (val as Record<string, unknown>)) {
        val = (val as Record<string, unknown>)[k];
      } else { 
        val = undefined; 
        break; 
      }
    }
    
    if (val !== undefined) return val;
    
    // Fallback to defaultLocale
    val = locales[content.defaultLocale];
    for (const k of keys) {
      if (val && typeof val === 'object' && k in (val as Record<string, unknown>)) {
        val = (val as Record<string, unknown>)[k];
      } else { 
        val = undefined; 
        break; 
      }
    }
    return val ?? path;
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() { return useContext(LocaleContext); }
