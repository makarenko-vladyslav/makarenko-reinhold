"use client";
import { useLocale } from "@/lib/i18n";

export default function WhyUs() {
  const { t } = useLocale();

  const kicker = String(t("whyUs.kicker"));
  const title = String(t("whyUs.title"));
  const lede = String(t("whyUs.lede"));
  const pullQuote = String(t("whyUs.pullQuote"));
  const quoteAuthor = String(t("whyUs.quoteAuthor"));
  const photoCaption = String(t("whyUs.photoCaption"));
  const stats = (t("whyUs.stats") as Array<{
    num: string;
    label: string;
    sub: string;
  }>) || [];
  const items = (t("whyUs.items") as Array<{
    num: string;
    title: string;
    desc: string;
  }>) || [];

  return (
    <section id="om-oss" className="py-20 bg-bg-light border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layer 1 & 2: Kicker and Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-px w-5 bg-accent" />
            <p className="text-xs font-bold tracking-widest uppercase text-accent font-display">
              {kicker}
            </p>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {lede}
          </p>
        </div>

        {/* Layer 3: 2-Photo Overlapping Cluster with Pull-Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            {/* 2-Photo framed layout */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
              <div className="w-4/5 h-4/5 rounded overflow-hidden border border-gray-300 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/27176673/pexels-photo-27176673.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Systematisk renhold i Notodden"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute right-0 bottom-0 w-3/5 h-3/5 rounded overflow-hidden border-2 border-white shadow-md">
                <img
                  src="https://images.pexels.com/photos/7289739/pexels-photo-7289739.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="Overlevering og inspeksjon"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-[11px] text-text-muted mt-3 border-l-2 border-accent pl-2.5">
              {photoCaption}
            </p>
          </div>

          {/* Oversized Statement / Pull-Quote Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded border border-gray-200">
            <span className="font-display font-extrabold text-4xl text-accent/40 select-none block leading-none mb-2">
              «
            </span>
            <blockquote className="font-display font-medium text-base sm:text-lg text-primary leading-snug mb-4">
              {pullQuote}
            </blockquote>
            <cite className="not-italic text-xs font-semibold text-text-muted block uppercase tracking-wider border-t border-gray-100 pt-3">
              {quoteAuthor}
            </cite>
          </div>
        </div>

        {/* Layer 4: 4-Item Real Numeral Stat Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 border-t border-b border-gray-200 py-8 bg-white px-6 rounded">
          {stats.map((st, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-accent tabular-nums mb-1">
                {st.num}
              </span>
              <span className="font-display font-bold text-xs sm:text-sm text-primary mb-1">
                {st.label}
              </span>
              <span className="text-[11px] text-text-muted leading-tight">
                {st.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Layer 5: 6 Structural Advantages Grid with Tabular Numerals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded border border-gray-200/90 flex flex-col justify-between"
            >
              <div>
                <span className="font-display font-extrabold text-xl text-accent block mb-2 font-mono">
                  {item.num}
                </span>
                <h3 className="font-display font-bold text-base text-primary tracking-tight mb-2">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-text-muted leading-relaxed mt-2 border-t border-gray-100 pt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Layer 6: Secondary link */}
        <div className="text-center">
          <a
            href="#faq"
            className="inline-flex items-center text-xs font-display font-bold uppercase tracking-wider text-accent hover:underline"
          >
            Les våre vilkår og vanlige spørsmål om ansvarsforsikring →
          </a>
        </div>
      </div>
    </section>
  );
}
