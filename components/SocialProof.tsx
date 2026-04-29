"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t('socialProof.items') as string[];

  return (
    <section className="py-10 bg-white border-b border-gray-100 relative z-20 rounded-t-3xl -mt-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-text-muted uppercase tracking-widest mb-6">
          {t('socialProof.title')}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          {items.map((item, idx) => (
            <div key={idx} className="text-xl md:text-2xl font-display font-bold text-primary tracking-tight">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
