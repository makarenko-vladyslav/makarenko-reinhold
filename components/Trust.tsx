"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { getIconByName } from "./Icons";

export default function Trust() {
  const { t } = useLocale();
  const items = t('trust.items') as {title: string, desc: string, icon: string}[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('trust.badge')}
          title={t('trust.title')}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-bg-light flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                {getIconByName(item.icon, "w-8 h-8")}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
