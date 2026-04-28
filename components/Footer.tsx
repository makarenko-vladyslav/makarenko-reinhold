"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const info = t("contact.info") as any;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 32 32" className="w-8 h-8 text-accent">
                <rect width="32" height="32" rx="8" fill="currentColor" />
                <path d="M16 6 L21 14 L28 16 L21 18 L16 26 L11 18 L4 16 L11 14 Z" fill="white" />
                <circle cx="22" cy="10" r="2.5" fill="hsl(215, 40%, 15%)" />
              </svg>
              <span className="font-display font-bold text-xl tracking-tight">Makarenko<br/><span className="text-sm text-accent leading-none block">Reinhold</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navigasjon</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#services" className="hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Priskalkulator</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Kontakt</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>{info.phone}</li>
              <li>{info.email}</li>
              <li>{info.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Sertifiseringer</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Offentlig Godkjent</li>
              <li>Svanemerket Kjemi</li>
              <li>HMS-Kort påkrevd</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {currentYear} Makarenko Reinhold. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Personvern</a>
            <a href="#" className="hover:text-white transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
