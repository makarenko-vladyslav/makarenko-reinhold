"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function FeaturedServices() {
  const { t } = useLocale();
  const items = t('featuredServices.items') as { title: string, desc: string }[];

  const icons = [
    // Flyttevask (Box + Sparkles)
    <svg key="1" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 4l2-2m0 0l2 2m-2-2v4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Regelmessig (Calendar + Sparkle)
    <svg key="2" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 16l2-2m0 0l2 2m-2-2v4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Kontorvask (Building + Sparkle)
    <svg key="3" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5a2 2 0 012-2h2a2 2 0 012 2v5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="15" cy="11" r="1" fill="currentColor"/>
    </svg>,
    // Visningsvask (Eye/House)
    <svg key="4" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8v.01" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ];

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white clip-path-diagonal opacity-50 pointer-events-none" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('featuredServices.badge')}
          title={t('featuredServices.title')}
          subtitle={t('featuredServices.subtitle')}
        />

        <div className="grid lg:grid-cols-12 gap-12 items-stretch mt-12">
          {/* L-Shape Left: Tall Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl h-[600px] lg:h-auto hidden md:block"
          >
            <img 
              src="https://picsum.photos/seed/professional-cleaner/800/1200" 
              alt="Professional cleaner" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-panel-dark p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <span className="text-white font-bold">Klar for oppdrag</span>
                </div>
                <p className="text-white/80 text-sm">Våre team er utstyrt med alt nødvendig materiell og klare til å rykke ut i hele Telemark.</p>
              </div>
            </div>
          </motion.div>

          {/* L-Shape Right: 2x2 Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-accent/20 transition-all group relative overflow-hidden"
              >
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-0 pointer-events-none" />
                
                <div className="w-14 h-14 rounded-2xl bg-bg-light flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-6 relative z-10">
                  {icons[i]}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3 relative z-10">{item.title}</h3>
                <p className="text-text-muted leading-relaxed relative z-10">{item.desc}</p>
                
                <div className="mt-6 flex items-center text-accent font-semibold text-sm group-hover:translate-x-2 transition-transform relative z-10">
                  Les mer
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
