
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { CheckCircle } from '@phosphor-icons/react';

export default function FlyttevaskFeature() {
  const { t } = useLocale();
  const content = t('flyttevaskFeature') as any;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-3xl transform -rotate-3 scale-105" />
            <img 
              src="https://picsum.photos/seed/cleaning-kitchen/800/1000" 
              alt="Deep cleaning" 
              className="relative rounded-3xl shadow-premium object-cover w-full h-[600px]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border border-gray-50 hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold text-primary text-sm uppercase tracking-wider">Eiendomsmegler Godkjent</span>
              </div>
              <p className="text-sm text-text-muted">Vår sjekkliste garanterer null anmerkninger ved overtakelse.</p>
            </div>
          </motion.div>

          <div>
            <SectionHeading badge={content.badge} title={content.title} />
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              {content.desc}
            </p>
            
            <div className="space-y-4">
              {content.points.map((point: string, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-bg-light transition-colors"
                >
                  <CheckCircle size={24} weight="fill" className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-primary">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
