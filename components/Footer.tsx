"use client";
import { useLocale } from '@/lib/i18n';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLocale();
  const footerData = t('footer') as any;
  const contactInfo = t('contact.info') as any;

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M16 6 L18 12 L24 14 L18 16 L16 22 L14 16 L8 14 L14 12 Z" fill="currentColor" stroke="none" />
                  <path d="M22 20 L23 23 L26 24 L23 25 L22 28 L21 25 L18 24 L21 23 Z" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-tight text-white">Makarenko</span>
                <span className="font-display font-semibold text-sm leading-tight tracking-widest uppercase text-accent">Reinhold</span>
              </div>
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed">
              {footerData.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{footerData.quickLinks}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/60 hover:text-accent transition-colors">{t('nav.services')}</a></li>
              <li><a href="#calculator" className="text-white/60 hover:text-accent transition-colors">{t('nav.calculator')}</a></li>
              <li><a href="#about" className="text-white/60 hover:text-accent transition-colors">{t('nav.about')}</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-accent transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('nav.contact')}</h4>
            <ul className="space-y-3">
              <li className="text-white/60">{contactInfo.address}</li>
              <li><a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-white/60 hover:text-accent transition-colors">{contactInfo.phone}</a></li>
              <li><a href={`mailto:${contactInfo.email}`} className="text-white/60 hover:text-accent transition-colors">{contactInfo.email}</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Makarenko Reinhold. {footerData.rights}
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">{footerData.legal}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
