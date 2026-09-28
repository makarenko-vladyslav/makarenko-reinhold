"use client";
import { useLocale } from "@/lib/i18n";

export default function VideoShowcase() {
  const { t } = useLocale();

  const videoSrc = t("videoShowcase.videoSrc") as string;
  const videoPoster = t("videoShowcase.videoPoster") as string;

  return (
    <section className="py-20 bg-[hsl(204_40%_16%)] text-[hsl(0_0%_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_48%)] mb-2">
            {t("videoShowcase.kicker") as string}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(0_0%_100%)] tracking-tight mb-4">
            {t("videoShowcase.title") as string}
          </h2>
          <p className="text-base text-[hsl(0_0%_100%/0.8)] leading-relaxed font-light">
            {t("videoShowcase.subtitle") as string}
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[hsl(0_0%_100%/0.15)] aspect-[16/9] relative bg-[hsl(204_35%_12%)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            poster={videoPoster}
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
