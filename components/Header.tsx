
"use client";
import React, { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { LogoMark, IconMenu, IconX } from './Icons';

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.calculator'), href: '#calculator' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <LogoMark className={`w-8 h-8 ${scrolled ? 'text-primary' : 'text-white'} transition-colors`} />
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-primary' : 'text-white'} transition-colors`}>
            Makarenko<span className="text-accent">.</span>
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
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
            className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded border transition-colors ${
              scrolled ? 'border-gray-200 text-text-main hover:border-accent hover:text-accent' : 'border-white/20 text-white hover:border-white'
            }`}
          >
            {locale}
          </button>
          <a 
            href="#contact"
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              scrolled 
                ? 'bg-primary text-white hover:bg-primary-light shadow-md' 
                : 'bg-white text-primary hover:bg-gray-50'
            }`}
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <IconX className={scrolled ? 'text-primary' : 'text-white'} />
          ) : (
            <IconMenu className={scrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-text-main py-2 border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between mt-4">
            <button 
              onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
              className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded border border-gray-200 text-text-main"
            >
              {locale === 'no' ? 'English' : 'Norsk'}
            </button>
            <a 
              href="#contact"
              className="px-6 py-3 bg-accent text-white rounded-lg font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.cta')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
