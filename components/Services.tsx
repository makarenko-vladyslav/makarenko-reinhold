"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { IconMap } from "./Icons";

export default function Services() {
  const { t } = useLocale();
  const services = t('services.items') as any[];

  return (
    <section id="services" className="py-24 bg-bg-light relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bg-tint to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = IconMap[service.icon] || IconMap['sparkles'];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_-10px_hsl(185_75%_35%/0.15)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                
                <div className="w-14 h-14 bg-bg-tint rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-primary">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{service.description}</p>
                
                <a href="#calculator" className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  Les mer <span aria-hidden="true">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
