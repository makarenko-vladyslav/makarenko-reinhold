"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as {num: string, title: string, desc: string}[];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('process.badge')}
          title={t('process.title')}
          centered
        />

        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border-light -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="w-16 h-16 mx-auto bg-white border-4 border-bg-light rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:border-accent transition-colors">
                  <span className="font-display font-bold text-xl text-primary">{step.num}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
