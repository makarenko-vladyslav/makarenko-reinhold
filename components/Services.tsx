"use client";
import { useLocale } from '@/lib/i18n';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  tag?: string;
}

export default function Services() {
  const { locale, t } = useLocale();
  const rawServices = t('services.items');
  const servicesList: ServiceItem[] = Array.isArray(rawServices) ? rawServices : (locale === 'no' ? [
    {
      id: "flyttevask",
      title: "Trygg Flytting (Flyttevask)",
      description: "Total nedvask med 48-timers garanti. Inkluderer vinduspuss, hvitevarer og dyprens av våtrom.",
      price: "fra 85 kr/m²",
      tag: "Mest populær"
    },
    {
      id: "daglig",
      title: "Hjemmekos (Regelmessig)",
      description: "Fast vedlikehold av hjemmet ditt hver 14. dag. Sikrer et støvfritt og allergivennlig inneklima.",
      price: "fra 1900 kr/mnd",
      tag: "Fast avtale"
    },
    {
      id: "visning",
      title: "Klar til Visning (Visningsvask)",
      description: "Klargjøring før salg. Vi fokuserer på detaljene som øker verdien på boligen din før fotografering.",
      price: "fra 5500 kr",
      tag: "Verdiøkende"
    },
    {
      id: "bygg",
      title: "Byggrengjøring",
      description: "Fjerning av byggestøv og rester etter renovering eller nybygg. HMS-fokusert arbeid.",
      price: "Etter avtale",
      tag: "HMS-fokus"
    }
  ] : [
    {
      id: "flyttevask",
      title: "Safe Move (Flyttevask)",
      description: "Total deep clean with 48-hour guarantee. Includes window cleaning, appliances, and wet room deep clean.",
      price: "from 85 kr/m²",
      tag: "Most Popular"
    },
    {
      id: "daglig",
      title: "Home Comfort (Regular)",
      description: "Regular maintenance every 14 days. Ensures a dust-free and allergy-friendly indoor climate.",
      price: "from 1900 kr/mo",
      tag: "Fixed Contract"
    },
    {
      id: "visning",
      title: "Ready for Viewing",
      description: "Pre-sale preparation. We focus on details that increase your property value before photography.",
      price: "from 5500 kr",
      tag: "Value Adding"
    },
    {
      id: "bygg",
      title: "Construction Cleaning",
      description: "Removal of construction dust and debris after renovation or new builds. HSE focused.",
      price: "By agreement",
      tag: "HSE Focus"
    }
  ]);

  const kicker = t('services.kicker') === 'services.kicker' ? (locale === 'no' ? 'PRISLISTE & TJENESTER' : 'PRICING & SERVICES') : t('services.kicker');
  const title = t('services.title') === 'services.title' ? (locale === 'no' ? 'Transparente satser uten skjulte gebyrer' : 'Transparent rates with no hidden fees') : t('services.title');
  const subtitle = t('services.subtitle') === 'services.subtitle' ? (locale === 'no' ? 'Vi opererer med faste priser og timesatser tilpasset dine behov. Ingen kjøretillegg i Notodden-regionen.' : 'We operate with fixed prices and hourly rates tailored to your needs. No travel fees in the Notodden region.') : t('services.subtitle');

  return (
    <section id="services" className="py-12 lg:py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative off-center abstract frame */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full border border-primary/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading & Lede */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-display block mb-3">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-text-main mb-6 uppercase">
            {title}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Editorial Split: Left List with dotted leaders | Right Premium Featured Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Price/Offer Rows (8 items standard equivalent list) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-b border-text-muted/10 pb-4 mb-6">
              <span className="text-[10px] tracking-widest uppercase font-bold text-text-muted block">
                Standard tjenestespekter & timesatser
              </span>
            </div>

            <div className="space-y-6">
              {servicesList.map((service) => {
                const isSignature = service.id === 'flyttevask-medium';
                return (
                  <div key={service.id} className="group block">
                    <div className="flex items-baseline justify-between gap-4">
                      {/* Name and Tag */}
                      <div className="flex items-baseline gap-3 min-w-0">
                        <h3 className={`text-base sm:text-lg font-display font-bold text-text-main group-hover:text-accent transition-colors ${
                          isSignature ? 'text-primary' : ''
                        }`}>
                          {service.title}
                        </h3>
                        {service.tag && (
                          <span className="text-[8px] sm:text-[9px] tracking-wider uppercase px-2 py-0.5 rounded bg-primary-light text-primary font-bold whitespace-nowrap">
                            {service.tag}
                          </span>
                        )}
                      </div>
                      {/* Dotted Leader Line */}
                      <div className="flex-1 dotted-leader h-4 min-w-[20px]"></div>
                      {/* Price */}
                      <span className="font-display font-extrabold text-sm sm:text-base text-primary tabular-nums whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    {/* Description */}
                    <p className="text-text-muted text-xs sm:text-sm font-light mt-1.5 max-w-2xl leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Footnote */}
            <p className="text-[10px] text-text-muted/80 font-light italic mt-8 border-t border-text-muted/10 pt-4">
              * Satser oppgitt i norske kroner (NOK) inkludert 25% merverdiavgift. Ingen administrative gebyrer eller uventede kjøretillegg påløper.
            </p>
          </div>

          {/* Right Column: Signature Highlight Box (L-Shape Aspect) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-primary-light/60 shadow-sm relative overflow-hidden group">
            {/* Visual Header */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <img 
                src={t('services.image') === 'services.image' ? "https://picsum.photos/seed/norwegian-interior-clean/800/1000" : t('services.image')} 
                alt="Makarenko Reinhold arbeid" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-bg-dark/10 to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-[9px] tracking-widest font-extrabold uppercase font-display bg-accent text-white px-3 py-1.5 rounded-md">
                GULLPAKKE FLYTTEVASK
              </span>
            </div>

            {/* Highlight specifications */}
            <span className="text-[9px] tracking-widest font-bold uppercase text-accent font-display block mb-2">
              SIGNATURTJENESTE
            </span>
            <h4 className="font-display font-bold text-lg text-text-main mb-3">
              Standardisert Full Nedvask
            </h4>
            <p className="text-text-muted text-xs font-light leading-relaxed mb-6">
              Utarbeidet i tråd med strenge krav fra profesjonelle utleiemeglere i Telemark. Inkluderer grundig rens av hvitevarer, ventiler og sluk.
            </p>

            {/* List of high-end details */}
            <div className="space-y-2 mb-8 text-xs font-medium text-text-main/80">
              <div className="flex items-center gap-2">
                <span className="text-accent">—</span>
                <span>Ubegrenset antall vinduer (standard ruter)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">—</span>
                <span>Komplett avfetting av stekeovn og rister</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">—</span>
                <span>Desinfisering av baderomsflater</span>
              </div>
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-4 rounded-xl bg-primary hover:bg-accent text-white font-bold tracking-wider uppercase text-xs transition-colors block text-center cursor-pointer"
            >
              Bestill eller be om befaring
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
