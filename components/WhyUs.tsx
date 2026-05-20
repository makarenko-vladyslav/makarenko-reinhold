"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as { title: string, desc: string }[];

  const icons = [
    // Equipment (Wand/Spray)
    <svg key="1" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.5 9.5L19 5M12 12l-8 8M16 16l4 4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Checklist (List + Check)
    <svg key="2" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Local (Map Pin)
    <svg key="3" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Staff (User + Star)
    <svg key="4" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 11l-2 2 2 2-3-1-3 1 2-2-2-2 3 1z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ];

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('whyUs.badge')}
          title={t('whyUs.title')}
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {icons[i]}
              </div>
              <h3 className="text-lg font-display font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
