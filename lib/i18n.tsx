"use client";
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import content from '@/lib/content.json';

const resolvePath = (path: string, locale: string) => {
  const keys = path.split('.');
  const locales = content.locales as Record<string, any>;
  let val: any = locales[locale];
  
  for (const k of keys) {
    if (val && typeof val === 'object' && k in val) val = val[k];
    else { val = undefined; break; }
  }
  
  if (val !== undefined) return val;
  
  // Fallback
  val = locales[content.defaultLocale];
  for (const k of keys) {
    if (val && typeof val === 'object' && k in val) val = val[k];
    else { val = undefined; break; }
  }
  
  if (val !== undefined) return val;
  
  if (path.endsWith('.items') || path.endsWith('.steps')) return [];
  return path;
};

const LocaleContext = createContext<{ locale: string; setLocale: (l: string) => void; t: (path: string) => any }>({
  locale: content.defaultLocale,
  setLocale: () => {},
  t: (path: string) => resolvePath(path, content.defaultLocale),
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(content.defaultLocale);

  useEffect(() => {
    const stored = localStorage.getItem('locale');
    if (stored && stored !== content.defaultLocale) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((l: string) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') localStorage.setItem('locale', l);
  }, []);

  const t = useCallback((path: string) => resolvePath(path, locale), [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() { return useContext(LocaleContext); }
