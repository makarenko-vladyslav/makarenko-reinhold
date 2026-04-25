"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-light/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-display font-bold text-xl group-hover:bg-accent transition-colors">
            MR
          </div>
          <span className={`font-display font-bold text-lg tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
            Makarenko Reinhold
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-text-muted' : 'text-white/80'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4 border-l border-white/20 pl-4">
            <button 
              onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
              className={`text-sm font-bold uppercase ${scrolled ? 'text-primary' : 'text-white'}`}
            >
              {locale === 'no' ? 'EN' : 'NO'}
            </button>
            
            <a 
              href="https://wa.me/4796684393" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-all hover:scale-105 shadow-[0_0_20px_hsl(185_80%_45%/0.3)]"
            >
              {t('nav.book')}
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-light shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-primary py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-between items-center pt-4">
              <button 
                onClick={() => { setLocale(locale === 'no' ? 'en' : 'no'); setMobileMenuOpen(false); }}
                className="text-primary font-bold"
              >
                {locale === 'no' ? 'Switch to English' : 'Bytt til Norsk'}
              </button>
              <a 
                href="https://wa.me/4796684393" 
                className="px-6 py-3 rounded-full bg-accent text-white font-semibold text-center"
              >
                {t('nav.book')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}