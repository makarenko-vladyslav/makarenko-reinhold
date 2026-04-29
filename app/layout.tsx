import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold — Profesjonell Rengjøring i Notodden",
  description: "Offentlig godkjent renholdsbedrift i Telemark. Vi spesialiserer oss på flyttevask med garanti, regelmessig vask og bedriftsrenhold. 100% fornøydgaranti.",
  keywords: ["flyttevask notodden", "vaskehjelp telemark", "renholdsbedrift", "makarenko reinhold", "visningsvask"],
  icons: { icon: '/icon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-display bg-bg-light text-primary antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
