
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./UI/SectionHeading";
import { motion } from "framer-motion";

export default function Advantages() {
  const { t } = useLocale();
  const data = t("advantages") as any;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {data.items.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-bg-light rounded-full flex items-center justify-center mb-6 border border-gray-100 shadow-sm relative">
                <div className="absolute inset-0 border-2 border-accent rounded-full opacity-0 scale-110 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                <span className="text-2xl font-display font-bold text-primary">0{i+1}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
