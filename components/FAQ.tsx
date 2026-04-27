
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { ChevronDownIcon } from "./Icons";

export default function FAQ() {
  const { t } = useLocale();
  const items = t('faq.items') as Array<{question: string, answer: string}>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading 
          badge={t('faq.badge') as string}
          title={t('faq.title') as string}
        />

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === i ? 'border-accent bg-accent/5' : 'border-gray-200 bg-white hover:border-accent/50'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-primary"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.question}</span>
                <ChevronDownIcon className={`w-5 h-5 text-accent transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
