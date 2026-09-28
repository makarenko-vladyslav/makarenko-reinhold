"use client";
import { useLocale } from "@/lib/i18n";

export default function VideoShowcase() {
  const { t } = useLocale();

  const kicker = String(t("videoShowcase.kicker"));
  const title = String(t("videoShowcase.title"));
  const lede = String(t("videoShowcase.lede"));
  const videoSrc = String(t("videoShowcase.videoSrc"));
  const videoPoster = String(t("videoShowcase.videoPoster"));
  const quote = String(t("videoShowcase.quote"));
  const quoteAuthor = String(t("videoShowcase.quoteAuthor"));

  return (
    <section className="py-20 bg-primary text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column Text & Quote */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
              {kicker}
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-8">
              {lede}
            </p>

            <blockquote className="border-l-2 border-accent pl-4 my-6">
              <p className="font-display font-medium text-sm sm:text-base italic text-white/95 leading-snug mb-2">
                {quote}
              </p>
              <cite className="text-xs text-white/60 not-italic block uppercase tracking-wider">
                {quoteAuthor}
              </cite>
            </blockquote>

            <div className="pt-4 flex flex-wrap gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                HMS-kort fra Arbeidstilsynet
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Svanemerkede pleiemidler
              </span>
            </div>
          </div>

          {/* Right Column Real Stock Video #2 */}
          <div className="lg:col-span-7">
            <div className="w-full aspect-video rounded-md overflow-hidden bg-black/40 border border-white/15 shadow-xl relative">
              <video
                controls
                playsInline
                poster={videoPoster}
                className="w-full h-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
                Nettleseren din støtter ikke videoavspilling.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
