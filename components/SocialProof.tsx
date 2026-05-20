"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t('socialProof.items') as { title: string, desc: string }[];

  const icons = [
    // Arbeidstilsynet (Building/Gov)
    <svg key="1" className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5a2 2 0 012-2h2a2 2 0 012 2v5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // HMS-kort (ID Card)
    <svg key="2" className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 10h5M14 14h3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // 10M Forsikring (Shield)
    <svg key="3" className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Svanemerket (Leaf/Eco)
    <svg key="4" className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12c1.5-1 3-1.5 5-1.5s3.5.5 5 1.5c0 3-4 5-5 5s-5-2-5-5z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 10.5V7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center text-center ${i !== 0 ? 'pl-8' : ''}`}
            >
              <div className="mb-4 p-3 rounded-2xl bg-bg-light">
                {icons[i]}
              </div>
              <h4 className="font-display font-bold text-primary mb-1">{item.title}</h4>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
