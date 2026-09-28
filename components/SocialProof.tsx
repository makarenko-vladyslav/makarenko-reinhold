"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();

  const kicker = String(t("proof.kicker"));
  const title = String(t("proof.title"));
  const score = String(t("proof.score"));
  const scoreMax = String(t("proof.scoreMax"));
  const reviewCount = String(t("proof.reviewCount"));
  const stats = (t("proof.stats") as Array<{
    value: string;
    label: string;
    detail: string;
  }>) || [];

  return (
    <section className="py-14 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-gray-100 pb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-5 bg-accent" />
              <p className="text-xs font-bold tracking-widest uppercase text-accent font-display">
                {kicker}
              </p>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
              {title}
            </h2>
          </div>

          {/* Named Source & Verified Score */}
          <div className="flex items-baseline gap-2 bg-bg-light px-4 py-2.5 rounded border border-gray-200">
            <span className="font-display font-extrabold text-2xl text-accent tabular-nums">
              {score}
            </span>
            <span className="text-xs text-text-muted font-medium">/ {scoreMax}</span>
            <span className="text-xs font-semibold text-primary ml-1">
              · {reviewCount}
            </span>
          </div>
        </div>

        {/* 4 Stat Proof Cards with Tabular Numerals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded bg-bg-light border border-gray-200/80 flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-accent tracking-tight block mb-2 tabular-nums">
                  {stat.value}
                </span>
                <h3 className="font-display font-bold text-sm text-primary mb-1">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-text-muted mt-2 border-t border-gray-200/80 pt-2 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
