"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { SectionHeading, Button } from "./Shared";
import { CheckIcon, ArrowRightIcon } from "./Icons";

export default function FeaturedService() {
  const { t } = useLocale();
  const features = t("featuredService.features") as string[];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-light rounded-l-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading 
              badge={t("featuredService.badge")}
              title={t("featuredService.title")}
              subtitle={t("featuredService.subtitle")}
              centered={false}
            />

            <ul className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-text-main font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <a href="#calculator">
              <Button variant="primary" className="group">
                {t("nav.cta")}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden premium-shadow relative">
              <img 
                src={t("featuredService.imageUrl")} 
                alt="Move out cleaning" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass-panel rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">100%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Fornøydgaranti</h4>
                    <p className="text-sm text-text-muted">Godkjent av meglere</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-[radial-gradient(hsl(150_60%_40%_/_0.2)_2px,transparent_2px)] [background-size:16px_16px]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
