"use client";
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { IconCheck } from './Icons';

export default function FlyttevaskSpotlight() {
  const { t } = useLocale();
  const points = t('flyttevaskSpotlight.points') as {title: string, desc: string}[];

  return (
    <section className="py-24 bg-bg-dark text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-transparent rounded-[2rem] blur-xl" />
            <img 
              src={t('flyttevaskSpotlight.imageUrl')} 
              alt="Clean Kitchen" 
              className="w-full h-[600px] object-cover rounded-[2rem] relative z-10 shadow-2xl"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-panel-dark p-6 rounded-2xl z-20 max-w-xs">
              <div className="text-accent font-bold text-4xl mb-1">99%</div>
              <p className="text-white/80 text-sm">Bakterier fjernes med profesjonell damprens</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading 
              badge={t('flyttevaskSpotlight.badge')}
              title={t('flyttevaskSpotlight.title')}
              subtitle={t('flyttevaskSpotlight.subtitle')}
              light
            />

            <div className="space-y-8 mt-10">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                    <IconCheck className="w-6 h-6 text-accent-light" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                    <p className="text-white/60 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
