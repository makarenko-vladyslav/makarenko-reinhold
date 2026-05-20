"use client";
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import content from '@/lib/content.json';

type LocaleContextType = {
  locale: string;
  setLocale: (l: string) => void;
  t: (path: string) => any;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: content.defaultLocale,
  setLocale: () => {},
  t: () => '',
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<string>(content.defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('locale');
    if (saved && Object.keys(content.locales).includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((l: string) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', l);
    }
  }, []);

  const t = useCallback((path: string): any => {
    const keys = path.split('.');
    const locales = content.locales as Record<string, any>;
    
    // Try current locale
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
    
    // Fallback to default locale
    val = locales[content.defaultLocale];
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k];
      } else {
        val = undefined;
        break;
      }
    }
    
    return val ?? path;
  }, [locale]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
