"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-text-muted uppercase tracking-widest mb-6">
          {t("socialProof.title") as string}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Arbeidstilsynet Text Logo */}
          <div className="text-xl font-display font-bold tracking-tight text-primary">
            Arbeidstilsynet
          </div>
          {/* Svanemerket Text Logo */}
          <div className="flex items-center gap-2 font-bold text-primary text-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Svanemerket
          </div>
          {/* HMS Kort Text Logo */}
          <div className="flex items-center gap-2 font-bold text-primary text-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 15h4M7 9h.01M17 15h-4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            HMS Kort
          </div>
        </div>
      </div>
    </section>
  );
}
