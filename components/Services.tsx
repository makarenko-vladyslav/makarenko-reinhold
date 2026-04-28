
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { IconHouseSparkle, IconCalendarCheck, IconOffice, IconBed } from "./Icons";

const iconMap: Record<string, React.FC<{className?: string}>> = {
  "house-sparkle": IconHouseSparkle,
  "calendar-check": IconCalendarCheck,
  "office-building": IconOffice,
  "bed-clean": IconBed
};

export default function Services() {
  const { t } = useLocale();
  const services = t("services.items");

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("services.badge")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          centered
        />

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Tall Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px] lg:min-h-full group"
          >
            <img 
              src={t("services.imageUrl")} 
              alt="Cleaning Professional" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-panel p-6 rounded-2xl">
                <p className="font-bold text-primary text-xl mb-2">Svanemerket Kvalitet</p>
                <p className="text-text-muted text-sm">Vi bruker kun sertifiserte, miljøvennlige produkter for din trygghet.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: 2x2 Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {services.map((service: any, index: number) => {
              const Icon = iconMap[service.icon] || IconHouseSparkle;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Card Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-bg-light flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-text-muted leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
