
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t("socialProof.items") as string[];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-text-muted uppercase tracking-widest mb-8">
          {t("socialProof.title")}
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-primary">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
