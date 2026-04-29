"use client";
import { useLocale } from '@/lib/i18n';
import { LogoMark } from './Icons';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white/60 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 text-white mb-6">
              <div className="p-2 rounded-lg bg-accent/20 text-accent">
                <LogoMark className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl">Makarenko<span className="text-accent">.</span></span>
            </div>
            <p className="max-w-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.links')}</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-accent transition-colors">{t('nav.services')}</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">{t('nav.calculator')}</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-accent transition-colors">Personvern</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Salgsbetingelser</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">HMS & Kvalitet</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>&copy; {year} Makarenko Reinhold. {t('footer.rights')}</div>
          <div className="flex items-center gap-2">
            <span>Org.nr: 933 123 456</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Offentlig godkjent</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
