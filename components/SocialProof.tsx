"use client";

import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();

  const items = t("socialProof.items") as Array<{ title: string; subtitle: string }>;

  return (
    <section className="bg-primary py-10 border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            {String(t("socialProof.badgeTitle"))}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items && items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div className="text-accent font-display font-extrabold text-lg sm:text-xl mb-1">
                {item.title}
              </div>
              <div className="text-xs text-white/75 font-medium">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
