
"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const data = t("footer") as any;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M16 6C16 6 11 14 11 18C11 20.7614 13.2386 23 16 23C18.7614 23 21 20.7614 21 18C21 14 16 6 16 6Z" />
                  <circle cx="22" cy="12" r="2" fill="currentColor" stroke="none" />
                  <circle cx="10" cy="10" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Makarenko<span className="text-accent">.</span></span>
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed">{data.description}</p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Snarveier</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Priskalkulator</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Sertifiseringer</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Arbeidstilsynet Godkjent
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                HMS-Kort
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Svanemerket Kjemi
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {currentYear} Makarenko Reinhold. {data.rights}</p>
          <p>Designet med presisjon.</p>
        </div>
      </div>
    </footer>
  );
}
