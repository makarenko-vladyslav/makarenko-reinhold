"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const data = t('process') as any;

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={data.badge}
          title={data.title}
          centered
        />

        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-gray-200 hidden md:block">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {data.steps.map((step: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                {/* Number Node */}
                <div className="w-16 h-16 mx-auto bg-white border-4 border-bg-light rounded-full flex items-center justify-center text-xl font-display font-bold text-primary shadow-lg relative z-10 mb-6 group-hover:border-accent transition-colors">
                  <span className="text-accent">{idx + 1}</span>
                </div>
                
                {/* Content */}
                <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                  <h3 className="text-lg font-display font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
