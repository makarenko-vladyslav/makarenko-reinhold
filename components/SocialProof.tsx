"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  
  const logos = [
    "Arbeidstilsynet", "Svanemerket", "Gjensidige", "Renholdsregisteret", "HMS-Kort", "NHO Service"
  ];

  return (
    <section className="bg-bg-light py-12 border-b border-gray-200 relative z-20 -mt-4 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-text-muted font-medium mb-8">{t("socialProof.text")}</p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-display font-bold text-xl text-primary tracking-tight">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}