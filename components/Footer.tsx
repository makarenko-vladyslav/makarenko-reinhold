"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white">
                <svg viewBox="0 0 32 32" className="w-6 h-6">
                  <path d="M16 8L22 14L16 20L10 14L16 8Z" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinejoin="round"/>
                  <path d="M16 14L22 20L16 26L10 20L16 14Z" stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Makarenko<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Snarveier</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/60 hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#calculator" className="text-white/60 hover:text-accent transition-colors">Priskalkulator</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-accent transition-colors">Ofte stilte spørsmål</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-accent transition-colors">Kontakt oss</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-4 text-white/60">
              <li>Notodden, Telemark</li>
              <li>+47 966 84 393</li>
              <li>annadizhenko@gmail.com</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Makarenko Reinhold. {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Personvern</a>
            <a href="#" className="hover:text-white transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
