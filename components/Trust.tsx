"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Trust() {
  const { t } = useLocale();
  const items = t("trust.items") as Array<{title: string, description: string}>;

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("trust.badge") as string}
          title={t("trust.title") as string}
          subtitle={t("trust.subtitle") as string}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl premium-shadow premium-shadow-hover border border-gray-50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
