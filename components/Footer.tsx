
"use client";
import { useLocale } from "@/lib/i18n";
import { LogoMark } from "./Icons";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded-lg bg-accent text-white">
                <LogoMark className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Makarenko<span className="font-light">Reinhold</span>
              </span>
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed">
              {t('footer.description') as string}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigasjon</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/60 hover:text-accent transition-colors">{t('nav.services') as string}</a></li>
              <li><a href="#calculator" className="text-white/60 hover:text-accent transition-colors">{t('nav.pricing') as string}</a></li>
              <li><a href="#process" className="text-white/60 hover:text-accent transition-colors">{t('nav.process') as string}</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-accent transition-colors">{t('nav.faq') as string}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-4 text-white/60">
              <li>{t('contact.info.phone') as string}</li>
              <li>{t('contact.info.email') as string}</li>
              <li>{t('contact.info.address') as string}</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <div>&copy; {year} Makarenko Reinhold. {t('footer.rights') as string}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Personvern</a>
            <a href="#" className="hover:text-white transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
