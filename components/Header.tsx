
"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { Phone, List, X, Globe } from '@phosphor-icons/react';

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
    { name: t('nav.services') as string, href: '#services' },
    { name: t('nav.calculator') as string, href: '#calculator' },
    { name: t('nav.about') as string, href: '#why-us' },
    { name: t('nav.faq') as string, href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-display font-bold text-xl group-hover:bg-primary transition-colors">
            MR
          </div>
          <div className={`font-display font-bold text-xl leading-tight ${scrolled ? 'text-primary' : 'text-primary lg:text-white'}`}>
            Makarenko<br/><span className="text-accent text-sm">Reinhold</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            onClick={() => setLocale(locale === 'no' ? 'en' : 'no')}
            className={`flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-text-main' : 'text-white'}`}
          >
            <Globe size={18} weight="duotone" />
            {locale.toUpperCase()}
          </button>
          
          <a href="tel:+4796684393" className={`flex items-center gap-2 font-medium hover:text-accent transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
            <Phone size={20} weight="duotone" className="text-accent" />
            +47 966 84 393
          </a>
          
          <a href="#calculator" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5">
            {t('nav.book') as string}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-primary py-2 border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-between items-center py-4">
            <a href="tel:+4796684393" className="flex items-center gap-2 font-medium text-primary">
              <Phone size={20} weight="duotone" className="text-accent" />
              +47 966 84 393
            </a>
            <button 
              onClick={() => { setLocale(locale === 'no' ? 'en' : 'no'); setMobileMenuOpen(false); }}
              className="flex items-center gap-1 text-sm font-medium text-text-muted bg-gray-100 px-3 py-1 rounded-full"
            >
              <Globe size={16} /> {locale.toUpperCase()}
            </button>
          </div>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-white text-center py-3 rounded-xl font-medium mt-2">
            {t('nav.book') as string}
          </a>
        </div>
      )}
    </header>
  );
}
