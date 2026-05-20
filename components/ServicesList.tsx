"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function ServicesList() {
  const { t } = useLocale();
  const items = t("servicesList.items") as string[];

  return (
    <section className="py-24 bg-bg-tint border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div>
            <SectionHeading 
              badge={t("servicesList.badge") as string}
              title={t("servicesList.title") as string}
              subtitle={t("servicesList.subtitle") as string}
            />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            {items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 10) * 0.05 }}
                className="flex items-center gap-3 py-3 border-b border-gray-200/60 group hover:border-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors flex-shrink-0">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-medium text-primary group-hover:text-accent transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
