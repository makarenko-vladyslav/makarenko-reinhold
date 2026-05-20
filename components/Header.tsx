"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.calculator'), href: '#calculator' },
    { name: t('nav.about'), href: '#trust' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-2 z-50 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
          <svg className="w-8 h-8 text-accent" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6L24 12V22C24 23.1046 23.1046 24 22 24H10C8.89543 24 8 23.1046 8 22V12L16 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
            <path d="M16 14L20 18L18 20L16 18L14 20L12 18L16 14Z" fill="currentColor"/>
          </svg>
          <span className="font-display font-bold text-xl tracking-tight">Makarenko</span>
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
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
            className={`text-sm font-bold uppercase w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled ? 'bg-bg-light text-primary hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {locale}
          </button>
          <a 
            href="#calculator"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 p-2 ${scrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className="absolute top-0 left-0 right-0 bg-white shadow-2xl pt-20 pb-8 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-display font-bold text-primary border-b border-gray-100 pb-4"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4">
              <button 
                onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
                className="font-bold uppercase text-text-muted"
              >
                Lang: {locale === 'no' ? 'English' : 'Norsk'}
              </button>
              <a 
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-white px-6 py-3 rounded-full font-medium text-center"
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
