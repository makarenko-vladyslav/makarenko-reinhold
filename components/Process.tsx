"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps") as Array<{title: string, description: string}>;

  return (
    <section id="process" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("process.badge") as string}
          title={t("process.title") as string}
          subtitle={t("process.subtitle") as string}
          centered
        />

        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200" />
          
          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-bg-light premium-shadow flex items-center justify-center text-2xl font-display font-bold text-primary mb-6 relative z-10 group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-[250px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
