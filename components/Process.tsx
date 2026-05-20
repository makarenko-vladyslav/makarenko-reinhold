"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps");

  return (
    <section className="py-24 bg-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t("process.badge")}
          title={t("process.title")}
          centered={true}
        />

        <div className="max-w-4xl mx-auto relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent to-accent/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Number Circle */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-white border-4 border-accent flex items-center justify-center font-display font-bold text-xl text-primary z-10 md:-translate-x-1/2 shadow-lg">
                  {i + 1}
                </div>

                {/* Content Card */}
                <div className="ml-20 md:ml-0 md:w-1/2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-muted">{step.desc}</p>
                </div>
                
                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
