"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Trust() {
  const { t } = useLocale();
  const points = t("trust.points") as string[];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 section-pattern-dots-dark opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge={t("trust.badge")}
              title={t("trust.title")}
              subtitle={t("trust.subtitle")}
              light
            />
            
            <div className="space-y-6 mt-8">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent rounded-2xl transform translate-x-4 translate-y-4 opacity-20" />
            <img 
              src={t("trust.imgUrl")} 
              alt="Trust" 
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 max-w-[250px]">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-primary text-sm">Godkjent Virksomhet</div>
                <div className="text-xs text-text-muted">Arbeidstilsynet</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
