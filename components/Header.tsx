
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

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
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.calculator'), href: "#calculator" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.reviews'), href: "#reviews" },
    { name: t('nav.faq'), href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${scrolled ? "bg-primary text-bg-white" : "bg-bg-white text-primary"}`}>
            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16" />
              <path d="M16 8L16 16L21.6569 21.6569" />
              <circle cx="22" cy="10" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? "text-primary" : "text-bg-white"}`}>
            Makarenko<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-text-main" : "text-bg-white/90"}`}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-2">
            {['no', 'en'].map(l => (
              <button 
                key={l} 
                onClick={() => setLocale(l)}
                className={`text-xs font-bold uppercase px-2 py-1 rounded transition-colors ${locale === l ? (scrolled ? "bg-primary text-bg-white" : "bg-bg-white text-primary") : (scrolled ? "text-text-muted hover:text-primary" : "text-bg-white/60 hover:text-bg-white")}`}
              >
                {l}
              </button>
            ))}
          </div>
          <Button variant={scrolled ? "primary" : "white"} onClick={() => document.getElementById('contact')?.scrollIntoView()}>
            {t('nav.cta')}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-2 ${scrolled ? "text-primary" : "text-bg-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
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
            className="md:hidden bg-bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-primary py-2 border-b border-gray-50">
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 pt-2">
                <Button variant="primary" className="w-full" onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView(); }}>
                  {t('nav.cta')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
