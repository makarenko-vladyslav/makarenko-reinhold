
"use client";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('video.badge')}
          title={t('video.title')}
          align="center"
          light
        />

        <div className="mt-12 relative rounded-3xl overflow-hidden aspect-video shadow-2xl group cursor-pointer max-w-5xl mx-auto border border-white/10">
          <img 
            src={t('video.poster')} 
            alt="Video poster" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center pl-2 shadow-[0_0_40px_hsl(158,64%,42%,0.6)] group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
