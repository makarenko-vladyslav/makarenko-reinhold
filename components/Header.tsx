"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.calculator'), href: '#calculator' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform">
            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M16 6L20 14L28 16L20 18L16 26L12 18L4 16L12 14L16 6Z" fill="currentColor" />
              <circle cx="16" cy="16" r="3" fill="currentColor" />
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
            Makarenko<br/><span className="text-accent text-sm leading-none block">Reinhold</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                scrolled ? 'text-text-main' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex bg-black/10 backdrop-blur-sm rounded-full p-1">
            <button 
              onClick={() => setLocale('no')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${locale === 'no' ? 'bg-white text-primary shadow-sm' : 'text-white hover:text-white/80'}`}
            >
              NO
            </button>
            <button 
              onClick={() => setLocale('uk')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${locale === 'uk' ? 'bg-white text-primary shadow-sm' : 'text-white hover:text-white/80'}`}
            >
              UK
            </button>
          </div>
          <a 
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: scrolled ? 'var(--color-primary)' : 'white' }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
            )}
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
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-primary py-2 border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-2 mt-4">
              <button onClick={() => { setLocale('no'); setMobileMenuOpen(false); }} className={`flex-1 py-2 rounded-lg font-bold ${locale === 'no' ? 'bg-accent text-white' : 'bg-gray-100 text-text-main'}`}>NO</button>
              <button onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }} className={`flex-1 py-2 rounded-lg font-bold ${locale === 'uk' ? 'bg-accent text-white' : 'bg-gray-100 text-text-main'}`}>UK</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
