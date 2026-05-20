"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { Phone, List, X, Globe } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: t('nav.services'), href: '#tjenester' },
    { name: t('nav.calculator'), href: '#kalkulator' },
    { name: t('nav.guarantee'), href: '#garanti' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white shadow-premium group-hover:bg-accent-hover transition-colors">
            <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 100 L120 200 V400 H392 V200 Z" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" />
              <path d="M256 240 C220 240 190 270 190 310 C190 360 256 420 256 420 C256 420 322 360 322 310 C322 270 292 240 256 240 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-lg leading-none ${scrolled ? 'text-primary' : 'text-white'}`}>Makarenko</span>
            <span className={`font-display font-semibold text-sm leading-none tracking-widest uppercase ${scrolled ? 'text-text-muted' : 'text-white/80'}`}>Reinhold</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-sm hover:text-accent transition-colors ${scrolled ? 'text-text-main' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
            className={`flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}
          >
            <Globe size={18} weight="duotone" />
            {locale.toUpperCase()}
          </button>
          
          <a href="tel:+4796684393" className={`flex items-center gap-2 font-semibold ${scrolled ? 'text-primary' : 'text-white'}`}>
            <Phone size={20} weight="duotone" className="text-accent" />
            +47 966 84 393
          </a>
          
          <a href="#kalkulator" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-md font-semibold transition-all shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5">
            {t('nav.book')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <List size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-xl text-primary">Meny</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-text-muted hover:text-primary">
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-xl font-display font-semibold text-primary">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="border-b border-bg-muted pb-4">
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <button 
                onClick={() => { setLocale(locale === 'no' ? 'en' : 'no'); setMobileMenuOpen(false); }}
                className="flex items-center gap-2 text-lg font-medium text-text-main py-4 border-b border-bg-muted"
              >
                <Globe size={24} weight="duotone" className="text-accent" />
                Bytt til {locale === 'no' ? 'Engelsk' : 'Norsk'}
              </button>
              <a href="tel:+4796684393" className="flex items-center gap-2 text-lg font-bold text-primary py-4">
                <Phone size={24} weight="duotone" className="text-accent" />
                +47 966 84 393
              </a>
              <a href="#kalkulator" onClick={() => setMobileMenuOpen(false)} className="bg-accent text-white text-center py-4 rounded-md font-bold text-lg shadow-premium">
                {t('nav.book')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
