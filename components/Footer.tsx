
"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const footer = t("footer") as any;
  const info = t("contact.info") as any;

  return (
    <footer className="bg-primary text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 32 32" fill="none">
                  <path d="M16 6C16 6 10 12 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 12 16 6 16 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  <path d="M16 12L19 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Makarenko<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{footer.linksTitle}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Priskalkulator</a></li>
              <li><a href="#trust" className="hover:text-accent transition-colors">Garanti & Lovlighet</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li>{info.phone}</li>
              <li>{info.email}</li>
              <li>{info.address}</li>
              <li className="text-accent">{info.hours}</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm text-center text-white/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>{footer.legal}</p>
          <div className="flex gap-4">
            <span className="px-2 py-1 border border-white/20 rounded text-xs">Godkjent Renholdsbedrift</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
