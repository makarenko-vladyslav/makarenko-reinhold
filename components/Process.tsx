"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps: any[] = t("process.steps");

  return (
    <section className="section-padding bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("process.badge")}
          title={t("process.title")}
          subtitle={t("process.subtitle")}
          centered
        />

        <div className="relative mt-20">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gray-200">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-accent"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col md:items-center text-left md:text-center"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-bg-light shadow-xl flex items-center justify-center text-2xl font-display font-bold text-primary mb-6 relative z-10">
                  {index + 1}
                  {/* Pulse effect on active */}
                  <div className="absolute inset-0 rounded-full border border-accent animate-[pulse-glow_3s_ease-in-out_infinite]" />
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full">
                  <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
