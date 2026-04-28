"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps") as any[];

  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("process.badge")}
          title={t("process.title")}
          centered
        />

        <div className="relative mt-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[12.5%] w-[75%] h-[2px] bg-gray-200 -translate-y-1/2 z-0">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-bg-light shadow-lg flex items-center justify-center text-2xl font-display font-bold text-primary mb-6 relative group-hover:scale-110 group-hover:border-accent/20 transition-all duration-300">
                  {i + 1}
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
