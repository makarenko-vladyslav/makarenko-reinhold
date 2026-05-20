"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as {title: string, desc: string}[];

  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
        />

        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white border-4 border-bg-light shadow-xl rounded-full flex items-center justify-center text-2xl font-display font-bold text-accent mb-6 relative z-10">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
