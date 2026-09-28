"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = (t("faq.items") as FAQItem[]) || [];

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="scroll-mt-20 py-20 bg-[hsl(195_25%_98%)] border-t border-[hsl(204_20%_88%)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
            {t("faq.kicker") as string}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
            {t("faq.title") as string}
          </h2>
          <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed font-light">
            {t("faq.subtitle") as string}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[hsl(0_0%_100%)] border border-[hsl(204_20%_88%)] rounded-xl overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-lg text-[hsl(204_35%_15%)] hover:text-[hsl(158_64%_38%)] transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="text-xl font-mono text-[hsl(158_64%_38%)] shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[hsl(204_15%_42%)] leading-relaxed font-light border-t border-[hsl(204_20%_92%)]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
