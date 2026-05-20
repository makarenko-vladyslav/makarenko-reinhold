
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import * as PhosphorIcons from "@phosphor-icons/react";

export default function WhyUs() {
  const { t } = useLocale();
  const cards = t("whyUs.cards") as Array<{title: string, desc: string, icon: string}>;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t("whyUs.badge") as string} title={t("whyUs.title") as string} centered />
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {cards.map((card, i) => {
            const Icon = (PhosphorIcons as any)[card.icon] || PhosphorIcons.CheckCircle;
            return (
              <motion.div 
                key={i}
                variants={item}
                className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-premium-hover transition-all duration-300 group border border-border"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-surface transition-colors">
                  <Icon size={32} weight="duotone" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{card.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
