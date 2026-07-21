"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3 text-text-main' : 'bg-transparent py-5 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Typographic Logo */}
        <div className="flex items-center gap-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left group cursor-pointer">
            <span className="font-display font-bold text-xl tracking-tight block">
              MAKARENKO <span className="text-accent">REINHOLD</span>
            </span>
            <span className={`text-[9px] tracking-widest uppercase font-semibold block transition-colors ${
              isScrolled ? 'text-text-muted' : 'text-white/80'
            }`}>
              Godkjent renholdsbedrift
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <button onClick={() => scrollToSection('services')} className="hover:text-accent cursor-pointer transition-colors">{t('nav.services')}</button>
          <button onClick={() => scrollToSection('calculator')} className="hover:text-accent cursor-pointer transition-colors">{t('nav.calculator')}</button>
          <button onClick={() => scrollToSection('checklist')} className="hover:text-accent cursor-pointer transition-colors">{t('nav.checklist')}</button>
          <button onClick={() => scrollToSection('trust')} className="hover:text-accent cursor-pointer transition-colors">{t('nav.about')}</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-accent cursor-pointer transition-colors">{t('nav.testimonials')}</button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-accent cursor-pointer transition-colors">{t('nav.faq')}</button>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+4796684397" className="text-xs font-bold font-display hover:text-accent transition-colors">+47 966 84 397</a>
          
          {/* i18n Switcher */}
          <div className="flex gap-2 text-xs font-bold border rounded-full px-3 py-1.5 border-current/20">
            <button 
              onClick={() => setLocale('no')} 
              className={`transition-colors cursor-pointer ${locale === 'no' ? 'text-accent' : 'opacity-60 hover:opacity-100'}`}
            >
              NO
            </button>
            <span className="opacity-20">|</span>
            <button 
              onClick={() => setLocale('en')} 
              className={`transition-colors cursor-pointer ${locale === 'en' ? 'text-accent' : 'opacity-60 hover:opacity-100'}`}
            >
              EN
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className={`cursor-pointer px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-accent glow-glow' 
                : 'bg-white text-primary hover:bg-accent hover:text-white'
            }`}
          >
            {t('nav.contact')}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        >
          <span className={`w-6 h-0.5 transition-transform ${isScrolled ? 'bg-text-main' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 transition-opacity ${isScrolled ? 'bg-text-main' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 transition-transform ${isScrolled ? 'bg-text-main' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-bg-dark text-white z-40 transition-transform duration-500 flex flex-col justify-between p-8 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center mt-4">
          <span className="font-display font-bold text-lg">MAKARENKO REINHOLD</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl p-2 cursor-pointer">✕</button>
        </div>

        <nav className="flex flex-col gap-6 text-2xl font-display font-bold tracking-tight text-center my-auto">
          <button onClick={() => scrollToSection('services')} className="hover:text-accent text-left">{t('nav.services')}</button>
          <button onClick={() => scrollToSection('calculator')} className="hover:text-accent text-left">{t('nav.calculator')}</button>
          <button onClick={() => scrollToSection('checklist')} className="hover:text-accent text-left">{t('nav.checklist')}</button>
          <button onClick={() => scrollToSection('trust')} className="hover:text-accent text-left">{t('nav.about')}</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-accent text-left">{t('nav.testimonials')}</button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-accent text-left">{t('nav.faq')}</button>
        </nav>

        <div className="flex flex-col gap-4">
          <div className="flex justify-center gap-6 text-sm font-bold border-t border-white/10 pt-6">
            <button onClick={() => { setLocale('no'); setIsMobileMenuOpen(false); }} className={locale === 'no' ? 'text-accent' : 'opacity-60'}>Norsk (NO)</button>
            <span className="opacity-20">|</span>
            <button onClick={() => { setLocale('en'); setIsMobileMenuOpen(false); }} className={locale === 'en' ? 'text-accent' : 'opacity-60'}>English (EN)</button>
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full py-4 rounded-xl bg-accent text-white font-bold text-center tracking-wide uppercase text-sm"
          >
            {t('nav.contact')}
          </button>
        </div>
      </div>
    </header>
  );
}
