"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "./Shared";
import { IdIcon, LeafIcon, ShieldIcon, MapIcon } from "./Icons";

const iconMap: Record<string, React.ElementType> = {
  id: IdIcon,
  leaf: LeafIcon,
  shield: ShieldIcon,
  map: MapIcon,
};

export default function Trust() {
  const { t } = useLocale();
  const items = t("trust.items") as { title: string; desc: string; icon: string }[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge={t("trust.badge")}
          title={t("trust.title")}
          subtitle={t("trust.subtitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldIcon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-bg-light flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
