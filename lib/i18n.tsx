
"use client";
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import content from '@/lib/content.json';

type ContentType = typeof content.locales.no;

const LocaleContext = createContext<{ 
  locale: string; 
  setLocale: (l: string) => void; 
  t: (path: string) => any;
  availableLocales: string[];
}>({
  locale: content.defaultLocale,
  setLocale: () => {},
  t: () => '',
  availableLocales: Object.keys(content.locales),
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(content.defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved && Object.keys(content.locales).includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((l: string) => {
    setLocaleState(l);
    localStorage.setItem('locale', l);
  }, []);

  const t = useCallback((path: string): any => {
    const keys = path.split('.');
    const locales = content.locales as Record<string, any>;
    
    let val: any = locales[locale];
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k];
      } else {
        val = undefined;
        break;
      }
    }
    
    if (val !== undefined) return val;
    
    // Fallback
    val = locales[content.defaultLocale];
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k];
      } else {
        return path;
      }
    }
    return val ?? path;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, availableLocales: Object.keys(content.locales) }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() { 
  return useContext(LocaleContext); 
}
