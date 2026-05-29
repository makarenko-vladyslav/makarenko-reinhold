
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const { t } = useLocale();
  const items = t("faq.items") as any[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t("faq.badge")}
          title={t("faq.title")}
          centered
        />

        <div className="mt-12 space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-colors ${
                openIndex === index ? "border-accent bg-accent/5" : "border-gray-200 bg-white hover:border-accent/30"
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-primary pr-8">{item.question}</span>
                <svg 
                  className={`w-5 h-5 text-accent shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-text-muted leading-relaxed">
                      {item.answer}
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
