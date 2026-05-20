"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { getIconByName } from "./Icons";

export default function ServicesFeatured() {
  const { t } = useLocale();
  const items = t('servicesFeatured.items') as {id: string, title: string, description: string, icon: string}[];

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('servicesFeatured.badge')}
          title={t('servicesFeatured.title')}
          subtitle={t('servicesFeatured.subtitle')}
        />

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Photo Left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden group min-h-[400px]"
          >
            <img 
              src="https://picsum.photos/seed/cleaning-pro/800/1000" 
              alt="Professional cleaning" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wider mb-3">
                Toppvurdert
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-2">Profesjonelt Utstyr</h3>
              <p className="text-white/80">Vi bruker kun industriell mikrofiber og damprensere for et perfekt resultat.</p>
            </div>
          </motion.div>

          {/* Cards Grid Right */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_hsl(220_40%_15%/0.03)] border border-gray-100 hover:shadow-[0_8px_30px_hsl(220_40%_15%/0.08)] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-bg-light flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {getIconByName(item.icon, "w-7 h-7")}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{item.description}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-dark transition-colors">
                  Les mer
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
