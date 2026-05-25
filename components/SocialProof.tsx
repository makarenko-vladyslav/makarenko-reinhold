
"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  
  return (
    <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="text-sm font-semibold text-text-muted uppercase tracking-wider">
          {t("socialProof.title")}
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {/* Logo 1: Arbeidstilsynet (Text representation for SVG) */}
          <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="font-display font-bold text-xl text-primary">Arbeidstilsynet</span>
          </div>
          
          {/* Logo 2: Gjensidige */}
          <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2"/>
            </svg>
            <span className="font-display font-bold text-xl text-primary">Gjensidige</span>
          </div>

          {/* Logo 3: Svanemerket */}
          <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/>
            </svg>
            <span className="font-display font-bold text-xl text-primary">Svanemerket</span>
          </div>

          {/* Logo 4: HMS */}
          <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <div className="px-3 py-1 border-2 border-primary rounded font-bold text-primary">HMS</div>
            <span className="font-display font-bold text-xl text-primary">Kort</span>
          </div>
          
          {/* Duplicate for infinite loop */}
          <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="font-display font-bold text-xl text-primary">Arbeidstilsynet</span>
          </div>
          <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2"/>
            </svg>
            <span className="font-display font-bold text-xl text-primary">Gjensidige</span>
          </div>
        </div>
      </div>
    </section>
  );
}
