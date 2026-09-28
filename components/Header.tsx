"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const brandName = t("brand.name") as string;
  const brandCity = t("brand.city") as string;
  const phone = t("brand.phone") as string;

  const navLinks = [
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#packages", label: t("nav.packages") as string },
    { href: "#guarantee", label: t("nav.guarantee") as string },
    { href: "#hytta", label: t("nav.hytta") as string },
    { href: "#reviews", label: t("nav.reviews") as string },
    { href: "#faq", label: t("nav.faq") as string },
    { href: "#contact", label: t("nav.contact") as string },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[hsl(0_0%_100%/0.95)] backdrop-blur-md shadow-sm border-b border-[hsl(204_20%_88%)] py-3 text-[hsl(204_35%_15%)]"
            : "bg-[hsl(204_40%_16%/0.85)] backdrop-blur-sm py-4 text-[hsl(0_0%_100%)] border-b border-[hsl(0_0%_100%/0.1)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <a href="#" className="flex flex-col group shrink-0">
            <span className="font-display font-extrabold text-2xl tracking-tight leading-none group-hover:text-[hsl(158_64%_38%)] transition-colors whitespace-nowrap">
              {brandName}
            </span>
            <span
              className={`text-xs uppercase tracking-widest font-sans mt-0.5 whitespace-nowrap ${
                scrolled ? "text-[hsl(204_15%_42%)]" : "text-[hsl(0_0%_100%/0.7)]"
              }`}
            >
              {brandCity} · Telemark
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium font-sans shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-[hsl(158_64%_38%)] whitespace-nowrap ${
                  scrolled ? "text-[hsl(204_35%_15%)]" : "text-[hsl(0_0%_100%/0.9)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${phone}`}
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[hsl(158_64%_38%)] text-[hsl(158_64%_38%)] bg-[hsl(158_50%_94%)] hover:bg-[hsl(158_64%_38%)] hover:text-[hsl(0_0%_100%)] transition-colors whitespace-nowrap shrink-0"
            >
              {phone}
            </a>

            <a
              href="#calculator"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] font-display font-bold text-sm tracking-wide hover:bg-[hsl(158_70%_32%)] transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              {t("nav.cta") as string}
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Відкрити меню"
              className={`xl:hidden p-2 rounded-md shrink-0 ${
                scrolled
                  ? "text-[hsl(204_35%_15%)] hover:bg-[hsl(204_20%_92%)]"
                  : "text-[hsl(0_0%_100%)] hover:bg-[hsl(0_0%_100%/0.15)]"
              }`}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-currentColor rounded" />
                <span className="w-full h-0.5 bg-currentColor rounded" />
                <span className="w-full h-0.5 bg-currentColor rounded" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[hsl(204_40%_16%)] text-[hsl(0_0%_100%)] flex flex-col p-6 overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-[hsl(0_0%_100%/0.15)]">
            <div>
              <div className="font-display font-bold text-2xl tracking-tight text-[hsl(0_0%_100%)]">
                {brandName}
              </div>
              <div className="text-xs text-[hsl(158_64%_45%)] uppercase tracking-wider font-sans">
                {t("brand.orgStatus") as string}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Закрити меню"
              className="p-3 text-[hsl(0_0%_100%)] hover:text-[hsl(158_64%_45%)] text-2xl font-bold"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-4 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-bold text-[hsl(0_0%_100%/0.9)] hover:text-[hsl(158_64%_45%)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-[hsl(0_0%_100%/0.15)] space-y-4">
            <a
              href={`tel:${phone}`}
              className="block w-full py-3 text-center rounded-lg bg-[hsl(158_64%_38%)] text-[hsl(0_0%_100%)] font-display font-bold text-lg"
            >
              {phone}
            </a>
            <div className="text-center text-xs text-[hsl(0_0%_100%/0.6)]">
              {brandCity}, {t("brand.region") as string} · {t("brand.vatNote") as string}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
