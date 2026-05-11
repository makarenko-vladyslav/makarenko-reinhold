
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
    { name: t("nav.about"), href: "#trust" },
    { name: t("nav.faq"), href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/30 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 6C16 6 10 12 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 12 16 6 16 6Z" />
              <path d="M16 14L16 20M13 17L19 17" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-lg leading-none tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>Makarenko</span>
            <span className={`text-xs font-medium tracking-widest uppercase ${scrolled ? "text-accent" : "text-accent-light"}`}>Reinhold</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? "text-text-main" : "text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLocale(locale === 'no' ? 'uk' : 'no')}
            className={`text-sm font-bold px-2 py-1 rounded hover:bg-black/5 transition-colors ${scrolled ? "text-primary" : "text-white"}`}
          >
            {locale === 'no' ? 'UK' : 'NO'}
          </button>
          <a 
            href="#contact"
            className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${scrolled ? "text-primary" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
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
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-primary font-medium text-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setLocale(locale === 'no' ? 'uk' : 'no')}
                  className="text-primary font-bold"
                >
                  {locale === 'no' ? 'Switch to Ukrainian' : 'Switch to Norwegian'}
                </button>
              </div>
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-white text-center px-6 py-3 rounded-xl font-bold w-full"
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
