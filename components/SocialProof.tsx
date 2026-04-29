
"use client";
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white rounded-t-3xl -mt-6 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-text-muted uppercase tracking-wider mb-8">
          {t('socialProof.text')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          
          {/* Arbeidstilsynet Mock Logo */}
          <div className="flex items-center gap-2 font-display font-bold text-xl text-primary">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            Arbeidstilsynet
          </div>

          {/* Svanemerket Mock Logo */}
          <div className="flex items-center gap-2 font-display font-bold text-xl text-green-700">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.31-2.69-6-6-6z"/></svg>
            Svanemerket
          </div>

          {/* Gjensidige Mock Logo */}
          <div className="flex items-center gap-2 font-display font-bold text-xl text-blue-800">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
            Gjensidige
          </div>

        </div>
      </div>
    </section>
  );
}
