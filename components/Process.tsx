"use client";
import { useLocale } from "@/lib/i18n";

export default function Process() {
  const { t } = useLocale();

  const kicker = String(t("process.kicker"));
  const title = String(t("process.title"));
  const lede = String(t("process.lede"));
  const steps = (t("process.steps") as Array<{
    step: string;
    title: string;
    desc: string;
  }>) || [];

  return (
    <section id="prosess" className="py-20 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
            {kicker}
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            {lede}
          </p>
        </div>

        {/* 4 Process Timeline Cards sharing container edges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <div
              key={i}
              className="bg-bg-light p-6 rounded-md border border-gray-200 flex flex-col justify-between relative"
            >
              <div>
                <span className="font-display font-extrabold text-3xl text-accent mb-3 block">
                  {st.step}
                </span>
                <h3 className="font-display font-bold text-base text-primary mb-2">
                  {st.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed mt-2 border-t border-gray-200/80 pt-3">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
