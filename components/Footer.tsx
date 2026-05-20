"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
                <path d="M16 6C16 6 10 12 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 12 16 6 16 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              </svg>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Makarenko <span className="text-accent">Reinhold</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Snarveier</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/60 hover:text-accent transition-colors text-sm">Tjenester</a></li>
              <li><a href="#calculator" className="text-white/60 hover:text-accent transition-colors text-sm">Priskalkulator</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-accent transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Tjenester</h4>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">Flyttevask</li>
              <li className="text-white/60 text-sm">Regelmessig vask</li>
              <li className="text-white/60 text-sm">Kontorvask</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">{t("contact.info.phone")}</li>
              <li className="text-white/60 text-sm">{t("contact.info.email")}</li>
              <li className="text-white/60 text-sm">{t("contact.info.address")}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {year} Makarenko Reinhold. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4 text-white/40 text-sm">
            <span>Org.nr: 932 841 933</span>
            <span>•</span>
            <span>Godkjent Renholdsbedrift</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
