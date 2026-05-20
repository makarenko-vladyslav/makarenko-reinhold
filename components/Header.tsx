"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["hsl(220 40% 15% / 0)", "hsl(0 0% 100% / 0.95)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 4px 20px hsl(220 40% 15% / 0.05)"]
  );

  const textColor = isScrolled ? "text-primary" : "text-white";
  const logoColor = isScrolled ? "text-primary" : "text-white";

  return (
    <motion.header
      style={{ background: headerBg, boxShadow: headerShadow, backdropFilter: isScrolled ? "blur(12px)" : "none" }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 ${logoColor} transition-colors`}>
          <svg viewBox="0 0 32 32" className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8L24 14V22C24 23.1046 23.1046 24 22 24H10C8.89543 24 8 23.1046 8 22V14L16 8Z" />
            <path d="M16 14V24" />
            <circle cx="16" cy="14" r="2" fill="currentColor" stroke="none" />
            <path d="M20 10L22 8M12 10L10 8" />
          </svg>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
            Makarenko Reinhold
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className={`text-sm font-medium ${textColor} hover:text-accent transition-colors`}>{t('nav.services')}</a>
          <a href="#calculator" className={`text-sm font-medium ${textColor} hover:text-accent transition-colors`}>{t('nav.calculator')}</a>
          <a href="#faq" className={`text-sm font-medium ${textColor} hover:text-accent transition-colors`}>{t('nav.faq')}</a>
          <a href="#contact" className={`text-sm font-medium ${textColor} hover:text-accent transition-colors`}>{t('nav.contact')}</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex bg-primary/10 rounded-full p-1 border border-primary/5">
            <button 
              onClick={() => setLocale('no')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${locale === 'no' ? 'bg-white text-primary shadow-sm' : `${textColor} opacity-60 hover:opacity-100`}`}
            >
              NO
            </button>
            <button 
              onClick={() => setLocale('uk')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${locale === 'uk' ? 'bg-white text-primary shadow-sm' : `${textColor} opacity-60 hover:opacity-100`}`}
            >
              UK
            </button>
          </div>
          <a 
            href="#calculator" 
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-accent hover:bg-accent-light text-white text-sm font-bold rounded-full transition-all shadow-[0_4px_14px_hsl(185_75%_35%/0.4)] hover:shadow-[0_6px_20px_hsl(185_75%_35%/0.6)] hover:-translate-y-0.5"
          >
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
