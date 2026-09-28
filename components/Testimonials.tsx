"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();

  const kicker = String(t("testimonials.kicker"));
  const title = String(t("testimonials.title"));
  const lede = String(t("testimonials.lede"));
  const overallScore = String(t("testimonials.overallScore"));
  const sourceLabel = String(t("testimonials.sourceLabel"));
  const reviews = (t("testimonials.items") as Array<{
    author: string;
    location: string;
    service: string;
    text: string;
    date: string;
    rating: string;
  }>) || [];

  const [activeIdx, setActiveIdx] = useState(0);
  const activeReview = reviews[activeIdx] || reviews[0];

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with score pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-5 bg-accent" />
              <p className="text-xs font-bold tracking-widest uppercase text-accent font-display">
                {kicker}
              </p>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mb-2">
              {title}
            </h2>
            <p className="text-base text-text-muted leading-relaxed">
              {lede}
            </p>
          </div>

          <div className="bg-bg-light px-5 py-3 rounded border border-gray-200">
            <span className="font-display font-extrabold text-xl text-primary block tabular-nums">
              {overallScore}
            </span>
            <span className="text-[11px] text-text-muted block">
              {sourceLabel}
            </span>
          </div>
        </div>

        {/* Featured Big Pull-Quote Review Card */}
        {activeReview && (
          <div className="bg-bg-light rounded p-8 sm:p-12 border border-gray-200 mb-8 relative">
            <span className="font-display font-extrabold text-5xl sm:text-6xl text-accent/30 select-none block leading-none mb-4">
              «
            </span>
            <p className="font-display font-medium text-lg sm:text-2xl text-primary leading-relaxed mb-6">
              «{activeReview.text}»
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-200 pt-6">
              <div>
                <h3 className="font-display font-bold text-base text-primary">
                  {activeReview.author}
                </h3>
                <span className="text-xs text-text-muted block">
                  {activeReview.location} · {activeReview.service}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-accent px-2.5 py-1 rounded bg-white border border-gray-200">
                  {activeReview.rating}
                </span>
                <span className="text-xs text-text-muted">{activeReview.date}</span>
              </div>
            </div>
          </div>
        )}

        {/* Dot Indicators / Review Switcher */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIdx(i)}
              aria-label={`Vis vurdering ${i + 1}`}
              className={`h-2.5 rounded-full transition-[width,background-color] duration-200 ease-out ${
                activeIdx === i ? "w-8 bg-accent" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Compact Grid of other reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`p-5 rounded border cursor-pointer transition-colors duration-150 ease-out ${
                activeIdx === idx
                  ? "bg-white border-accent ring-1 ring-accent/20"
                  : "bg-bg-light border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                <span className="font-semibold text-accent uppercase tracking-wider text-[10px]">
                  {rev.service}
                </span>
                <span className="text-[10px]">{rev.date}</span>
              </div>
              <p className="text-xs text-text-main leading-relaxed line-clamp-3 mb-3">
                «{rev.text}»
              </p>
              <span className="font-display font-bold text-xs text-primary block">
                {rev.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
