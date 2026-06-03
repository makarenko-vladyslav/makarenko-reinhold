"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { LogoMark } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => setLocale(locale === 'no' ? 'en' : 'no');

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-2 font-display font-bold text-xl tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
          <LogoMark className="w-8 h-8 text-accent" />
          Makarenko Reinhold
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['services', 'calculator', 'about', 'faq'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-main' : 'text-white/90'}`}
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLocale}
            className={`text-sm font-bold px-2 py-1 rounded transition-colors ${scrolled ? 'text-text-main hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
          >
            {locale.toUpperCase()}
          </button>
          <a 
            href="#calculator" 
            className="bg-accent hover:bg-accent-light text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5"
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {['services', 'calculator', 'about', 'faq'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-main font-medium py-2 border-b border-gray-50"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4">
                <button onClick={toggleLocale} className="text-text-main font-bold">
                  {locale === 'no' ? 'Switch to English' : 'Bytt til Norsk'}
                </button>
                <a 
                  href="#calculator" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-accent text-white px-6 py-2 rounded-full font-semibold text-sm"
                >
                  {t('nav.cta')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
