"use client";
import { useLocale } from "@/lib/i18n";

interface Step {
  number: string;
  title: string;
  desc: string;
}

export default function Process() {
  const { t } = useLocale();

  const steps = (t("process.steps") as Step[]) || [];

  return (
    <section className="py-20 bg-[hsl(0_0%_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-sans font-bold text-[hsl(158_64%_38%)] mb-2">
            {t("process.kicker") as string}
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[hsl(204_35%_15%)] tracking-tight mb-4">
            {t("process.title") as string}
          </h2>
          <p className="text-base text-[hsl(204_15%_42%)] leading-relaxed font-light">
            {t("process.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[hsl(195_25%_98%)] border border-[hsl(204_20%_88%)] flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-black text-3xl text-[hsl(158_64%_38%)] block mb-4">
                  {st.number}
                </span>
                <h3 className="font-display font-bold text-lg text-[hsl(204_35%_15%)] mb-2 leading-snug">
                  {st.title}
                </h3>
              </div>
              <p className="text-xs text-[hsl(204_15%_42%)] leading-relaxed font-light mt-4">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
