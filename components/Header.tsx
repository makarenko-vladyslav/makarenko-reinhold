"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";

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
    { href: "#services", label: t("nav.services") },
    { href: "#calculator", label: t("nav.calculator") },
    { href: "#about", label: t("nav.about") },
    { href: "#faq", label: t("nav.faq") },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            scrolled ? "bg-accent text-white" : "bg-white text-accent"
          }`}>
            <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 6L6 14v10a2 2 0 002 2h16a2 2 0 002-2V14L16 6z" />
              <path d="M16 12l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4z" className={scrolled ? "fill-white" : "fill-accent"} stroke="none" />
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${
            scrolled ? "text-primary" : "text-white"
          }`}>
            Makarenko Reinhold
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-text-main" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          
          <div className="flex items-center gap-2 border-l pl-6 border-white/20">
            <button 
              onClick={() => setLocale('no')} 
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${locale === 'no' ? 'bg-accent text-white' : scrolled ? 'text-text-muted hover:bg-gray-100' : 'text-white/70 hover:bg-white/10'}`}
            >
              NO
            </button>
            <button 
              onClick={() => setLocale('uk')} 
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${locale === 'uk' ? 'bg-accent text-white' : scrolled ? 'text-text-muted hover:bg-gray-100' : 'text-white/70 hover:bg-white/10'}`}
            >
              UK
            </button>
          </div>

          <a 
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5"
          >
            {t("nav.cta")}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary py-2 border-b border-gray-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 pt-4">
                <button onClick={() => { setLocale('no'); setMobileMenuOpen(false); }} className={`flex-1 py-2 rounded ${locale === 'no' ? 'bg-accent text-white' : 'bg-gray-100'}`}>Norsk</button>
                <button onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }} className={`flex-1 py-2 rounded ${locale === 'uk' ? 'bg-accent text-white' : 'bg-gray-100'}`}>Українська</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
