
"use client";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function ProcessTimeline() {
  const { t } = useLocale();
  const steps = t('process.steps') as any[];

  return (
    <section className="section-padding bg-bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
          centered
        />

        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Number Node */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-bg-white border-4 border-bg-light rounded-full flex items-center justify-center shadow-lg md:-translate-x-1/2 z-10 text-accent font-display font-bold text-xl">
                  {i + 1}
                </div>

                {/* Content Card */}
                <div className="ml-20 md:ml-0 md:w-1/2 p-6 md:p-8 rounded-2xl bg-bg-light border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-muted">{step.desc}</p>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
