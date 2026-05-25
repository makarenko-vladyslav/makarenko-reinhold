"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t("socialProof.items") as string[];

  return (
    <section className="bg-white py-8 border-b border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {/* Double array for infinite scroll effect */}
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-text-main tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
