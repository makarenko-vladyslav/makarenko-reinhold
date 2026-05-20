
"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-surface/70 py-16 border-t border-surface/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-surface">
                <svg width="18" height="18" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 14L16 28v22h32V28L32 14z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M26 36c0-3.3 5-10 6-10s6 6.7 6 10a6 6 0 0 1-12 0z" fill="currentColor" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-surface">Makarenko Reinhold</span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed">
              {t("footer.desc") as string}
            </p>
          </div>

          <div>
            <h4 className="text-surface font-bold mb-6">{t("footer.links") as string}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Priskalkulator</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-surface font-bold mb-6">{t("footer.legal") as string}</h4>
            <ul className="space-y-3 text-sm">
              <li>Org. nr: 933 123 456</li>
              <li>Offentlig godkjent renholdsbedrift</li>
              <li>Ansvarsforsikret opptil 10M NOK</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {year} Makarenko Reinhold. {t("footer.rights") as string}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-surface transition-colors">Personvern</a>
            <a href="#" className="hover:text-surface transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
