"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { Icons } from "./Icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Services() {
  const { t } = useLocale();
  const featured = t('services.featured') as any[];
  const allServices = t('services.allServices') as string[];
  const [showAll, setShowAll] = useState(false);

  const getIcon = (id: string) => {
    switch(id) {
      case 'flyttevask': return <Icons.Move className="w-8 h-8" />;
      case 'regelmessig': return <Icons.Home className="w-8 h-8" />;
      case 'kontor': return <Icons.Office className="w-8 h-8" />;
      case 'visning': return <Icons.Sparkle className="w-8 h-8" />;
      default: return <Icons.Check className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          centered
        />

        {/* L-Shape Layout for Featured Services (Pattern 9 adapted) */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Main Featured Image/Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden group min-h-[400px]"
          >
            <img 
              src={featured[0].image} 
              alt={featured[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                {getIcon(featured[0].icon)}
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-3">{featured[0].title}</h3>
              <p className="text-white/80 mb-6">{featured[0].desc}</p>
              <a href="#calculator" className="inline-flex items-center gap-2 text-accent font-bold hover:text-white transition-colors">
                Beregn pris <Icons.ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Grid for other featured */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {featured.slice(1).map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all group"
              >
                <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-muted text-sm mb-6">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:text-accent transition-colors">
                  Kontakt oss <Icons.ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full Catalog Toggle */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h3 className="text-2xl font-display font-bold text-primary">{t('services.allServicesTitle')}</h3>
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-accent font-bold flex items-center gap-2"
            >
              {showAll ? 'Skjul liste' : 'Se hele listen'} 
              <motion.div animate={{ rotate: showAll ? 180 : 0 }}>
                <Icons.ArrowRight className="w-4 h-4" />
              </motion.div>
            </button>
          </div>
          
          <motion.div 
            initial={false}
            animate={{ height: showAll ? 'auto' : '0px', opacity: showAll ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 pt-4 border-t border-gray-100">
              {allServices.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-text-main">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
