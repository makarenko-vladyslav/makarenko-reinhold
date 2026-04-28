
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Team() {
  const { t } = useLocale();
  const items = t('team.items') as any[];

  return (
    <section className="section-padding bg-bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('team.badge')}
          title={t('team.title')}
          centered
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-bg-light shadow-lg group-hover:border-accent transition-colors duration-300">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-1">{item.name}</h3>
              <p className="text-accent font-medium">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
