"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps") as Array<{title: string, desc: string}>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("process.badge")}
          title={t("process.title")}
          centered
        />

        <div className="mt-16 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-bg-light shadow-lg flex items-center justify-center text-xl font-display font-bold text-accent mb-6 relative z-10">
                    {i + 1}
                    {/* Pulse effect on active/hover */}
                    <div className="absolute inset-0 rounded-full border border-accent animate-ping opacity-20" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
