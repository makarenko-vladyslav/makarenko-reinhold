
"use client";
import { useLocale } from "@/lib/i18n";

export default function TrustStrip() {
  const { t } = useLocale();
  const items = t("trustStrip") as string[];

  return (
    <div className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 font-bold text-sm tracking-wide text-primary">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
