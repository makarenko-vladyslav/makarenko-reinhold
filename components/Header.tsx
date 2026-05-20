"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#why-us", label: t("nav.whyUs") as string },
    { href: "#process", label: t("nav.process") as string },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled ? "bg-accent/10 text-accent" : "bg-white/20 text-white"}`}>
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
              <path d="M16 4 L16 10 M16 22 L16 28 M4 16 L10 16 M22 16 L28 16 M7.5 7.5 L11.5 11.5 M20.5 20.5 L24.5 24.5 M7.5 24.5 L11.5 20.5 M20.5 11.5 L24.5 7.5" strokeLinecap="round" />
              <circle cx="16" cy="16" r="4" />
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
            Makarenko<span className="font-normal opacity-80">Reinhold</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-accent ${scrolled ? "text-text-main" : "text-white/90"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex bg-black/5 rounded-full p-1">
            {["no", "uk"].map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-3 py-1 text-xs font-bold uppercase rounded-full transition-all ${
                  locale === l 
                    ? (scrolled ? "bg-white shadow-sm text-primary" : "bg-white text-primary") 
                    : (scrolled ? "text-text-muted hover:text-primary" : "text-white/70 hover:text-white")
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a 
            href="#contact"
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 ${
              scrolled 
                ? "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20" 
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            {t("nav.cta") as string}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-6 h-6 ${scrolled ? "text-primary" : "text-white"}`}>
            <path d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round" strokeLinejoin="round"/>
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
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
              <div className="flex gap-2 mt-2">
                {["no", "uk"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLocale(l)}
                    className={`flex-1 py-2 text-sm font-bold uppercase rounded-lg border ${
                      locale === l ? "border-accent bg-accent/5 text-accent" : "border-gray-200 text-gray-500"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 mt-2 bg-primary text-white rounded-xl font-semibold"
              >
                {t("nav.cta") as string}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
