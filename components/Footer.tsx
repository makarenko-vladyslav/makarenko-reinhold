"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white/80 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 text-white">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="currentColor" />
                <path d="M16 6L26 12V22L16 28L6 22V12L16 6Z" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M16 12V22M11 15L16 18L21 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-display font-bold text-xl tracking-tight">Makarenko <span className="font-normal opacity-80">Reinhold</span></span>
            </a>
            <p className="text-white/60 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="mt-8 flex gap-4">
              {/* Trust Badges in Footer */}
              <div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-bold text-white/80">Arbeidstilsynet Godkjent</div>
              <div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-bold text-white/80">HMS-kort</div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-accent transition-colors">Tjenester</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Priskalkulator</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Om Oss</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-accent transition-colors">Personvernerklæring</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Brukervilkår</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Informasjonskapsler</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {year} Makarenko Reinhold. {t('footer.rights')}</p>
          <p>Org.nr: 933 659 101</p>
        </div>
      </div>
    </footer>
  );
}
