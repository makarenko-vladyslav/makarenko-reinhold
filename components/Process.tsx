"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps") as { title: string, desc: string }[];

  return (
    <section className="py-24 bg-bg-light border-y border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t("process.badge")} title={t("process.title")} />

        <div className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border-light" />
          
          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-bg-light shadow-lg flex items-center justify-center mb-6 relative z-10">
                  <span className="text-3xl font-display font-bold text-accent">{i + 1}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
