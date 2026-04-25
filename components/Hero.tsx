"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-bg-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-60"></div>
      <div className="noise-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-accent-light text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            {t('hero.badge')}
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6"
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
          
          <p className="text-lg md:text-xl text-text-light/80 mb-10 leading-relaxed text-balance">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/4796684393"
              className="px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg hover:bg-accent-dark transition-all hover:scale-105 shadow-[0_0_30px_hsl(185_80%_45%/0.4)] flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t('hero.ctaPrimary')}
            </a>
            <a 
              href="#services"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-colors"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </motion.div>

        {/* Right Content - Image & Badges */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent z-10 mix-blend-multiply"></div>
          <img 
            src={t('hero.imageUrl')} 
            alt="Cleaning Service" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Floating Trust Badges */}
          <motion.div 
            className="absolute bottom-8 left-8 z-20 glass-panel p-4 rounded-2xl flex items-center gap-4 animate-float"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="text-white font-bold">{t('hero.trust1')}</p>
              <p className="text-white/60 text-sm">Gjensidige</p>
            </div>
          </motion.div>

          <motion.div 
            className="absolute top-8 right-8 z-20 glass-panel p-4 rounded-2xl flex items-center gap-4 animate-float"
            style={{ animationDelay: '1.5s' }}
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
            </div>
            <div>
              <p className="text-white font-bold">{t('hero.trust2')}</p>
              <p className="text-white/60 text-sm">Arbeidstilsynet</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-light to-transparent z-20"></div>
    </section>
  );
}