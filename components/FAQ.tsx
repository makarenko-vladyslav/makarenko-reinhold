
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./UI/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const { t } = useLocale();
  const data = t("faq") as any;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
        />

        <div className="space-y-4 mt-12">
          {data.items.map((item: any, i: number) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-bg-light/50">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-bold text-primary pr-8">{item.question}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? "bg-accent text-white" : "bg-white text-primary shadow-sm"}`}>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
                    <div className="px-6 pb-6 pt-2 text-text-muted border-t border-gray-100/50">
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
