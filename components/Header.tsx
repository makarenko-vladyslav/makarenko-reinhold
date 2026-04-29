"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Icons } from "@/components/ui/Icons";

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#calculator", label: t("nav.calculator") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-bg-dark/90 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-[0_0_20px_hsl(185_80%_40%_/_0.4)] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 32 32" className="w-6 h-6">
              <path d="M16 8L22 14L16 20L10 14L16 8Z" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M16 14L22 20L16 26L10 20L16 14Z" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Makarenko<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            <button 
              onClick={() => setLocale('no')}
              className={`transition-colors ${locale === 'no' ? 'text-accent' : 'text-white/50 hover:text-white'}`}
            >
              NO
            </button>
            <span className="text-white/20">/</span>
            <button 
              onClick={() => setLocale('en')}
              className={`transition-colors ${locale === 'en' ? 'text-accent' : 'text-white/50 hover:text-white'}`}
            >
              EN
            </button>
          </div>
          <a 
            href="#contact"
            className="bg-white text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_hsl(185_80%_40%_/_0.4)]"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <Icons.close /> : <Icons.menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="text-lg font-medium text-white hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <button onClick={() => { setLocale('no'); setMobileMenu(false); }} className={`text-lg font-bold ${locale === 'no' ? 'text-accent' : 'text-white/50'}`}>NO</button>
              <button onClick={() => { setLocale('en'); setMobileMenu(false); }} className={`text-lg font-bold ${locale === 'en' ? 'text-accent' : 'text-white/50'}`}>EN</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
