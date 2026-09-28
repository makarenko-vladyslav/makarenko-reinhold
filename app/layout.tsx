import { FormBridge } from "@/components/form-bridge";
import { MotionLayer } from "@/components/motion-layer";
import "./motion-layer.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Godkjent renhold i Notodden & Telemark",
  description: "Offentlig godkjent renholdsbedrift i Notodden. Fast renhold, flyttevask med garanti for godkjent overtakelse og hyttevask i Telemark fra 430 kr/t inkl. mva.",
  keywords: ["renhold Notodden", "flyttevask Notodden", "vaskehjelp Telemark", "hyttevask Heddal", "kontorvask Notodden"],
  openGraph: {
    title: "Makarenko Reinhold — Profesjonelt renhold i Notodden",
    description: "Fast renhold og flyttevask med garanti. Godkjent av Arbeidstilsynet, Svanemerkede midler og 5 000 000 kr ansvarsforsikring.",
    type: "website",
    locale: "no_NO",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ "--motion-duration": "1s", "--motion-stagger": "0.09s", "--motion-shift": "24px", "--motion-ease": "cubic-bezier(0.16, 1, 0.3, 1)" } as React.CSSProperties} lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json">{"{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Makarenko Reinhold\",\"description\":\"Makarenko Reinhold спеціалізується на регулярному домашньому та комерційному клінінгу в місті Нотодден і прилеглих районах комуни Телемарк. Підприємство фокусується на підтримуючому прибиранні приватних осель, спеціалізованому прибиранні перед переїздом із гарантією депозиту (Flyttevask) та обслуговуванні заміських котеджів (hytter). Робота виконується за офіційними норвезькими еко-стандартами з повною матеріальною відповідальністю та відкритими тарифами без прихованих платежів.\",\"telephone\":[\"+4796684397\"],\"email\":\"annadizhenko@gmail.com\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Notodden\",\"addressCountry\":\"Norway\"},\"makesOffer\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Fast regelmessig boligrenhold\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Flyttevask med overleveringsgaranti\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Hyttevask og sesongklargjøring i Telemark\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Hovedrengjøring og byggvask\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Vinduspuss innvendig og utvendig\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Kontor-, klinikk- og næringsrenhold\"}}]}"}</script>
      </head>
      <body className="bg-bg-light text-text-main antialiased selection:bg-accent/20 selection:text-primary">
        <LocaleProvider>
          {children}
        </LocaleProvider>
        <SmoothScroll />
        <MotionLayer />
        <FormBridge endpoint="https://rapier.46.225.105.129.sslip.io/api/site-forms/cmrunwr48000mztwkphfzk9g8.6dcb674b48757ba87bda4184b4d9c5e56523f8f461669f2b60432004a79c1c3b" />
      </body>
    </html>
  );
}
