"use client";
import { useLocale } from "@/lib/i18n";

export default function Services() {
  const { t } = useLocale();

  const kicker = String(t("services.kicker"));
  const title = String(t("services.title"));
  const lede = String(t("services.lede"));
  const services = (t("services.items") as Array<{
    id: string;
    name: string;
    frequency: string;
    price: string;
    description: string;
    details: string;
    imageUrl: string;
  }>) || [];

  return (
    <section id="tjenester" className="py-20 bg-bg-light scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
            {kicker}
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {lede}
          </p>
        </div>

        {/* 6 Services Grid — Photo first at 16:9, clean typography and real Norwegian descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-md border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Visual photo banner */}
                <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden relative">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  <span className="absolute bottom-3 left-3 bg-primary/90 text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm">
                    {service.frequency}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2 mb-3">
                    <h3 className="font-display font-bold text-lg text-primary tracking-tight">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-accent font-display font-bold text-sm tracking-tight mb-3">
                    {service.price}
                  </p>

                  <p className="text-sm text-text-muted leading-relaxed mb-3">
                    {service.description}
                  </p>

                  <p className="text-xs text-text-main/80 bg-bg-surface p-3 rounded border border-gray-200/60 leading-normal">
                    {service.details}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <a
                  href="#bestill"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded font-display font-bold text-xs uppercase tracking-wider text-primary border border-gray-300 hover:border-accent hover:text-accent transition-colors"
                >
                  Bestill denne tjenesten
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
