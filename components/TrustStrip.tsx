
"use client";
import { useLocale } from "@/lib/i18n";

export default function TrustStrip() {
  const { t } = useLocale();
  const items = t('trust.items') as string[];

  return (
    <section className="bg-primary-light py-6 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 items-center text-white/80 text-sm font-medium">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
