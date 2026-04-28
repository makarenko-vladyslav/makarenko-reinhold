
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { IconShield, IconCheckCircle, IconLeaf, IconChat } from "./Icons";

const iconMap: Record<string, React.FC<{className?: string}>> = {
  "shield": IconShield,
  "check-circle": IconCheckCircle,
  "leaf": IconLeaf,
  "chat": IconChat
};

export default function WhyUs() {
  const { t } = useLocale();
  const items = t("whyUs.items");

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("whyUs.badge")}
          title={t("whyUs.title")}
          centered
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item: any, index: number) => {
            const Icon = iconMap[item.icon] || IconShield;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel-dark p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6 text-accent">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
