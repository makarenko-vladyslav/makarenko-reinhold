
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.calculator"), href: "#calculator" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.faq"), href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${scrolled ? "bg-primary text-white" : "bg-white text-primary"}`}>
            <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M16 6C16 6 11 14 11 18C11 20.7614 13.2386 23 16 23C18.7614 23 21 20.7614 21 18C21 14 16 6 16 6Z" />
              <circle cx="22" cy="12" r="2" fill="currentColor" stroke="none" />
              <circle cx="10" cy="10" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>
            Makarenko<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-text-main" : "text-white/90"}`}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
            className={`text-xs font-bold uppercase px-2 py-1 rounded transition-colors ${scrolled ? "text-text-muted hover:bg-gray-100" : "text-white/70 hover:bg-white/10"}`}
          >
            {locale === 'no' ? 'EN' : 'NO'}
          </button>
          <a href="#calculator" className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-accent/20">
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className={`w-6 h-6 ${scrolled ? "text-primary" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-primary py-2 border-b border-gray-50">
                {link.name}
              </a>
            ))}
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => { setLocale(locale === 'no' ? 'en' : 'no'); setMobileMenuOpen(false); }} className="font-bold text-primary">
                {locale === 'no' ? 'Switch to English' : 'Bytt til Norsk'}
              </button>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="bg-accent text-white px-6 py-2 rounded-full font-semibold">
                {t("nav.cta")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
