"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t('socialProof.items') as string[];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-text-muted uppercase tracking-wider mb-6">
          {t('socialProof.title')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <div className="w-8 h-8 rounded-full bg-bg-light flex items-center justify-center text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display font-bold text-primary tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
