"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { List, X, Phone, Globe } from '@phosphor-icons/react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => setLocale(locale === 'no' ? 'en' : 'no');

  const navLinks = [
    { name: t('nav.services') as string, href: '#services' },
    { name: t('nav.calculator') as string, href: '#calculator' },
    { name: t('nav.faq') as string, href: '#faq' },
    { name: t('nav.contact') as string, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-light/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.svg.org/2000/svg">
              <path d="M12 4.5C12 4.5 7.5 9 7.5 13.5C7.5 15.9853 9.51472 18 12 18C14.4853 18 16.5 15.9853 16.5 13.5C16.5 9 12 4.5 12 4.5Z" fill="currentColor" />
              <path d="M14 9.5L11 12.5L9.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-lg leading-none ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>Makarenko</span>
            <span className={`text-xs tracking-widest uppercase font-semibold ${scrolled ? 'text-accent' : 'text-accent md:text-accent'}`}>Reinhold</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-text-main' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleLocale} className={`flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}>
            <Globe size={18} weight="duotone" />
            {locale.toUpperCase()}
          </button>
          <a href="tel:+4796684393" className={`flex items-center gap-2 text-sm font-bold hover:text-accent transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            <Phone size={18} weight="duotone" />
            +47 966 84 393
          </a>
          <a href="#calculator" className="bg-accent text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent-hover transition-colors shadow-lg shadow-accent/30">
            {t('nav.cta') as string}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${scrolled ? 'text-primary' : 'text-primary'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-light shadow-xl border-t border-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-primary py-2 border-b border-border/50"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4">
              <button onClick={toggleLocale} className="flex items-center gap-2 text-text-main font-medium">
                <Globe size={20} weight="duotone" />
                {locale === 'no' ? 'English' : 'Norsk'}
              </button>
              <a href="tel:+4796684393" className="flex items-center gap-2 text-primary font-bold">
                <Phone size={20} weight="duotone" />
                Ring Oss
              </a>
            </div>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="w-full bg-accent text-white text-center py-3 rounded-lg font-bold mt-2">
              {t('nav.cta') as string}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}