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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services') as string, href: '#services' },
    { name: t('nav.calculator') as string, href: '#calculator' },
    { name: t('nav.reviews') as string, href: '#reviews' },
    { name: t('nav.faq') as string, href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-display font-bold text-xl shadow-accent group-hover:scale-105 transition-transform">
            M
          </div>
          <div className={`flex flex-col ${scrolled ? 'text-primary' : 'text-white'} transition-colors`}>
            <span className="font-display font-bold text-lg leading-none tracking-tight">Makarenko</span>
            <span className="text-xs font-medium tracking-widest uppercase opacity-80">Reinhold</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-text-main' : 'text-white/90'}`}>
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4 border-l border-white/20 pl-6">
            <button 
              onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
              className={`flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}
            >
              <Globe size={18} weight="duotone" />
              {locale.toUpperCase()}
            </button>
            <a href="tel:+4796684393" className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-accent hover:shadow-none hover:translate-y-0.5">
              <Phone size={18} weight="fill" />
              +47 966 84 393
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-2 ${scrolled ? 'text-primary' : 'text-white'}`} onClick={() => setMobileMenuOpen(true)}>
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
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-text-muted bg-surface-alt rounded-full">
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-xl font-display font-semibold text-primary">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="border-b border-border pb-4">
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <button 
                onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
                className="flex items-center justify-center gap-2 py-4 bg-surface-alt rounded-xl font-medium text-primary"
              >
                <Globe size={20} weight="duotone" />
                Bytt til {locale === 'no' ? 'Engelsk' : 'Norsk'}
              </button>
              <a href="tel:+4796684393" className="flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-xl font-bold text-lg shadow-accent">
                <Phone size={24} weight="fill" />
                Ring Oss Nå
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
