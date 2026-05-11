
"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 6C16 6 10 13.5 10 18.5C10 21.5376 12.6863 24 16 24C19.3137 24 22 21.5376 22 18.5C22 13.5 16 6 16 6Z"/>
                  <path d="M14 16L16 18L20 13"/>
                </svg>
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                Makarenko<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Meny</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/60 hover:text-accent transition-colors">{t('nav.services')}</a></li>
              <li><a href="#calculator" className="text-white/60 hover:text-accent transition-colors">{t('nav.calculator')}</a></li>
              <li><a href="#about" className="text-white/60 hover:text-accent transition-colors">{t('nav.about')}</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-accent transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-4 text-white/60">
              <li>{t('contact.address')}</li>
              <li><a href={`tel:${t('contact.phoneNumber')}`} className="hover:text-accent transition-colors">{t('contact.phoneNumber')}</a></li>
              <li><a href={`mailto:${t('contact.emailAddress')}`} className="hover:text-accent transition-colors">{t('contact.emailAddress')}</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {year} Makarenko Reinhold. {t('footer.rights')}
          </p>
          <div className="flex gap-4 text-white/40 text-sm">
            <span>Org.nr: 933 123 456</span>
            <span>Offentlig Godkjent</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
