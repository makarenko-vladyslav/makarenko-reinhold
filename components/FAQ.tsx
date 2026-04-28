"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function FAQ() {
  const { t } = useLocale();
  const items = t("faq.items") as any[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  return (
    <section id="faq" className="py-24 bg-bg-light relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t("faq.badge")}
          title={t("faq.title")}
          centered
        />

        <div className="mt-12 space-y-4">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold text-primary pr-8">{item.question}</span>
                <span className={`w-8 h-8 rounded-full bg-bg-light flex items-center justify-center text-accent transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-text-muted leading-relaxed border-t border-gray-50 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
