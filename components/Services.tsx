"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { SprayIcon, SparkleIcon, BoxBroomIcon, WindowIcon } from "./Icons";

const iconMap: Record<string, React.ReactNode> = {
  spray: <SprayIcon className="w-8 h-8" />,
  sparkle: <SparkleIcon className="w-8 h-8" />,
  box: <BoxBroomIcon className="w-8 h-8" />,
  window: <WindowIcon className="w-8 h-8" />,
};

export default function Services() {
  const { t } = useLocale();
  const items: any[] = t("services.items");

  return (
    <section id="services" className="section-padding bg-bg-light relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white rounded-l-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Image & Text */}
          <div className="lg:col-span-5">
            <SectionHeading 
              badge={t("services.badge")}
              title={t("services.title")}
              subtitle={t("services.subtitle")}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl mt-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800" 
                alt="Professional cleaner" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shrink-0">
                    <SparkleIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted font-medium">Vi bruker kun</p>
                    <p className="font-bold text-primary">Miljøvennlige Produkter</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] hover:border-accent/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover gradient shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-16 h-16 rounded-2xl bg-bg-light flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300 mb-6">
                  {iconMap[item.icon]}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
