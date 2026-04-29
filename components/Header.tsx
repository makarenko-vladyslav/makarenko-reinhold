"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Icons.Logo className={cn("w-8 h-8 transition-colors", scrolled ? "text-primary" : "text-white")} />
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
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-text-main" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
            className={cn(
              "text-xs font-bold uppercase tracking-widest px-2 py-1 rounded transition-colors",
              scrolled ? "text-text-muted hover:text-primary" : "text-white/70 hover:text-white"
            )}
          >
            {locale === 'no' ? 'EN' : 'NO'}
          </button>
          
          <a 
            href="#calculator"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_hsl(173_80%_40%/0.3)] hover:shadow-[0_0_25px_hsl(173_80%_40%/0.5)] hover:-translate-y-0.5"
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <Icons.Close className={cn("w-6 h-6", scrolled ? "text-primary" : "text-white")} />
          ) : (
            <Icons.Menu className={cn("w-6 h-6", scrolled ? "text-primary" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-primary py-2 border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between mt-4">
              <button 
                onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
                className="text-sm font-bold uppercase tracking-widest text-text-muted"
              >
                Switch to {locale === 'no' ? 'English' : 'Norsk'}
              </button>
              <a 
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold text-center"
              >
                {t('nav.cta')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
