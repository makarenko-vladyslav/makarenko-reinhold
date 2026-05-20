"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function FeaturedServices() {
  const { t } = useLocale();
  const items = t("featuredServices.items");

  const getIcon = (type: string) => {
    switch(type) {
      case 'home':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 8h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
          </svg>
        );
      case 'calendar':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 16h4M12 14v4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'office':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 7h6M9 11h6M9 15h6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("featuredServices.badge")}
          title={t("featuredServices.title")}
          subtitle={t("featuredServices.subtitle")}
          centered={true}
        />

        {/* Pattern 9: Photo + Cards L-Shape */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Photo Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-full group"
          >
            <img 
              src="https://picsum.photos/seed/cleaning-pro/800/1000" 
              alt="Professional cleaning" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <h3 className="text-2xl font-display font-bold text-white mb-2">Flyttevask Spesialister</h3>
                <p className="text-white/80">100% godkjenningsgaranti for din trygghet.</p>
              </div>
            </div>
          </motion.div>

          {/* 2x2 Grid Right */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-alt rounded-3xl p-8 border border-gray-100 hover:border-accent/30 hover:shadow-[0_10px_40px_hsl(215_60%_15%/0.05)] transition-all group relative overflow-hidden"
              >
                {/* Decorative corner shape */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors pointer-events-none" />
                
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
