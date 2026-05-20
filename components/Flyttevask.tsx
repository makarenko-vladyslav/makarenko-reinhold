
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { CheckCircle } from "@phosphor-icons/react";

export default function Flyttevask() {
  const { t } = useLocale();
  const points = t("flyttevask.points") as string[];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-premium">
              <img 
                src="https://picsum.photos/seed/flyttevask/800/1000" 
                alt="Flyttevask" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            {/* Floating Guarantee Badge */}
            <div className="absolute -bottom-6 -right-6 bg-surface p-6 rounded-2xl shadow-premium border border-border max-w-[200px]">
              <div className="text-accent font-bold text-4xl mb-1">100%</div>
              <div className="text-primary font-bold text-sm leading-tight">Godkjennings-garanti</div>
            </div>
          </motion.div>

          <div>
            <SectionHeading badge={t("flyttevask.badge") as string} title={t("flyttevask.title") as string} />
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              {t("flyttevask.desc") as string}
            </p>
            
            <ul className="space-y-4 mb-10">
              {points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={24} weight="fill" className="text-accent shrink-0 mt-0.5" />
                  <span className="text-primary font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>

            <a href="#calculator" className="inline-block bg-primary text-surface px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors">
              Beregn pris for flyttevask
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
