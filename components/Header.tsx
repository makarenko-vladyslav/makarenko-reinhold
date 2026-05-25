
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { Button, LogoMark } from "./Shared";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.calculator'), href: '#calculator' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`flex items-center gap-2 font-display font-bold text-xl tracking-tight z-50 ${scrolled ? 'text-primary' : 'text-white'}`}>
          <LogoMark className="w-8 h-8 text-accent" />
          <span>Makarenko<span className="text-accent">Reinhold</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${scrolled ? 'text-text-main hover:text-accent' : 'text-white/90 hover:text-white'}`}>
              {link.name}
            </a>
          ))}
          <Button variant={scrolled ? 'primary' : 'secondary'} href="#calculator" className="py-2.5 px-6 text-sm">
            {t('nav.cta')}
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 p-2 ${scrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-bold text-primary"
            >
              {link.name}
            </a>
          ))}
          <Button href="#calculator" onClick={() => setMobileMenuOpen(false)}>
            {t('nav.cta')}
          </Button>
        </div>
      </div>
    </header>
  );
}
