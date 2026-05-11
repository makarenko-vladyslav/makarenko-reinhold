
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const items = t('process.items') as Array<{step: string, title: string, description: string}>;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
          align="center"
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Number Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-bg-light shadow-lg flex items-center justify-center z-10">
                  <span className="font-display font-bold text-accent">{item.step}</span>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:text-left md:pl-16" : "md:text-right md:pr-16"}`}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-text-muted">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
