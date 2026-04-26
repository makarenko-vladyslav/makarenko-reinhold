
"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white font-display font-bold text-xl group-hover:bg-primary transition-colors">
            MR
          </div>
          <div className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            Makarenko <span className="font-light">Reinhold</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-text-main' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-2">
            <button onClick={() => setLocale('no')} className={`text-xs font-bold px-2 py-1 rounded transition-colors ${locale === 'no' ? 'bg-accent text-white' : scrolled ? 'text-text-muted hover:bg-surface-alt' : 'text-white/70 hover:bg-white/10'}`}>NO</button>
            <button onClick={() => setLocale('uk')} className={`text-xs font-bold px-2 py-1 rounded transition-colors ${locale === 'uk' ? 'bg-accent text-white' : scrolled ? 'text-text-muted hover:bg-surface-alt' : 'text-white/70 hover:bg-white/10'}`}>UK</button>
          </div>
          <a 
            href="#contact" 
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-[0_0_20px_hsl(185_75%_40%_/_0.3)] hover:shadow-[0_0_25px_hsl(185_75%_40%_/_0.5)] hover:-translate-y-0.5"
          >
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={scrolled ? 'var(--color-primary)' : 'white'} strokeWidth="2" strokeLinecap="round">
            <path d={mobileMenuOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
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
            className="absolute top-full left-0 right-0 bg-surface shadow-xl border-t border-border p-6 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-text-main py-2 border-b border-border/50"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <button onClick={() => { setLocale('no'); setMobileMenuOpen(false); }} className={`px-4 py-2 rounded-lg font-bold ${locale === 'no' ? 'bg-accent text-white' : 'bg-surface-alt text-text-main'}`}>NO</button>
              <button onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }} className={`px-4 py-2 rounded-lg font-bold ${locale === 'uk' ? 'bg-accent text-white' : 'bg-surface-alt text-text-main'}`}>UK</button>
            </div>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-primary text-white text-center py-4 rounded-xl font-bold"
            >
              {t('nav.contact')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
