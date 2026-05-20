import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Profesjonell rengjøring i Notodden og Telemark. Spesialister på flyttevask med garanti, regelmessig vask og bedriftsrenhold. 100% lovlig, HMS-kort og Svanemerket.",
  keywords: ["vaskebyrå Notodden", "flyttevask Telemark", "renhold Notodden", "Makarenko Reinhold", "godkjent renholdsbedrift", "vaskehjelp"],
  openGraph: {
    title: "Makarenko Reinhold | Profesjonell Rengjøring i Notodden",
    description: "Garantert renhet med offentlig godkjent renholdsbedrift. Vi tilbyr flyttevask med garanti og regelmessig renhold for private og bedrifter.",
    type: "website",
    locale: "no_NO",
  },
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
