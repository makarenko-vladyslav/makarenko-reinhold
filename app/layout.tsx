import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Godkjent Renholdsvirksomhet i Notodden",
  description: "Profesjonell og lisensiert renholdstjeneste i Notodden og Telemark. Vi tilbyr fast vaskehjelp, flyttevask og hytte-klar med 100% fornøydgaranti og WhatsApp-rapporter.",
  keywords: ["renhold Notodden", "vaskehjelp Telemark", "flyttevask Kongsberg", "hytte vask", "godkjent renholdsvirksomhet"],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Makarenko Reinhold | Profesjonell Renhold",
    description: "Lisensiert renholdstjeneste i Notodden med 100% fornøydgaranti.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
