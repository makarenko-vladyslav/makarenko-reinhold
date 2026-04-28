
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { LogoMark, IconPhone } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#faq", label: t("nav.faq") },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-2 font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
          <LogoMark className="w-8 h-8 text-accent" />
          <span>Makarenko <span className="font-light">Renhold</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? "text-text-muted" : "text-white/80"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-2">
            {['no', 'en', 'uk'].map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`text-xs font-bold uppercase px-2 py-1 rounded transition-colors ${
                  locale === l 
                    ? "bg-accent text-white" 
                    : scrolled ? "text-text-muted hover:bg-gray-100" : "text-white/60 hover:bg-white/10"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a 
            href="#contact" 
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-[0_0_20px_hsl(185_75%_45%/0.3)] hover:shadow-[0_0_25px_hsl(185_75%_45%/0.5)] hover:-translate-y-0.5"
          >
            <IconPhone className="w-4 h-4" />
            <span>{t("nav.contact")}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${scrolled ? "text-primary" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-primary font-medium text-lg py-2 border-b border-gray-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 pt-2">
                {['no', 'en', 'uk'].map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLocale(l); setMobileMenuOpen(false); }}
                    className={`text-sm font-bold uppercase px-3 py-1.5 rounded ${locale === l ? "bg-accent text-white" : "bg-gray-100 text-text-muted"}`}
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
