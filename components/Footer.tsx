"use client";
import { useLocale } from '@/lib/i18n';
import { Phone, Envelope, MapPin } from '@phosphor-icons/react';

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white/80 pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 opacity-100">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white">
                <svg width="18" height="18" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 100 L120 200 V400 H392 V200 Z" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" />
                  <path d="M256 240 C220 240 190 270 190 310 C190 360 256 420 256 420 C256 420 322 360 322 310 C322 270 292 240 256 240 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white leading-none">Makarenko</span>
                <span className="font-display font-semibold text-[10px] leading-none tracking-widest uppercase text-white/60">Reinhold</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="text-xs font-bold text-white/50 border border-white/10 inline-block px-3 py-1 rounded">
              Org.nr: 933 123 456
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+4796684393" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone size={20} weight="duotone" className="text-accent" />
                  +47 966 84 393
                </a>
              </li>
              <li>
                <a href="mailto:annadizhenko@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Envelope size={20} weight="duotone" className="text-accent" />
                  annadizhenko@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} weight="duotone" className="text-accent shrink-0 mt-1" />
                <span>Notodden, Telemark<br/>Norge</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">{t('footer.links')}</h4>
            <ul className="space-y-3">
              <li><a href="#tjenester" className="hover:text-accent transition-colors">{t('nav.services')}</a></li>
              <li><a href="#kalkulator" className="hover:text-accent transition-colors">{t('nav.calculator')}</a></li>
              <li><a href="#garanti" className="hover:text-accent transition-colors">{t('nav.guarantee')}</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors">Personvernerklæring</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Salgsbetingelser</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Informasjonskapsler (Cookies)</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {currentYear} Makarenko Reinhold. {t('footer.rights')}</p>
          <p>Designet med presisjon.</p>
        </div>
      </div>
    </footer>
  );
}
