"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";
import { Icons } from "./ui/Icons";

export default function FAQ() {
  const { t } = useLocale();
  const items = t("faq.items") as { question: string; answer: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t("faq.badge")}
          title={t("faq.title")}
          theme="light"
          align="center"
        />

        <div className="mt-16 space-y-4">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i}
                className={`border rounded-2xl transition-colors duration-300 overflow-hidden ${
                  isOpen ? "border-accent bg-bg-light" : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className={`font-bold text-lg pr-8 ${isOpen ? "text-accent" : "text-primary"}`}>
                    {item.question}
                  </span>
                  <div className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : "text-gray-400"}`}>
                    <Icons.chevronDown />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
