
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { LogoMark, PhoneIcon } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { key: "services", href: "#services" },
    { key: "pricing", href: "#calculator" },
    { key: "process", href: "#process" },
    { key: "faq", href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-1.5 rounded-lg transition-colors ${scrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
            <LogoMark className="w-6 h-6" />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            Makarenko<span className="font-light">Reinhold</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-text-main' : 'text-white/90'
              }`}
            >
              {t(`nav.${link.key}`) as string}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLocale('no')} 
              className={`text-xs font-bold ${locale === 'no' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}
            >
              NO
            </button>
            <span className={scrolled ? 'text-gray-300' : 'text-white/30'}>|</span>
            <button 
              onClick={() => setLocale('en')} 
              className={`text-xs font-bold ${locale === 'en' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}
            >
              EN
            </button>
          </div>
          
          <a 
            href="tel:+4796684393" 
            className={`flex items-center gap-2 text-sm font-bold transition-colors hover:text-accent ${scrolled ? 'text-primary' : 'text-white'}`}
          >
            <PhoneIcon className="w-4 h-4" />
            +47 966 84 393
          </a>

          <a 
            href="#contact"
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 ${
              scrolled ? 'bg-primary text-white hover:bg-primary-light shadow-lg' : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            {t('nav.book') as string}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.key} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-main py-2 border-b border-gray-50"
                >
                  {t(`nav.${link.key}`) as string}
                </a>
              ))}
              <div className="flex gap-4 pt-2">
                <button onClick={() => setLocale('no')} className={`font-bold ${locale === 'no' ? 'text-accent' : 'text-text-muted'}`}>NO</button>
                <button onClick={() => setLocale('en')} className={`font-bold ${locale === 'en' ? 'text-accent' : 'text-text-muted'}`}>EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
