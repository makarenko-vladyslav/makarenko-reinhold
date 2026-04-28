
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t('socialProof.items') as string[];

  return (
    <section className="py-8 bg-primary-light border-b border-bg-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-bg-white/50 text-sm font-medium uppercase tracking-widest mb-6">
          {t('socialProof.text')}
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-bg-white font-display font-bold tracking-wide"
            >
              <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
