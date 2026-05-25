"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.calculator'), href: '#calculator' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${scrolled ? 'bg-primary' : 'bg-accent'}`}>
            <svg viewBox="0 0 32 32" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M16 6 L18 12 L24 14 L18 16 L16 22 L14 16 L8 14 L14 12 Z" fill="currentColor" stroke="none" />
              <path d="M22 20 L23 23 L26 24 L23 25 L22 28 L21 25 L18 24 L21 23 Z" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-lg leading-tight tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
              Makarenko
            </span>
            <span className={`font-display font-semibold text-sm leading-tight tracking-widest uppercase transition-colors ${scrolled ? 'text-accent' : 'text-white/80'}`}>
              Reinhold
            </span>
          </div>
        </Link>

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
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button onClick={() => setLocale('no')} className={`text-xs font-bold ${locale === 'no' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}>NO</button>
            <span className={scrolled ? 'text-gray-300' : 'text-white/30'}>|</span>
            <button onClick={() => setLocale('uk')} className={`text-xs font-bold ${locale === 'uk' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}>UK</button>
          </div>
          <a 
            href="#contact"
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:-translate-y-0.5 ${scrolled ? 'bg-primary text-white hover:bg-primary-light hover:shadow-primary/30' : 'bg-white text-primary hover:bg-gray-50 hover:shadow-white/20'}`}
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-main font-medium py-2 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 py-2">
                <button onClick={() => { setLocale('no'); setMobileMenuOpen(false); }} className={`font-bold ${locale === 'no' ? 'text-accent' : 'text-text-muted'}`}>NO</button>
                <button onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }} className={`font-bold ${locale === 'uk' ? 'text-accent' : 'text-text-muted'}`}>UK</button>
              </div>
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-xl font-semibold mt-2"
              >
                {t('nav.cta')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
