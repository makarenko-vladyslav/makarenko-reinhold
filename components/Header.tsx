"use client";
import { useState, useEffect } from "react";
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
    { href: "#faq", label: t("nav.faq") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 group ${scrolled ? "text-primary" : "text-white"}`}>
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 6L6 14v10a2 2 0 002 2h16a2 2 0 002-2V14L16 6z" />
              <path d="M16 12v10M12 16h8" />
              <path d="M22 8l1-1m2 2l1-1M20 10l-1 1" strokeWidth="2" />
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Makarenko<br/><span className="text-sm font-medium opacity-80 leading-none block">Reinhold</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`font-medium text-sm hover:text-accent transition-colors ${scrolled ? "text-text-main" : "text-white/90"}`}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button onClick={() => setLocale('no')} className={`text-sm font-bold ${locale === 'no' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}>NO</button>
            <span className={scrolled ? "text-border-light" : "text-white/30"}>|</span>
            <button onClick={() => setLocale('uk')} className={`text-sm font-bold ${locale === 'uk' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}>UK</button>
          </div>
          <a href="#calculator" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5">
            {t("nav.book")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-2 ${scrolled ? "text-primary" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border-light p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-text-main font-medium text-lg py-2 border-b border-border-light/50">
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 pt-4">
            <button onClick={() => { setLocale('no'); setMobileMenuOpen(false); }} className={`px-4 py-2 rounded-md ${locale === 'no' ? 'bg-bg-light text-accent font-bold' : 'text-text-muted'}`}>Norsk</button>
            <button onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }} className={`px-4 py-2 rounded-md ${locale === 'uk' ? 'bg-bg-light text-accent font-bold' : 'text-text-muted'}`}>Українська</button>
          </div>
        </div>
      )}
    </header>
  );
}
