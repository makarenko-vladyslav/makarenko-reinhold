"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface Testimonial {
  name: string;
  location: string;
  service: string;
  date: string;
  rating: string;
  text: string;
}

export default function Testimonials() {
  const { t } = useLocale();
  const [activeSlide, setActiveSlide] = useState(0);

  const items = (t("testimonials.items") as Testimonial[]) || [];

  return (
    <section id="reviews" className="scroll-mt-20 py-20 bg-[hsl(195_25%_98%)] border-t border-[hsl(204_20%_88%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
            {t("testimonials.kicker") as string}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
            {t("testimonials.title") as string}
          </h2>
          <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed font-light mb-4">
            {t("testimonials.subtitle") as string}
          </p>
          <div className="inline-block px-4 py-1.5 rounded-full bg-[hsl(0_0%_100%)] border border-[hsl(204_20%_88%)] text-xs text-[hsl(158_64%_35%)] font-sans font-semibold">
            {t("testimonials.scoreText") as string}
          </div>
        </div>

        {/* Featured Pull-Quote Card */}
        {items.length > 0 && (
          <div className="mb-12 max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-[hsl(0_0%_100%)] border border-[hsl(204_20%_88%)] shadow-md relative">
            <div className="font-display font-black text-6xl text-[hsl(158_64%_38%/0.2)] absolute top-4 left-6 select-none pointer-events-none">
              «
            </div>
            <p className="font-display font-medium text-xl sm:text-2xl text-[hsl(204_35%_15%)] leading-relaxed mb-6 italic relative z-10">
              «{items[activeSlide].text}»
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[hsl(204_20%_90%)] text-xs">
              <div>
                <span className="font-display font-bold text-base text-[hsl(204_35%_15%)] block">
                  {items[activeSlide].name}
                </span>
                <span className="text-[hsl(204_15%_45%)] font-sans">
                  {items[activeSlide].location} · {items[activeSlide].service}
                </span>
              </div>
              <div className="font-display font-bold text-sm text-[hsl(158_64%_38%)]">
                {items[activeSlide].rating} / 5,0 ({items[activeSlide].date})
              </div>
            </div>
          </div>
        )}

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Відгук ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                activeSlide === idx
                  ? "w-8 bg-[hsl(158_64%_38%)]"
                  : "w-2 bg-[hsl(204_20%_80%)] hover:bg-[hsl(204_20%_65%)]"
              }`}
            />
          ))}
        </div>

        {/* All Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((rev, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl bg-[hsl(0_0%_100%)] border transition-all flex flex-col justify-between ${
                activeSlide === idx
                  ? "border-[hsl(158_64%_38%)] shadow-md"
                  : "border-[hsl(204_20%_88%)] shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-display font-bold text-lg text-[hsl(204_35%_15%)]">
                      {rev.name}
                    </div>
                    <div className="text-xs font-sans text-[hsl(204_15%_42%)]">
                      {rev.location} · {rev.service}
                    </div>
                  </div>
                  <div className="font-display font-bold text-sm text-[hsl(158_64%_38%)]">
                    {rev.rating} / 5,0
                  </div>
                </div>

                <p className="text-sm text-[hsl(204_35%_20%)] leading-relaxed font-light italic mb-6">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-[hsl(204_20%_90%)] text-[11px] font-sans text-[hsl(204_15%_50%)]">
                Дата обслуговування: {rev.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
