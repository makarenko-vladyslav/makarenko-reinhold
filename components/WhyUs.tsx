"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { IconMap } from "./Icons";

export default function WhyUs() {
  const { t } = useLocale();
  const items = t("whyUs.items") as Array<{title: string, description: string, icon: string}>;

  return (
    <section id="why-us" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("whyUs.badge") as string}
          title={t("whyUs.title") as string}
          subtitle={t("whyUs.subtitle") as string}
          light
        />

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                {IconMap[item.icon]}
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
