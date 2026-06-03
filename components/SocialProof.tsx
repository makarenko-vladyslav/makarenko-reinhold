"use client";
import { useLocale } from "@/lib/i18n";
import { ShieldCheck } from "./Icons";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t('socialProof.items') as string[];

  return (
    <section className="bg-primary-light py-6 border-b border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-12 px-6">
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white/70">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="font-medium tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
