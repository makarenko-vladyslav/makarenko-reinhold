"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { MenuIcon, CloseIcon, PhoneIcon, LogoMark } from './Icons';

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
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  const toggleLocale = () => setLocale(locale === 'no' ? 'uk' : 'no');

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className={`flex items-center gap-2 group ${scrolled ? 'text-primary' : 'text-white'}`}>
          <div className={`p-1.5 rounded-lg transition-colors ${scrolled ? 'bg-accent/10 text-accent' : 'bg-white/10 text-white group-hover:bg-white/20'}`}>
            <LogoMark className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Makarenko Reinhold</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
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

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={toggleLocale}
            className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded transition-colors ${scrolled ? 'text-text-muted hover:bg-gray-100' : 'text-white/80 hover:bg-white/10'}`}
          >
            {locale === 'no' ? 'UK' : 'NO'}
          </button>
          <a 
            href="tel:+4796684393" 
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-white/80'}`}
          >
            <PhoneIcon className="w-4 h-4" />
            +47 966 84 393
          </a>
          <a 
            href="#pricing"
            className="bg-accent hover:bg-accent-light text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_4px_14px_0_hsl(185_80%_40%/0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:-translate-y-0.5"
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-gray-100 w-full" />
              <div className="flex items-center justify-between">
                <a href="tel:+4796684393" className="flex items-center gap-2 text-primary font-medium">
                  <PhoneIcon className="w-5 h-5 text-accent" />
                  +47 966 84 393
                </a>
                <button onClick={toggleLocale} className="text-sm font-bold bg-gray-100 px-3 py-1 rounded">
                  {locale === 'no' ? 'UK' : 'NO'}
                </button>
              </div>
              <a 
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-3 rounded-xl font-semibold"
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