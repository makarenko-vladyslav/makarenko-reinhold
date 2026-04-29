import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Profesjonell vaskehjelp, flyttevask med garanti, og kontorvask i Notodden og Telemark. 100% lovlig, Svanemerket og ansvarsforsikret opptil 10 mill NOK.",
  keywords: ["flyttevask notodden", "vaskehjelp telemark", "renholdsfirma", "makarenko reinhold", "hms-kort renhold", "svanemerket vask"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Makarenko Reinhold | Profesjonelt Renhold i Notodden",
    description: "Flyttevask med garanti, regelmessig vask og bedriftsrenhold. Trygt, lovlig og miljøvennlig.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
