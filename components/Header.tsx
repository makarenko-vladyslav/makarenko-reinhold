"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.calculator"), href: "#calculator" },
    { name: t("nav.faq"), href: "#faq" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const Logo = () => (
    <div className="flex items-center gap-2">
      <svg className="w-8 h-8 text-accent" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
        <path d="M16 6C16 6 10 12 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 12 16 6 16 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M22 10L25 7M7 7L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
        Makarenko <span className="text-accent">Reinhold</span>
      </span>
    </div>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="relative z-50">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
          
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/20">
            <button 
              onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
              className={`text-sm font-bold uppercase ${scrolled ? 'text-primary' : 'text-white'}`}
            >
              {locale === 'no' ? 'EN' : 'NO'}
            </button>
            <a 
              href="#calculator"
              className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent-light transition-colors shadow-lg shadow-accent/20"
            >
              {t("nav.cta")}
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className={`w-6 h-6 ${scrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
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
            className="absolute top-0 left-0 right-0 bg-white shadow-2xl pt-24 pb-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-display font-semibold text-primary border-b border-gray-100 pb-4"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between mt-4">
              <button 
                onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
                className="text-lg font-bold text-primary bg-gray-100 px-4 py-2 rounded-lg"
              >
                {locale === 'no' ? 'English' : 'Norsk'}
              </button>
              <a 
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-white px-8 py-3 rounded-full font-bold text-center"
              >
                {t("nav.cta")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
