"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Advantages() {
  const { t } = useLocale();
  const items = t("advantages.items");

  const icons = [
    // Shield
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Leaf
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12M12 12C9 12 6 9 6 6M12 12c3 0 6-3 6-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Steam/Sparkle
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Map Pin
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("advantages.badge")}
          title={t("advantages.title")}
          centered={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-alt rounded-3xl p-8 border border-gray-100 group hover:bg-primary hover:border-primary transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white text-accent flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {icons[i]}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-white transition-colors duration-300">{item.title}</h3>
              <p className="text-text-muted group-hover:text-white/80 transition-colors duration-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
