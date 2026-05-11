"use client";
import React from 'react';
import { useLocale } from '@/lib/i18n';
import { LogoMark } from './Icons';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded-lg bg-accent/20 text-accent">
                <LogoMark className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Makarenko Reinhold</span>
            </a>
            <p className="text-white/60 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-bold text-white/80">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Offentlig Godkjent
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navigasjon</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/60 hover:text-accent transition-colors">{t('nav.services')}</a></li>
              <li><a href="#pricing" className="text-white/60 hover:text-accent transition-colors">{t('nav.pricing')}</a></li>
              <li><a href="#about" className="text-white/60 hover:text-accent transition-colors">{t('nav.about')}</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-accent transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href={`tel:${t('contact.info.phone')}`} className="hover:text-accent transition-colors">{t('contact.info.phone')}</a></li>
              <li><a href={`mailto:${t('contact.info.email')}`} className="hover:text-accent transition-colors">{t('contact.info.email')}</a></li>
              <li>{t('contact.info.address')}</li>
            </ul>
          </div>

          {/* Map Embed */}
          <div className="h-48 rounded-xl overflow-hidden border border-white/10">
            <iframe 
              src="https://www.google.com/maps?q=Notodden,Norway&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {year} Makarenko Reinhold. {t('footer.rights')}
          </p>
          <div className="flex gap-4 text-white/40 text-sm">
            <span>Org.nr: 933 123 456</span>
            <span>|</span>
            <span>HMS-kort påkrevd</span>
          </div>
        </div>
      </div>
    </footer>
  );
}