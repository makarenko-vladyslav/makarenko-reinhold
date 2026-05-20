"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const { t } = useLocale();
  const items = t("faq.items") as Array<{question: string, answer: string}>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-light border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t("faq.badge") as string}
          title={t("faq.title") as string}
          centered
        />

        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden premium-shadow-hover transition-shadow"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-primary text-lg pr-8">{item.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === index ? "bg-accent text-white" : "bg-bg-light text-primary"}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-text-muted leading-relaxed">
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
