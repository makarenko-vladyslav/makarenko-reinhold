import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renhold i Notodden",
  description: "Profesjonell klieng i Notodden og Telemark. Spesialister på flyttevask med garanti, regelmessig vask og bedriftsrenhold. 100% lovlig, HMS-kort og miljøvennlig.",
  keywords: ["renhold notodden", "flyttevask telemark", "vaskehjelp", "klinging", "makarenko reinhold", "godkjent renholdsbedrift"],
  openGraph: {
    title: "Makarenko Reinhold | Kvalitetsrenhold i Notodden",
    description: "Profesjonell klieng i Notodden og Telemark. Spesialister på flyttevask med garanti.",
    type: "website",
  },
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent/30 selection:text-primary">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}