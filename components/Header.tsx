
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { Phone, List, X, Globe } from "@phosphor-icons/react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => setLocale(locale === "no" ? "en" : "no");

  const navLinks = [
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#faq", label: t("nav.faq") as string },
    { href: "#contact", label: t("nav.contact") as string },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-surface/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-surface group-hover:scale-105 transition-transform">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 14L16 28v22h32V28L32 14z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
              <path d="M26 36c0-3.3 5-10 6-10s6 6.7 6 10a6 6 0 0 1-12 0z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-lg leading-tight ${scrolled ? "text-primary" : "text-primary lg:text-surface"}`}>Makarenko</span>
            <span className={`text-xs tracking-widest uppercase ${scrolled ? "text-text-muted" : "text-text-muted lg:text-surface/80"}`}>Reinhold</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? "text-text-main" : "text-surface"}`}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button onClick={toggleLocale} className={`flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${scrolled ? "text-text-main" : "text-surface"}`}>
            <Globe size={18} /> {locale.toUpperCase()}
          </button>
          <a href="tel:+4796684393" className={`flex items-center gap-2 text-sm font-bold ${scrolled ? "text-primary" : "text-surface"} hover:text-accent transition-colors`}>
            <Phone size={18} weight="duotone" /> +47 966 84 393
          </a>
          <a href="#calculator" className="bg-accent text-surface px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
            {t("nav.cta") as string}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <List size={28} className={scrolled ? "text-primary" : "text-primary"} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface shadow-xl border-t border-border p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-primary py-2 border-b border-border/50">
              {link.label}
            </a>
          ))}
          <div className="flex justify-between items-center pt-4">
            <button onClick={toggleLocale} className="flex items-center gap-2 text-primary font-medium">
              <Globe size={20} /> {locale === "no" ? "English" : "Norsk"}
            </button>
            <a href="tel:+4796684393" className="flex items-center gap-2 text-primary font-bold">
              <Phone size={20} weight="duotone" /> Ring Oss
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
