import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Premium Cleaning in Notodden",
  description: "Offentlig godkjent renholdsbedrift i Telemark. Vi tilbyr flyttevask med garanti, regelmessig vask og bedriftsrenhold. Miljøvennlig og 100% fornøydgaranti.",
  keywords: ["renhold Notodden", "flyttevask Telemark", "vaskehjelp", "Makarenko Reinhold", "rengjøringsbyrå"],
  icons: { icon: '/icon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-light text-text-main font-body antialiased selection:bg-accent/30 selection:text-primary">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}