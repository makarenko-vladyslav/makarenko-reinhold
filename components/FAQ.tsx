
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function FAQ() {
  const { t } = useLocale();
  const items = t('faq.items') as Array<{q: string, a: string}>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-light">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t('faq.badge')}
          title={t('faq.title')}
          align="center"
        />

        <div className="space-y-4 mt-12">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`bg-white border rounded-2xl overflow-hidden transition-colors ${openIndex === i ? "border-accent" : "border-border hover:border-accent/30"}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-primary pr-8">{item.q}</span>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? "border-accent bg-accent text-white" : "border-border text-text-muted"}`}>
                  <svg className={`w-4 h-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-text-muted leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
