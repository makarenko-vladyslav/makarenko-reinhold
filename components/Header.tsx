"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import Button from "./ui/Button";

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg viewBox="0 0 32 32" className="w-8 h-8 text-accent">
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path d="M16 6 L21 14 L28 16 L21 18 L16 26 L11 18 L4 16 L11 14 Z" fill="white" />
      <circle cx="22" cy="10" r="2.5" fill="hsl(215, 40%, 15%)" />
    </svg>
    <span className="font-display font-bold text-xl tracking-tight">Makarenko<br/><span className="text-sm text-accent leading-none block">Reinhold</span></span>
  </div>
);

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
    { name: t("nav.faq"), href: "#faq" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm text-primary" : "py-6 bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className={`transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-sm hover:text-accent transition-colors ${scrolled ? "text-primary/80" : "text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-6 bg-current opacity-20" />
          <button 
            onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
            className={`font-bold text-sm hover:text-accent transition-colors uppercase ${scrolled ? "text-primary" : "text-white"}`}
          >
            {locale === 'no' ? 'EN' : 'NO'}
          </button>
          <Button href="#calculator" variant={scrolled ? "primary" : "outline"} className={!scrolled ? "border-white/30 text-white hover:bg-white hover:text-primary" : ""}>
            {t("nav.cta")}
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden text-primary"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <button onClick={() => setLocale('no')} className={`font-bold ${locale === 'no' ? 'text-accent' : 'text-gray-400'}`}>NO</button>
              <button onClick={() => setLocale('en')} className={`font-bold ${locale === 'en' ? 'text-accent' : 'text-gray-400'}`}>EN</button>
            </div>
            <Button href="#calculator" onClick={() => setMobileMenuOpen(false)} className="w-full mt-4">
              {t("nav.cta")}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
