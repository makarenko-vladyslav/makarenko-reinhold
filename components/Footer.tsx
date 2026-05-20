
"use client";
import { useLocale } from '@/lib/i18n';
import { Sparkle, Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react';

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white/70 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white">
                <Sparkle size={24} weight="duotone" />
              </div>
              <div className="flex flex-col text-white">
                <span className="font-display font-bold text-lg leading-none tracking-tight">Makarenko</span>
                <span className="font-display font-semibold text-sm leading-none opacity-80">Reinhold</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              {t('footer.desc') as string}
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-eco"></span>
              Offentlig Godkjent
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold mb-6">{t('footer.contact') as string}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+4796684393" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone size={18} weight="duotone" className="text-accent" />
                  +47 966 84 393
                </a>
              </li>
              <li>
                <a href="mailto:annadizhenko@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <EnvelopeSimple size={18} weight="duotone" className="text-accent" />
                  annadizhenko@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} weight="duotone" className="text-accent shrink-0 mt-0.5" />
                <span>Notodden, Telemark<br/>Norge</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-6">{t('footer.links') as string}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">{t('nav.services') as string}</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">{t('nav.calculator') as string}</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">{t('nav.faq') as string}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-display font-bold mb-6">{t('footer.legal') as string}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Personvernerklæring</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Salgsbetingelser</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">HMS & Kvalitet</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {currentYear} Makarenko Reinhold. {t('footer.rights') as string}</p>
          <p>Org.nr: 932 123 456 (Placeholder)</p>
        </div>
      </div>
    </footer>
  );
}
