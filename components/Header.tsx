"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import Link from 'next/link';

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);

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
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${scrolled ? 'bg-primary' : 'bg-accent'}`}>
              <svg viewBox="0 0 32 32" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M16 6 L18 12 L24 14 L18 16 L16 22 L14 16 L8 14 L14 12 Z" fill="currentColor" stroke="none" />
                <path d="M22 20 L23 23 L26 24 L23 25 L22 28 L21 25 L18 24 L21 23 Z" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
                Makarenko
              </span>
              <span className={`font-display font-semibold text-sm leading-tight tracking-widest uppercase transition-colors ${scrolled ? 'text-accent' : 'text-white/80'}`}>
                Reinhold
              </span>
            </div>
          </Link>

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

          {/* Actions (Desktop & Mobile Language) */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <button onClick={() => setLocale('no')} className={`text-xs font-bold ${locale === 'no' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}>NO</button>
              <span className={scrolled ? 'text-gray-300' : 'text-white/30'}>|</span>
              <button onClick={() => setLocale('uk')} className={`text-xs font-bold ${locale === 'uk' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}>UK</button>
              <span className={scrolled ? 'text-gray-300' : 'text-white/30'}>|</span>
              <button onClick={() => setLocale('en')} className={`text-xs font-bold ${locale === 'en' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}>EN</button>
            </div>
            <a 
              href="#contact"
              className={`hidden md:flex px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:-translate-y-0.5 ${scrolled ? 'bg-primary text-white hover:bg-primary-light hover:shadow-primary/30' : 'bg-white text-primary hover:bg-gray-50 hover:shadow-white/20'}`}
            >
              {t('nav.cta')}
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-gray-200 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around px-2 py-3">
          <a href="#services" className="flex flex-col items-center gap-1 text-text-muted hover:text-accent transition-colors w-16">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-[10px] font-semibold truncate w-full text-center">{t('nav.services')}</span>
          </a>
          
          <a href="#calculator" className="flex flex-col items-center gap-1 text-text-muted hover:text-accent transition-colors w-16">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="text-[10px] font-semibold truncate w-full text-center">{t('nav.calculator')}</span>
          </a>
          
          <a href="#about" className="flex flex-col items-center gap-1 text-text-muted hover:text-accent transition-colors w-16">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[10px] font-semibold truncate w-full text-center">{t('nav.about')}</span>
          </a>
          
          <a href="#contact" className="flex flex-col items-center gap-1 text-accent hover:text-accent-hover transition-colors w-16">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-md"></div>
              <svg className="w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold truncate w-full text-center">{t('nav.contact')}</span>
          </a>
        </div>
      </div>
    </>
  );
}
