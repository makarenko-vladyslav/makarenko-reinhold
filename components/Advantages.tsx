
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Advantages() {
  const { t } = useLocale();
  const items = t("advantages.items") as any[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("advantages.badge")}
          title={t("advantages.title")}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
              
              <div className="pt-8">
                <div className="text-4xl font-display font-bold text-gray-100 mb-4 group-hover:text-accent/20 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
