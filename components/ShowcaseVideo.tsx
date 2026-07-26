"use client";

import { useLocale } from "@/lib/i18n";

export default function ShowcaseVideo() {
  const { t } = useLocale();

  const metrics = t("showcase.metrics") as Array<{ value: string; label: string }>;

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              {String(t("showcase.kicker"))}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-2 leading-tight">
              {String(t("showcase.heading"))}
            </h2>
            <p className="text-base text-white/80 mt-4 leading-relaxed">
              {String(t("showcase.subheading"))}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
              {metrics && metrics.map((m, i) => (
                <div key={i}>
                  <div className="text-2xl font-display font-extrabold text-accent">{m.value}</div>
                  <div className="text-xs text-white/70 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.pexels.com/videos/6196269/pexels-photo-6196269.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
              className="w-full h-[400px] object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/6196269/6196269-hd_1280_720_25fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs font-mono font-semibold text-white/90 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                Dokumentert kvalitet fra Notodden & Telemark
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
