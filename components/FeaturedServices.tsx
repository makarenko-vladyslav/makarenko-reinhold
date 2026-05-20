"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function FeaturedServices() {
  const { t } = useLocale();
  const services = t('services.featured') as any[];

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white rounded-l-[100px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* L-Shape Left: Large Featured Image for the first service */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden group h-[600px] premium-shadow"
          >
            <img 
              src={services[0].image} 
              alt={services[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-4">
                Mest Populær
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-3">{services[0].title}</h3>
              <p className="text-white/80 mb-6">{services[0].description}</p>
              <a href="#calculator" className="inline-flex items-center gap-2 text-accent-light font-bold hover:text-white transition-colors group/link">
                Beregn Pris
                <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </motion.div>

          {/* L-Shape Right: Grid of remaining 3 services */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {services.slice(1).map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 premium-shadow hover:-translate-y-1 transition-all duration-300 group border border-gray-50 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-bg-light flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {/* Custom SVGs based on index */}
                  {idx === 0 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                  {idx === 1 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                  {idx === 2 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" /></svg>}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-muted mb-6 flex-grow">{service.description}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors mt-auto">
                  Les mer
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
