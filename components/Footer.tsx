
"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white font-display font-bold text-xl">
                MR
              </div>
              <div className="font-display font-bold text-xl tracking-tight text-white">
                Makarenko <span className="font-light">Reinhold</span>
              </div>
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Snarveier</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Om Oss</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Anmeldelser</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4 text-white/60">
              <li>{t('contact.info.phone')}</li>
              <li>{t('contact.info.email')}</li>
              <li>{t('contact.info.address')}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <div>&copy; {year} Makarenko Reinhold. {t('footer.rights')}</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Personvern</a>
            <a href="#" className="hover:text-white transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
