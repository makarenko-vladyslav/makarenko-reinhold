"use client";
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();
  
  return (
    <section className="py-12 bg-bg-light border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold tracking-widest text-text-muted uppercase mb-8">
          {t('socialProof.text')}
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Custom SVG Logos representing certifications/partners */}
          <div className="flex items-center gap-3 font-display font-bold text-xl text-primary">
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            HMS-KORT
          </div>
          <div className="flex items-center gap-3 font-display font-bold text-xl text-primary">
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            IF Forsikring
          </div>
          <div className="flex items-center gap-3 font-display font-bold text-xl text-primary">
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6V6z"/></svg>
            EcoCert
          </div>
        </div>
      </div>
    </section>
  );
}
