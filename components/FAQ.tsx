"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const kicker = String(t("faq.kicker"));
  const title = String(t("faq.title"));
  const lede = String(t("faq.lede"));
  const items = (t("faq.items") as Array<{ q: string; a: string }>) || [];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
            {kicker}
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            {lede}
          </p>
        </div>

        {/* Full container width accordion */}
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-md overflow-hidden bg-bg-light"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-primary hover:text-accent transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="text-lg font-bold text-accent select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-gray-100 bg-white">
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
