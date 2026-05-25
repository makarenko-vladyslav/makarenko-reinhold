import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Profesjonelt Renhold i Notodden",
  description: "Offentlig godkjent renholdsbedrift i Notodden og Telemark. Vi tilbyr flyttevask med garanti, regelmessig vask og bedriftsrenhold. 100% fornøydgaranti.",
  keywords: ["renhold Notodden", "flyttevask Telemark", "vaskehjelp", "Makarenko Reinhold", "rengjøringsbyrå"],
  icons: { icon: '/icon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased text-text-main bg-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}