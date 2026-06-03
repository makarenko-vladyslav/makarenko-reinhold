"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as any[];

  return (
    <section className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
          subtitle={t('process.subtitle')}
          centered
        />

        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-display font-bold text-xl shadow-lg border-4 border-bg-tint">
                  {i + 1}
                </div>
                <h4 className="text-lg font-bold text-primary mt-4 mb-3">{step.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
