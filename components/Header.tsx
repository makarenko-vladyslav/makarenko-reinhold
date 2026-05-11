
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, availableLocales, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.calculator'), href: "#calculator" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.faq'), href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled ? "bg-primary text-white" : "bg-accent text-white"}`}>
            <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 6C16 6 10 13.5 10 18.5C10 21.5376 12.6863 24 16 24C19.3137 24 22 21.5376 22 18.5C22 13.5 16 6 16 6Z"/>
              <path d="M14 16L16 18L20 13"/>
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
            Makarenko<span className={scrolled ? "text-accent" : "text-accent-light"}>.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-text-main" : "text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex bg-black/10 rounded-full p-1 backdrop-blur-sm">
            {availableLocales.map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-3 py-1 text-xs font-bold uppercase rounded-full transition-all ${
                  locale === l 
                    ? (scrolled ? "bg-primary text-white" : "bg-white text-primary") 
                    : (scrolled ? "text-text-muted hover:text-primary" : "text-white/70 hover:text-white")
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a 
            href="#contact"
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 ${
              scrolled 
                ? "bg-accent text-white shadow-[0_4px_14px_hsl(158,64%,42%,0.3)]" 
                : "bg-white text-primary shadow-lg"
            }`}
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className={`w-6 h-6 ${scrolled ? "text-primary" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-2 pt-4 border-t border-border">
                {availableLocales.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLocale(l); setMobileMenuOpen(false); }}
                    className={`px-4 py-2 text-sm font-bold uppercase rounded-lg ${locale === l ? "bg-primary text-white" : "bg-bg-light text-text-main"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
