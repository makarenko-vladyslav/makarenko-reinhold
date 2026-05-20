"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 6L6 14v10a2 2 0 002 2h16a2 2 0 002-2V14L16 6z" />
                  <path d="M12 26v-8h8v8" />
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Makarenko Reinhold
              </span>
            </div>
            <p className="text-text-inverse-muted max-w-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('nav.services')}</h4>
            <ul className="space-y-4 text-text-inverse-muted">
              <li><a href="#services" className="hover:text-accent transition-colors">Flyttevask</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Regelmessig Vask</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Kontorvask</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">{t('nav.calculator')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('nav.contact')}</h4>
            <ul className="space-y-4 text-text-inverse-muted">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                <a href={`tel:${t('footer.phone').replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{t('footer.phone')}</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href={`mailto:${t('footer.email')}`} className="hover:text-white transition-colors">{t('footer.email')}</a>
              </li>
              <li className="pt-2 text-sm text-white/40">{t('footer.orgNr')}</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {year} Makarenko Reinhold. {t('footer.rights')}</p>
          <div className="flex items-center gap-2">
            <span>Offentlig godkjent renholdsbedrift</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
