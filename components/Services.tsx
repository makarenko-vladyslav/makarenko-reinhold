
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { SprayIcon, SparkleIcon, BuildingIcon, LeafIcon, ArrowRightIcon } from "./Icons";

const iconMap: Record<string, React.ReactNode> = {
  spray: <SprayIcon />,
  sparkle: <SparkleIcon />,
  building: <BuildingIcon />,
  leaf: <LeafIcon />
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as Array<{id: string, title: string, description: string, icon: string}>;

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-bg-light rounded-l-[100px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('services.badge') as string}
          title={t('services.title') as string}
          subtitle={t('services.subtitle') as string}
        />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Large Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-full min-h-[500px] relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={t('services.imageUrl') as string} 
              alt="Cleaning Service" 
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('img-fallback') }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl">
              <div className="text-primary font-bold text-xl mb-2">Makarenko Reinhold</div>
              <div className="text-text-muted text-sm">Din lokale ekspert i Notodden</div>
            </div>
          </motion.div>

          {/* Right: 2x2 Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-bg-light text-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    <div className="w-7 h-7">
                      {iconMap[item.icon]}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-6">{item.description}</p>
                  
                  <a href="#calculator" className="inline-flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-3 transition-all">
                    Les mer <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
