
"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const footer = t("footer") as any;

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 6C16 6 10 12 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 12 16 6 16 6Z" />
                  <path d="M16 14L16 20M13 17L19 17" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none tracking-tight">Makarenko</span>
                <span className="text-xs font-medium tracking-widest uppercase text-accent">Reinhold</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {footer.desc}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">{footer.linksTitle}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#services" className="hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Priskalkulator</a></li>
              <li><a href="#trust" className="hover:text-accent transition-colors">Om oss</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">{footer.legalTitle}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Offentlig Godkjent
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                HMS-kort
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Ansvarsforsikring
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div>© {new Date().getFullYear()} Makarenko Reinhold. {footer.rights}</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Personvern</a>
            <a href="#" className="hover:text-white transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
