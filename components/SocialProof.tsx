
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { MapPinIcon } from "./Icons";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t('socialProof.items') as string[];

  return (
    <section className="py-8 bg-bg-light border-b border-gray-200 relative z-30 -mt-4 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold text-text-muted uppercase tracking-wider mb-6">
          {t('socialProof.text') as string}
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-text-main font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              <MapPinIcon className="w-4 h-4 text-accent" />
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
