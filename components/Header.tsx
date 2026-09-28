"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#tjenester", label: String(t("nav.services")) },
    { href: "#pakker", label: String(t("nav.packages")) },
    { href: "#kalkulator", label: String(t("nav.calculator")) },
    { href: "#resultater", label: String(t("nav.beforeAfter")) },
    { href: "#prosess", label: String(t("nav.process")) },
    { href: "#faq", label: String(t("nav.faq")) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding,box-shadow] duration-300 ease-out ${
        isScrolled
          ? "bg-primary/95 text-white backdrop-blur-md py-3 shadow-md border-b border-white/10"
          : "bg-primary/40 text-white backdrop-blur-sm py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex flex-col group">
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-accent transition-colors duration-150 ease-out">
            {String(t("nav.brand"))}
          </span>
          <span className="text-[10px] tracking-widest uppercase text-white/70">
            {String(t("nav.subBrand"))}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/85 hover:text-white transition-colors duration-150 ease-out relative py-1 hover:border-b hover:border-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header CTA & Quick Phone */}
        <div className="flex items-center space-x-3">
          <a
            href="tel:+4796684397"
            className="hidden sm:inline-flex flex-col text-right leading-tight hover:opacity-90 transition-opacity duration-150 ease-out"
          >
            <span className="text-xs text-white/70">{String(t("nav.smsResponse"))}</span>
            <span className="font-display font-bold text-sm tracking-tight text-accent">
              {String(t("nav.phone"))}
            </span>
          </a>

          <a
            href="#bestill"
            className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold tracking-tight rounded-md bg-accent hover:bg-accent-dark text-white shadow-sm transition-colors duration-150 ease-out"
          >
            {String(t("nav.contact"))}
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Åpne meny"
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-150 ease-out focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-primary/98 text-white flex flex-col justify-between p-6 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="font-display font-bold text-lg">{String(t("nav.brand"))}</p>
              <p className="text-xs text-white/60">{String(t("nav.subBrand"))}</p>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Lukk meny"
              className="p-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors duration-150 ease-out"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="my-8 flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-semibold tracking-tight hover:text-accent transition-colors duration-150 ease-out"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="flex flex-col">
              <span className="text-xs text-white/60">{String(t("nav.smsResponse"))}</span>
              <a href="tel:+4796684397" className="text-lg font-bold text-accent">
                {String(t("nav.phone"))}
              </a>
            </div>
            <a
              href="#bestill"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 px-4 rounded-md bg-accent text-white font-bold text-sm tracking-wide transition-colors duration-150 ease-out hover:bg-accent-dark"
            >
              {String(t("nav.contact"))}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
