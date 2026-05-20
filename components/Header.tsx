"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#calculator', label: t('nav.calculator') },
    { href: '#about', label: t('nav.about') },
    { href: '#faq', label: t('nav.faq') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 z-50 relative ${scrolled ? 'text-primary' : 'text-white'}`}>
          <svg className="w-8 h-8 text-accent" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <path d="M16 6L26 12V22L16 28L6 22V12L16 6Z" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M16 12V22M11 15L16 18L21 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-display font-bold text-xl tracking-tight">Makarenko <span className="font-normal opacity-80">Reinhold</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-main' : 'text-white/90'}`}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
            className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-accent ${scrolled ? 'text-text-main' : 'text-white'}`}
          >
            {locale === 'no' ? 'EN' : 'NO'}
          </button>
          <a href="#contact" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 relative p-2 ${mobileMenuOpen ? 'text-primary' : (scrolled ? 'text-primary' : 'text-white')}`}
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
            className="absolute top-0 left-0 right-0 bg-white shadow-xl pt-24 pb-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-primary border-b border-gray-100 pb-4"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between mt-4">
              <button 
                onClick={() => { setLocale(locale === 'no' ? 'en' : 'no'); setMobileMenuOpen(false); }}
                className="text-primary font-bold uppercase tracking-wider"
              >
                Switch to {locale === 'no' ? 'English' : 'Norsk'}
              </button>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-accent text-white px-6 py-3 rounded-full font-medium text-center">
                {t('nav.cta')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
