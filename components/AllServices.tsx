
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function AllServices() {
  const { t } = useLocale();
  const categories = t("allServices.categories") as any[];

  return (
    <section className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Pattern 3: Clean Directory List Layout */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <SectionHeading 
                badge={t("allServices.badge")}
                title={t("allServices.title")}
                subtitle={t("allServices.subtitle")}
              />
              <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent-hover transition-colors">
                Spesialforespørsel? Kontakt oss
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display font-bold text-primary mb-6 pb-4 border-b-2 border-accent/20">
                  {cat.name}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {cat.services.map((service: string, sIdx: number) => (
                    <li key={sIdx} className="flex items-start gap-3 group">
                      <svg className="w-5 h-5 text-accent mt-0.5 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-main font-medium group-hover:text-primary transition-colors">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
