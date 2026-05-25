
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps") as any[];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("process.badge")}
          title={t("process.title")}
          centered
        />

        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-100">
            <div className="absolute top-0 left-0 h-full bg-accent w-1/2 opacity-30" />
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Number Node */}
                <div className="w-12 h-12 bg-white border-4 border-bg-tint rounded-full flex items-center justify-center text-xl font-display font-bold text-primary shadow-sm relative z-10 mb-6 md:mx-auto">
                  {index + 1}
                </div>
                
                <div className="md:text-center">
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
