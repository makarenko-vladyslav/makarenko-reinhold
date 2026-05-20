"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <p className="text-sm font-medium text-text-muted uppercase tracking-wider text-center md:text-left">
          {t('socialProof.text')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Arbeidstilsynet mock logo */}
          <div className="flex items-center gap-2 font-display font-bold text-xl text-primary">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Arbeidstilsynet
          </div>
          {/* Svanemerket mock logo */}
          <div className="flex items-center gap-2 font-display font-bold text-xl text-primary">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            Svanemerket
          </div>
          {/* HMS mock logo */}
          <div className="flex items-center gap-2 font-display font-bold text-xl text-primary">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h10"/></svg>
            HMS-Kort
          </div>
        </div>
      </div>
    </section>
  );
}
