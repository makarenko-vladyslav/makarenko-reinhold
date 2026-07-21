"use client";
import { useLocale } from '@/lib/i18n';

interface TrustCard {
  title: string;
  text: string;
}

export default function Trust() {
  const { locale, t } = useLocale();
  const rawTrust = t('trust.items');
  const trustItems: TrustCard[] = Array.isArray(rawTrust) ? rawTrust : (locale === 'no' ? [
    {
      title: "Offentlig Godkjent",
      text: "Vi er registrert og godkjent av Arbeidstilsynet. Det sikrer lovlige arbeidsforhold og trygghet for deg som kjøper."
    },
    {
      title: "Gjensidige Ansvarsforsikring",
      text: "Skulle et uhell oppstå, er vi forsikret for opptil 1 000 000 NOK mot skade på eiendom eller gjenstander."
    },
    {
      title: "48-timers Garanti",
      text: "Vi garanterer godkjent overlevering. Hvis utleier eller kjøper påpeker mangler, retter vi det opp gratis innen 24 timer."
    },
    {
      title: "Svanemerkede Produkter",
      text: "Vi bryr oss om miljøet og ditt inneklima. Vi bruker skånsomme, miljøsertifiserte produkter uten giftige kjemikalier."
    }
  ] : [
    {
      title: "Publicly Approved",
      text: "We are registered and approved by the Norwegian Labour Inspection Authority, ensuring legal working conditions."
    },
    {
      title: "Gjensidige Liability Insurance",
      text: "Should an accident occur, we are insured up to 1,000,000 NOK against damage to property or items."
    },
    {
      title: "48-Hour Guarantee",
      text: "We guarantee approved handover. If the landlord or buyer points out any issues, we correct it for free within 24 hours."
    },
    {
      title: "Eco-Labeled Products",
      text: "We care about the environment and your indoor climate. We use gentle, eco-certified products without toxic chemicals."
    }
  ]);

  const kicker = t('trust.kicker') === 'trust.kicker' ? (locale === 'no' ? 'Trygghet og sertifisering' : 'Trust & Certification') : t('trust.kicker');
  const title = t('trust.title') === 'trust.title' ? (locale === 'no' ? 'Hvorfor du kan stole på oss' : 'Why you can trust us') : t('trust.title');
  const subtitle = t('trust.subtitle') === 'trust.subtitle' ? (locale === 'no' ? 'Vi setter din trygghet først med godkjente HMS-kort, solid forsikring og fornøydgaranti.' : 'We put your security first with approved HSE cards, solid insurance, and satisfaction guarantee.') : t('trust.subtitle');

  return (
    <section id="trust" className="py-12 lg:py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-text-main mb-6 uppercase">
            {title}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Elegant Grid without generic icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-bg-light p-8 rounded-2xl border border-primary-light flex items-start gap-6 transition-all duration-300 hover:border-primary/20"
            >
              <div className="text-accent font-display font-black text-2xl leading-none">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-base font-display font-bold text-text-main mb-2 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-text-muted text-xs sm:text-sm font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
