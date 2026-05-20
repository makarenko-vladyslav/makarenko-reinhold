"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Process() {
  const { t } = useLocale();
  const processData = t('process') as any;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={processData.badge}
          title={processData.title}
          centered
        />

        <div className="mt-16 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {processData.steps.map((step: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-bold text-accent shadow-md border-4 border-bg-light mx-auto mb-6 relative z-10">
                  {idx + 1}
                </div>
                <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                  <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
