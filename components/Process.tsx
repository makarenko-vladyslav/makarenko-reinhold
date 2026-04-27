
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as Array<{num: string, title: string, description: string}>;

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge') as string}
          title={t('process.title') as string}
        />

        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-[1px] bg-gray-200 hidden lg:block" />
          
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Number Node */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-bg-light shadow-lg flex items-center justify-center text-xl font-display font-bold text-accent mb-6 relative z-10 mx-auto lg:mx-0">
                  {step.num}
                </div>
                
                <div className="text-center lg:text-left">
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
