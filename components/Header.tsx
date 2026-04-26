"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { LogoMark } from "./Icons";
import { cn } from "@/lib/utils";

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
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#about", label: t("nav.about") },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={cn(
            "p-2 rounded-xl transition-colors",
            scrolled ? "bg-primary text-white" : "bg-white/10 text-white backdrop-blur-sm"
          )}>
            <LogoMark className="w-6 h-6" />
          </div>
          <span className={cn(
            "font-display font-bold text-xl tracking-tight transition-colors",
            scrolled ? "text-primary" : "text-white"
          )}>
            Makarenko<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-text-main" : "text-white/90"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
            className={cn(
              "text-xs font-bold uppercase tracking-widest transition-colors hover:text-accent",
              scrolled ? "text-text-muted" : "text-white/70"
            )}
          >
            {locale === 'no' ? 'EN' : 'NO'}
          </button>
          <a 
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-[0_0_20px_hsl(185_80%_40%/0.4)] hover:-translate-y-0.5"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke={scrolled ? "currentColor" : "white"} strokeWidth="2" className="w-6 h-6">
            <path d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
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
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
                  className="text-sm font-bold uppercase text-text-muted"
                >
                  Switch to {locale === 'no' ? 'English' : 'Norsk'}
                </button>
                <a 
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-primary text-white px-6 py-2 rounded-full font-medium text-sm"
                >
                  {t("nav.cta")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
