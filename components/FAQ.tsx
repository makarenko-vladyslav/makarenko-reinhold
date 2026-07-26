"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = t("faq.questions") as Array<{ q: string; a: string }>;

  return (
    <section id="faq" className="py-24 bg-surface border-t border-border-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
            {String(t("faq.kicker"))}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-main mt-2">
            {String(t("faq.heading"))}
          </h2>
          <p className="text-base text-text-muted mt-3">
            {String(t("faq.subheading"))}
          </p>
        </div>

        <div className="space-y-4">
          {questions && questions.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border-light bg-bg-light overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 font-display font-bold text-base sm:text-lg text-text-main flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span>{item.q}</span>
                  <span className={`w-8 h-8 rounded-full bg-surface border border-border-light flex items-center justify-center font-mono text-xs transition-transform ${isOpen ? "rotate-180 bg-accent text-white border-accent" : ""}`}>
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-text-muted leading-relaxed border-t border-border-light/60 pt-4">
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
