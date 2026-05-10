"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { LogoMark, IconMenu, IconClose, IconPhone } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { t, locale, setLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-light/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 group ${scrolled ? 'text-primary' : 'text-white'}`}>
          <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-accent/10 text-accent' : 'bg-white/10 text-white'}`}>
            <LogoMark className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Makarenko<span className={scrolled ? 'text-accent' : 'text-accent-light'}>.</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-main' : 'text-white/90'}`}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button onClick={() => setLocale('no')} className={`text-xs font-bold ${locale === 'no' ? (scrolled ? 'text-accent' : 'text-white') : (scrolled ? 'text-text-muted' : 'text-white/50')}`}>NO</button>
            <span className={scrolled ? 'text-border-dark/20' : 'text-white/20'}>|</span>
            <button onClick={() => setLocale('en')} className={`text-xs font-bold ${locale === 'en' ? (scrolled ? 'text-accent' : 'text-white') : (scrolled ? 'text-text-muted' : 'text-white/50')}`}>EN</button>
          </div>
          <a href="#calculator" className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${scrolled ? 'bg-primary text-white hover:bg-primary-light shadow-lg' : 'bg-white text-primary hover:bg-gray-50'}`}>
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-2 ${scrolled ? 'text-primary' : 'text-white'}`} onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-light shadow-xl border-t border-border-light p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenu(false)} className="text-lg font-medium text-primary border-b border-border-light pb-2">
                {link.name}
              </a>
            ))}
            <div className="flex gap-4">
              <button onClick={() => { setLocale('no'); setMobileMenu(false); }} className={`px-4 py-2 rounded-md ${locale === 'no' ? 'bg-accent/10 text-accent font-bold' : 'text-text-muted'}`}>Norsk</button>
              <button onClick={() => { setLocale('en'); setMobileMenu(false); }} className={`px-4 py-2 rounded-md ${locale === 'en' ? 'bg-accent/10 text-accent font-bold' : 'text-text-muted'}`}>English</button>
            </div>
            <a href="#calculator" onClick={() => setMobileMenu(false)} className="w-full py-4 bg-primary text-white text-center rounded-xl font-bold">
              {t('nav.cta')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
