"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function TrustEngineering() {
  const { t } = useLocale();
  const cards = t("trustEngineering.cards") as any[];

  return (
    <section id="trust" className="py-24 bg-bg-tint relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("trustEngineering.badge")}
          title={t("trustEngineering.title")}
          subtitle={t("trustEngineering.subtitle")}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-display font-bold text-primary mb-2">{card.value}</div>
              <h3 className="text-lg font-bold text-text-main mb-3">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
