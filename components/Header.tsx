"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { locale, setLocale, t } = useLocale();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.calculator'), href: '#calculator' },
    { name: t('nav.about'), href: '#trust' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'bg-primary' : 'bg-accent'}`}>
            <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="none">
              <path d="M16 6L6 14v10a2 2 0 002 2h16a2 2 0 002-2V14L16 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M16 14l-3 3m0 0l3 3m-3-3h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="20" cy="12" r="1" fill="currentColor"/>
              <circle cx="23" cy="15" r="1.5" fill="currentColor"/>
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            Makarenko<span className={scrolled ? 'text-accent' : 'text-white/80'}>.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-main' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-2">
            <button onClick={() => setLocale('no')} className={`text-xs font-bold px-2 py-1 rounded transition-colors ${locale === 'no' ? 'bg-accent text-white' : scrolled ? 'text-text-muted hover:bg-gray-100' : 'text-white/70 hover:bg-white/10'}`}>NO</button>
            <button onClick={() => setLocale('uk')} className={`text-xs font-bold px-2 py-1 rounded transition-colors ${locale === 'uk' ? 'bg-accent text-white' : scrolled ? 'text-text-muted hover:bg-gray-100' : 'text-white/70 hover:bg-white/10'}`}>UK</button>
          </div>
          <a 
            href="#contact"
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 ${
              scrolled ? 'bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20' : 'bg-white text-primary hover:bg-gray-50'
            }`}
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-text-main py-2 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 mt-4">
            <button onClick={() => setLocale('no')} className={`flex-1 py-2 rounded font-bold ${locale === 'no' ? 'bg-accent text-white' : 'bg-gray-100 text-text-main'}`}>NO</button>
            <button onClick={() => setLocale('uk')} className={`flex-1 py-2 rounded font-bold ${locale === 'uk' ? 'bg-accent text-white' : 'bg-gray-100 text-text-main'}`}>UK</button>
          </div>
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full text-center bg-primary text-white py-3 rounded-xl font-semibold"
          >
            {t('nav.cta')}
          </a>
        </div>
      )}
    </header>
  );
}
