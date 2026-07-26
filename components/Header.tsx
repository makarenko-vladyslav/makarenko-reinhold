"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const companyName = String(t("company.name"));
  const companyPhone = String(t("company.phone"));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10"
          : "bg-gradient-to-b from-bg-dark/95 via-bg-dark/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Wordmark + Monogram Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white font-display font-bold text-lg shadow-md transition-transform group-hover:scale-105">
              MR
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white leading-none">
                {companyName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold mt-1">
                Godkjent Renhold • Notodden
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-wider font-bold text-white/90">
            <a href="#tjenester" className="hover:text-accent transition-colors">
              {String(t("nav.services"))}
            </a>
            <a href="#kalkulator" className="hover:text-accent transition-colors">
              {String(t("nav.calculator"))}
            </a>
            <a href="#garanti" className="hover:text-accent transition-colors">
              {String(t("nav.guarantee"))}
            </a>
            <a href="#hvorfor-oss" className="hover:text-accent transition-colors">
              {String(t("nav.whyUs"))}
            </a>
            <a href="#dekning" className="hover:text-accent transition-colors">
              {String(t("nav.coverage"))}
            </a>
            <a href="#faq" className="hover:text-accent transition-colors">
              {String(t("nav.faq"))}
            </a>
          </nav>

          {/* Header Action Pair */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${companyPhone.replace(/\s+/g, "")}`}
              className="text-white font-display font-bold text-xs tracking-wider uppercase hover:text-accent transition-colors px-3 py-2 border border-white/20 rounded-lg"
            >
              Tlf: {companyPhone}
            </a>
            <a
              href="#kalkulator"
              className="bg-accent hover:bg-accent-hover text-white font-display font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5"
            >
              {String(t("nav.cta"))}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-accent focus:outline-none"
            aria-label="Meny"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 bg-current transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-current transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-bg-dark/98 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between overflow-y-auto border-t border-white/10">
          <div className="flex flex-col gap-6 pt-4 text-center">
            <a
              href="#tjenester"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-accent uppercase tracking-wider"
            >
              {String(t("nav.services"))}
            </a>
            <a
              href="#kalkulator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-accent uppercase tracking-wider"
            >
              {String(t("nav.calculator"))}
            </a>
            <a
              href="#garanti"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-accent uppercase tracking-wider"
            >
              {String(t("nav.guarantee"))}
            </a>
            <a
              href="#hvorfor-oss"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-accent uppercase tracking-wider"
            >
              {String(t("nav.whyUs"))}
            </a>
            <a
              href="#dekning"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-accent uppercase tracking-wider"
            >
              {String(t("nav.coverage"))}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-accent uppercase tracking-wider"
            >
              {String(t("nav.faq"))}
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display font-bold text-white hover:text-accent uppercase tracking-wider"
            >
              {String(t("nav.contact"))}
            </a>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href={`tel:${companyPhone.replace(/\s+/g, "")}`}
              className="w-full text-center py-3.5 bg-white/10 text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl"
            >
              Ring direkte: {companyPhone}
            </a>
            <a
              href="#kalkulator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 bg-accent text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg"
            >
              {String(t("hero.ctaPrimary"))}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
