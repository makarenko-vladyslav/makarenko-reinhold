"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { CheckIcon } from "./Icons";

export default function WhyUs() {
  const { t } = useLocale();
  const items: any[] = t("whyUs.items");

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-light rounded-l-[100px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("whyUs.badge")}
          title={t("whyUs.title")}
          subtitle={t("whyUs.subtitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-bg-light border border-gray-100 group hover:bg-primary hover:border-primary transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-white/10 group-hover:text-white transition-colors">
                <CheckIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-text-muted group-hover:text-white/80 transition-colors leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}