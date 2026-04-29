"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";
import { Icons } from "./ui/Icons";

export default function Services() {
  const { t } = useLocale();
  const items = t("services.items") as { id: string; title: string; description: string; icon: keyof typeof Icons }[];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden rounded-t-[2.5rem] -mt-8 z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("services.badge")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          theme="light"
          align="center"
        />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((service) => {
            const Icon = Icons[service.icon] || Icons.home;
            return (
              <motion.div 
                key={service.id}
                variants={item}
                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full transition-transform group-hover:scale-110" />
                
                <div className="w-14 h-14 rounded-2xl bg-bg-light flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <div className="w-7 h-7">
                    <Icon />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{service.description}</p>
                
                <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all">
                  Les mer <Icons.arrowRight />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">
            {t("services.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
