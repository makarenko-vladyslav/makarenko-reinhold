"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#calculator", label: t("nav.calculator") },
    { href: "#about", label: t("nav.about") },
    { href: "#reviews", label: t("nav.reviews") },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-surface-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M16 6L18.5 13.5L26 16L18.5 18.5L16 26L13.5 18.5L6 16L13.5 13.5L16 6Z" fill="currentColor" stroke="none" />
              <path d="M24 8L25 11L28 12L25 13L24 16L23 13L20 12L23 11L24 8Z" fill="currentColor" stroke="none" opacity="0.8" />
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>
            Makarenko
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-text-main" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex bg-black/10 rounded-full p-1 backdrop-blur-sm">
            {['no', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-3 py-1 text-xs font-bold uppercase rounded-full transition-colors ${
                  locale === l 
                    ? "bg-white text-primary shadow-sm" 
                    : scrolled ? "text-text-main hover:text-primary" : "text-white/70 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Link 
            href="#contact"
            className="bg-accent hover:bg-accent-light text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-[0_0_20px_hsl(175_75%_35%/0.4)]"
          >
            {t("nav.cta")}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${scrolled ? "text-primary" : "text-white"}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="text-lg font-medium text-primary py-2 border-b border-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-4">
              {['no', 'en'].map((l) => (
                <button
                  key={l}
                  onClick={() => { setLocale(l); setMobileMenu(false); }}
                  className={`flex-1 py-2 text-sm font-bold uppercase rounded-lg border ${
                    locale === l ? "bg-primary text-white border-primary" : "border-gray-200 text-text-main"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <Link 
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="w-full bg-accent text-white text-center py-3 rounded-xl font-semibold mt-2"
            >
              {t("nav.cta")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}