"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading } from "./Shared";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps") as { title: string; desc: string }[];

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 C300,200 500,0 1000,100" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          badge={t("process.badge")}
          title={t("process.title")}
          light={true}
        />

        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                {/* Number Node */}
                <div className="w-16 h-16 mx-auto bg-primary border-4 border-bg-dark rounded-full flex items-center justify-center text-2xl font-display font-bold text-white relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-8">
                  {idx + 1}
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-accent blur-md -z-10 opacity-50" />
                </div>
                
                <div className="glass-panel-dark rounded-2xl p-8 text-center border border-white/5 hover:border-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
