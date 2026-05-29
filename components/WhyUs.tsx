
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function WhyUs() {
  const { t } = useLocale();
  const items = t("whyUs.items") as any[];

  const icons = [
    // Owners do work (Handshake/Person)
    <svg key="1" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Eco (Leaf)
    <svg key="2" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12M12 12c-3-3-6-3-6-3s3-3 6-3 3 3 6 3-3 3-6 3z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Fixed Price (Tag/Money)
    <svg key="3" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Punctuality (Clock)
    <svg key="4" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("whyUs.badge")}
          title={t("whyUs.title")}
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-bg-tint rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                {icons[index]}
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
