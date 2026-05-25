import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Lisensiert renholdsfirma i Notodden. Vi tilbyr fast vask, flyttevask og spesialrenhold med 100% fornøydgaranti og full forsikring. Bestill i dag!",
  keywords: ["renhold Notodden", "vaskehjelp", "flyttevask Telemark", "Makarenko Reinhold", "godkjent renholdsbedrift"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Makarenko Reinhold | Premium Renhold i Notodden",
    description: "Lisensiert renholdsfirma med HMS-kort, 5M NOK forsikring og Svanemerkede produkter.",
    type: "website",
    locale: "no_NO",
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
      <body className="font-body text-text-main bg-white antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}