
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("process.badge")}
          title={t("process.title")}
          centered
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block" />
          <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gray-100 md:hidden" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-6"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 shrink-0 rounded-full bg-white border-4 border-bg-light shadow-xl flex items-center justify-center font-display font-bold text-2xl text-primary relative z-10">
                  {index + 1}
                  {/* Active dot */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white" />
                </div>

                {/* Content */}
                <div className="md:text-center pt-2 md:pt-0">
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
