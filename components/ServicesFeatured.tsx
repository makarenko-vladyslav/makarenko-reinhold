
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function ServicesFeatured() {
  const { t } = useLocale();
  const items = t('servicesFeatured.items') as any[];

  return (
    <section id="services" className="section-padding bg-bg-light relative rounded-t-[2.5rem] -mt-6 z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('servicesFeatured.badge')}
          title={t('servicesFeatured.title')}
          subtitle={t('servicesFeatured.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {items.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-bg-white shadow-lg hover:shadow-xl transition-all duration-500 h-[400px]"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center mb-4 text-accent border border-accent/30">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {i === 0 && <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />}
                    {i === 1 && <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />}
                    {i === 2 && <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />}
                    {i === 3 && <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />}
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-bg-white mb-2">{item.title}</h3>
                <p className="text-bg-white/80 line-clamp-2">{item.desc}</p>
                
                <div className="mt-6 overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
                  <span className="inline-flex items-center gap-2 text-accent font-semibold">
                    Les mer <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
