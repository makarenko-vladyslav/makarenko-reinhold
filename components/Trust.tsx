"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { IconMap } from "./Icons";

export default function Trust() {
  const { t } = useLocale();
  const items = t('trust.items') as any[];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Subtle radial gradient for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('trust.badge')}
          title={t('trust.title')}
          subtitle={t('trust.subtitle')}
          centered
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = IconMap[item.icon] || IconMap['shield-check'];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
