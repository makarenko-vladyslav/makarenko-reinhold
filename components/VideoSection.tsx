"use client";
import { useLocale } from '@/lib/i18n';

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-12 lg:py-24 bg-bg-dark relative z-20 overflow-hidden text-white">
      {/* Decorative background watermarks */}
      <div className="absolute top-1/2 left-0 right-0 text-center select-none pointer-events-none opacity-[0.01] z-0">
        <span className="font-display font-extrabold text-[12vw] tracking-tighter uppercase whitespace-nowrap leading-none">
          KVALITETSSIKRING
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
              {t('videoSection.kicker')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight mb-6 uppercase">
              {t('videoSection.title')}
            </h2>
            <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed">
              {t('videoSection.description')}
            </p>
          </div>

          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] border border-white/10 bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={t('videoSection.videoPoster')}
              className="w-full h-full object-cover opacity-90"
              src={t('videoSection.videoSrc')}
            />
            {/* Soft dark overlay to keep it cinematic */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
