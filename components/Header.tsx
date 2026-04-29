"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { LogoMark, MenuIcon, CloseIcon } from "./Icons";
import { Button } from "./Shared";

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
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.calculator"), href: "#calculator" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.reviews"), href: "#reviews" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${scrolled ? "bg-primary text-white" : "bg-white text-primary"}`}>
              <LogoMark className="w-6 h-6" />
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
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  scrolled ? "text-text-main" : "text-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex bg-black/10 rounded-lg p-1 backdrop-blur-sm">
              <button 
                onClick={() => setLocale('no')}
                className={`px-2 py-1 text-xs font-bold rounded-md transition-colors ${locale === 'no' ? 'bg-white text-primary shadow-sm' : 'text-white/70 hover:text-white'}`}
              >
                NO
              </button>
              <button 
                onClick={() => setLocale('en')}
                className={`px-2 py-1 text-xs font-bold rounded-md transition-colors ${locale === 'en' ? 'bg-white text-primary shadow-sm' : 'text-white/70 hover:text-white'}`}
              >
                EN
              </button>
            </div>
            <a href="#contact">
              <Button variant={scrolled ? "primary" : "white"} className="py-2 px-4 text-sm">
                {t("nav.cta")}
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 ${scrolled ? "text-primary" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
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
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-primary py-2 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-2 mt-4">
                <Button variant="primary" className="flex-1" onClick={() => { window.location.href='#contact'; setMobileMenuOpen(false); }}>
                  {t("nav.cta")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
