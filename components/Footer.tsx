
"use client";
import React from 'react';
import { useLocale } from '@/lib/i18n';
import { LogoMark } from './Icons';

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <LogoMark className="w-8 h-8 text-white" />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Makarenko<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-text-inverse/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.linksTitle')}</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-text-inverse/70 hover:text-accent transition-colors text-sm">{t('nav.about')}</a></li>
              <li><a href="#calculator" className="text-text-inverse/70 hover:text-accent transition-colors text-sm">{t('nav.calculator')}</a></li>
              <li><a href="#faq" className="text-text-inverse/70 hover:text-accent transition-colors text-sm">{t('nav.faq')}</a></li>
              <li><a href="#contact" className="text-text-inverse/70 hover:text-accent transition-colors text-sm">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-3">
              <li className="text-text-inverse/70 text-sm">Flyttevask</li>
              <li className="text-text-inverse/70 text-sm">Regelmessig vask</li>
              <li className="text-text-inverse/70 text-sm">Kontorvask</li>
              <li className="text-text-inverse/70 text-sm">Visningsvask</li>
            </ul>
          </div>

          {/* Legal / Trust */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.legalTitle')}</h4>
            <ul className="space-y-3">
              <li className="text-text-inverse/70 text-sm">Personvernerklæring</li>
              <li className="text-text-inverse/70 text-sm">Brukervilkår</li>
              <li className="text-text-inverse/70 text-sm flex items-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Offentlig Godkjent
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-inverse/50 text-sm">
            © {currentYear} Makarenko Reinhold. {t('footer.rights')}
          </p>
          <div className="flex gap-4">
            <span className="text-text-inverse/50 text-sm">Org.nr: 933 123 456</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
