
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function TrustEngineering() {
  const { t } = useLocale();
  const cards = t("trustEngineering.cards") as any[];

  return (
    <section id="trust" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("trustEngineering.badge")}
          title={t("trustEngineering.title")}
          subtitle={t("trustEngineering.subtitle")}
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="dark-glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="text-accent font-display font-bold text-3xl mb-2">{card.value}</div>
              <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
