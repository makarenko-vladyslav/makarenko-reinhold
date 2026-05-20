"use client";
import { useLocale } from "@/lib/i18n";

export default function CTABanner() {
  const { t } = useLocale();
  const data = t('ctaBanner') as any;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden premium-shadow">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-50 -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-30 -ml-10 -mb-10 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{data.title}</h2>
              <p className="text-white/80 text-lg">{data.subtitle}</p>
            </div>
            <a 
              href="#contact" 
              className="flex-shrink-0 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 whitespace-nowrap"
            >
              {data.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
