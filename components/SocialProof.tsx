"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t("socialProof.items") as string[];

  return (
    <section className="bg-primary border-b border-white/5 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/40 text-sm font-medium uppercase tracking-widest mb-6">
          {t("socialProof.title")}
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/80 font-display font-bold text-lg tracking-wide">
              <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
