
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.calculator"), href: "#calculator" },
    { name: t("nav.trust"), href: "#trust" },
    { name: t("nav.about"), href: "#team" },
    { name: t("nav.faq"), href: "#faq" },
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
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            scrolled ? "bg-accent" : "bg-accent"
          }`}>
            <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="none">
              <path d="M16 6C16 6 10 12 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 12 16 6 16 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M16 12L19 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="11" cy="10" r="1.5" fill="currentColor" />
              <circle cx="22" cy="9" r="1" fill="currentColor" />
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${
            scrolled ? "text-primary" : "text-white"
          }`}>
            Makarenko<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-text-main" : "text-white/90"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#calculator"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5"
          >
            {t("nav.cta")}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className={`w-6 h-6 ${scrolled ? "text-primary" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-main font-medium py-2 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-white text-center px-6 py-3 rounded-xl font-semibold mt-2"
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
