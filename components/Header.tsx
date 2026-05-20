"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { t, locale, setLocale } = useLocale();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.calculator'), href: '#calculator' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'bg-accent text-white' : 'bg-white text-accent'}`}>
            <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 6L6 14v10a2 2 0 002 2h16a2 2 0 002-2V14L16 6z" />
              <path d="M12 26v-8h8v8" />
              <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
              <path d="M19 9l2-2M13 9l-2-2M16 5V3" strokeWidth="1.5" />
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            Makarenko Reinhold
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-muted' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-black/10 rounded-full p-1 backdrop-blur-sm">
            <button 
              onClick={() => setLocale('no')}
              className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${locale === 'no' ? 'bg-white text-primary shadow-sm' : 'text-white hover:bg-white/20'}`}
            >
              NO
            </button>
            <button 
              onClick={() => setLocale('uk')}
              className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${locale === 'uk' ? 'bg-white text-primary shadow-sm' : 'text-white hover:bg-white/20'}`}
            >
              UK
            </button>
          </div>
          <a 
            href="#calculator"
            className={`hidden md:inline-flex px-6 py-2.5 rounded-full text-sm font-bold transition-all ${scrolled ? 'bg-primary text-white hover:bg-primary-light' : 'bg-white text-primary hover:bg-slate-100'}`}
          >
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
