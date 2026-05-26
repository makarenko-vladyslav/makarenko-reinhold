"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import { BadgeCheck } from "./Icons";

export default function WhyUs() {
  const { t } = useLocale();
  const points = t('whyUs.points') as any[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl translate-x-4 translate-y-4" />
            <img 
              src={t('whyUs.imageUrl')} 
              alt="Cleaning details" 
              className="relative rounded-3xl shadow-xl w-full object-cover h-[600px]"
            />
            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-primary">100%</div>
                  <div className="text-sm font-medium text-text-muted">Godkjent Garanti</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading 
              badge={t('whyUs.badge')}
              title={t('whyUs.title')}
              subtitle={t('whyUs.subtitle')}
            />
            
            <div className="space-y-8">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">{point.title}</h4>
                    <p className="text-text-muted leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
