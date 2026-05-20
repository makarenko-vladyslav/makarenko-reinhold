"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();
  const footer = t('footer') as any;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white/70 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.svg.org/2000/svg">
                  <path d="M12 4.5C12 4.5 7.5 9 7.5 13.5C7.5 15.9853 9.51472 18 12 18C14.4853 18 16.5 15.9853 16.5 13.5C16.5 9 12 4.5 12 4.5Z" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none text-white">Makarenko</span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-accent">Reinhold</span>
              </div>
            </a>
            <p className="max-w-sm leading-relaxed mb-6">
              {footer.desc}
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <span className="bg-white/10 px-3 py-1 rounded text-white">Offentlig Godkjent</span>
              <span className="bg-white/10 px-3 py-1 rounded text-white">HMS-Kort</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{footer.links}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Priskalkulator</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{footer.legal}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors">Personvernerklæring</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Salgsbetingelser</a></li>
              <li className="pt-4 text-white/50 text-sm">{footer.org}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div>&copy; {currentYear} Makarenko Reinhold. {footer.rights}</div>
          <div>Laget med presisjon for Notodden.</div>
        </div>
      </div>
    </footer>
  );
}