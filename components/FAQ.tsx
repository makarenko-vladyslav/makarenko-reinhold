
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { CaretDown } from "@phosphor-icons/react";

export default function FAQ() {
  const { t } = useLocale();
  const items = t("faq.items") as Array<{q: string, a: string}>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading badge={t("faq.badge") as string} title={t("faq.title") as string} centered />
        
        <div className="mt-12 space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border border-border rounded-2xl overflow-hidden bg-bg-light">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-primary pr-8">{item.q}</span>
                <CaretDown 
                  size={20} 
                  weight="bold" 
                  className={`text-accent shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-muted text-sm leading-relaxed border-t border-border/50">
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
