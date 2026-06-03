"use client";
import { useLocale } from "@/lib/i18n";
import { LogoMark } from "./Icons";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/70 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-xl text-white mb-6">
              <LogoMark className="w-8 h-8 text-accent" />
              Makarenko Reinhold
            </a>
            <p className="text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Arbeidstilsynet_logo.svg/512px-Arbeidstilsynet_logo.svg.png" alt="Arbeidstilsynet" className="h-8 opacity-80 invert" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.links')}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">{t('nav.services')}</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">{t('nav.calculator')}</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('contact.badge')}</h4>
            <ul className="space-y-3 text-sm">
              <li>{t('contact.info.phone')}</li>
              <li>{t('contact.info.email')}</li>
              <li>{t('contact.info.address')}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t('footer.legal')}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {year} Makarenko Reinhold. {t('footer.rights')}</p>
          <p>Org. nr: 933 123 456</p>
        </div>
      </div>
    </footer>
  );
}
