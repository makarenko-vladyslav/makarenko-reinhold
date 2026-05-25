"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const { t } = useLocale();
  const items = t("faq.items") as { question: string, answer: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-light border-y border-border-light">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading badge={t("faq.badge")} title={t("faq.title")} />

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-border-light overflow-hidden transition-shadow hover:shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-primary text-lg pr-8">{item.question}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? "bg-accent text-white" : "bg-bg-light text-text-muted"}`}>
                  <svg className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-muted leading-relaxed border-t border-border-light/50 mt-2">
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
