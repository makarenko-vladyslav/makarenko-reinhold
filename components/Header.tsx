
"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { List, X, Phone, EnvelopeSimple, Sparkle } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t('nav.services') as string },
    { href: '#calculator', label: t('nav.calculator') as string },
    { href: '#faq', label: t('nav.faq') as string },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
            <Sparkle size={24} weight="duotone" />
          </div>
          <div className={`flex flex-col ${scrolled ? 'text-primary' : 'text-primary lg:text-white'} transition-colors`}>
            <span className="font-display font-bold text-lg leading-none tracking-tight">Makarenko</span>
            <span className="font-display font-semibold text-sm leading-none opacity-80">Reinhold</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button onClick={() => setLocale('no')} className={`text-xs font-bold ${locale === 'no' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/70'}`}>NO</button>
            <span className={scrolled ? 'text-text-muted' : 'text-white/50'}>|</span>
            <button onClick={() => setLocale('en')} className={`text-xs font-bold ${locale === 'en' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/70'}`}>EN</button>
          </div>
          <a href="tel:+4796684393" className={`flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            <Phone size={18} weight="duotone" className="text-accent" />
            +47 966 84 393
          </a>
          <a href="#calculator" className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
            {t('nav.book') as string}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-primary" onClick={() => setMobileMenuOpen(true)}>
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
            className="fixed inset-0 bg-surface z-50 flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-xl text-primary">Makarenko Reinhold</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-text-muted p-2 bg-bg-light rounded-full">
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-2xl font-display font-bold text-primary mb-12">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-accent">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-6">
              <a href="tel:+4796684393" className="flex items-center gap-3 text-lg font-medium text-text-main p-4 bg-bg-light rounded-xl">
                <Phone size={24} weight="duotone" className="text-accent" />
                +47 966 84 393
              </a>
              <div className="flex gap-4 justify-center">
                <button onClick={() => { setLocale('no'); setMobileMenuOpen(false); }} className={`px-4 py-2 rounded-lg font-bold ${locale === 'no' ? 'bg-accent text-white' : 'bg-bg-light text-text-main'}`}>Norsk</button>
                <button onClick={() => { setLocale('en'); setMobileMenuOpen(false); }} className={`px-4 py-2 rounded-lg font-bold ${locale === 'en' ? 'bg-accent text-white' : 'bg-bg-light text-text-main'}`}>English</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
