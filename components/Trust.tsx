"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Trust() {
  const { t } = useLocale();
  const items = t('trust.items') as { title: string, desc: string }[];

  return (
    <section id="trust" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('trust.badge')}
          title={t('trust.title')}
          subtitle={t('trust.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-3xl bg-bg-light hover:bg-white hover:shadow-xl hover:shadow-primary/5 border border-transparent hover:border-gray-100 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
