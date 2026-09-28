import { FormBridge } from "@/components/form-bridge";
import { MotionLayer } from "@/components/motion-layer";
import "./motion-layer.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold — Професійне прибирання та Flyttevask у Нотоддені",
  description: "Сертифіковане прибирання житла, офісів та дач у Нотоддені й регіоні Телемарк. 100% Flyttegaranti, засоби Svanemerket, страховка Tryg та ціни від 420 NOK за годину.",
  keywords: ["прибирання Нотодден", "Flyttevask Notodden", "renhold Telemark", "прибирання дач Hyttevask", "генеральне прибирання Норвегія"],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Makarenko Reinhold — Клінінговий сервіс у Нотоддені, Телемарк",
    description: "Надійне регулярне прибирання, обслуговування гірських дач та виїзний Flyttevask з гарантією повернення депозиту.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html style={{ "--motion-duration": "1s", "--motion-stagger": "0.09s", "--motion-shift": "24px", "--motion-ease": "cubic-bezier(0.16, 1, 0.3, 1)" } as React.CSSProperties} lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500;700;800&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
              <script type="application/ld+json">{"{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Makarenko Reinhold\",\"description\":\"Компанія Makarenko Reinhold (контактна особа: Анна Діженко) надає сертифіковані послуги прибирання житла, офісів та дач у Notodden та регіоні Telemark. Ми спеціалізуємося на регулярному обслуговуванні, генеральному прибиранні та виїзному Flyttevask із 100% гарантією відповідності норвезьким стандартам якості.\",\"telephone\":[\"+4796684397\"],\"email\":\"annadizhenko@gmail.com\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Notodden\",\"addressCountry\":\"Norway\"},\"makesOffer\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Щотижневе підтримувальне прибирання (Fast renhold)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Прибирання при виїзді з гарантією (Flyttevask)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Генеральне сезонне очищення (Hovedrengjøring / Storvask)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Догляд за гірськими дачами (Hyttevask Telemark)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Миття вікон та скляних фасадів (Vindusvask)\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Прибирання комерційних офісів (Kontorrenhold)\"}}]}"}</script>
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll />  <MotionLayer />
        <FormBridge endpoint="https://rapier.46.225.105.129.sslip.io/api/site-forms/cmrunwr48000mztwkphfzk9g8.6dcb674b48757ba87bda4184b4d9c5e56523f8f461669f2b60432004a79c1c3b" />
      </body>
    </html>
  );
}
