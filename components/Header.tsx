
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
    { name: t('nav.calculator'), href: '#calculator' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 z-50 relative ${scrolled ? 'text-primary' : 'text-white'}`}>
          <svg className="w-8 h-8" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="8" fill="currentColor" className={scrolled ? 'text-accent' : 'text-accent'} />
            <path d="M16 6C16 6 10 12 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 12 16 6 16 6Z" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
            <path d="M16 14C16 14 14 16 14 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="23" cy="10" r="1.5" fill="white"/>
            <circle cx="9" cy="12" r="1" fill="white"/>
          </svg>
          <span className="font-display font-bold text-xl tracking-tight">Makarenko Reinhold</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-main' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-2 ml-4 border-l border-white/20 pl-6">
            <button 
              onClick={() => setLocale('no')} 
              className={`text-xs font-bold ${locale === 'no' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}
            >
              NO
            </button>
            <span className={scrolled ? 'text-gray-300' : 'text-white/30'}>/</span>
            <button 
              onClick={() => setLocale('uk')} 
              className={`text-xs font-bold ${locale === 'uk' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}
            >
              UK
            </button>
          </div>

          <a 
            href="tel:+4796684393"
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              scrolled 
                ? 'bg-primary text-white hover:bg-primary-light shadow-md' 
                : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            +47 966 84 393
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 p-2 ${scrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-primary border-b border-gray-50 pb-4"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 pt-2">
              <button onClick={() => { setLocale('no'); setMobileMenuOpen(false); }} className={`px-4 py-2 rounded-lg text-sm font-bold ${locale === 'no' ? 'bg-accent/10 text-accent' : 'bg-gray-50 text-text-muted'}`}>Norsk</button>
              <button onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }} className={`px-4 py-2 rounded-lg text-sm font-bold ${locale === 'uk' ? 'bg-accent/10 text-accent' : 'bg-gray-50 text-text-muted'}`}>Українська</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
