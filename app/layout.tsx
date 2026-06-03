import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Godkjent Renholdsbedrift i Notodden",
  description: "Profesjonell rengjøring i Notodden og Heddal. 100% fornøydgaranti på flyttevask, godkjent av Arbeidstilsynet. Beregn pris online på 2 minutter.",
  keywords: ["renhold Notodden", "flyttevask Notodden", "vaskehjelp", "kontorvask", "Makarenko Reinhold", "rengjøringsbyrå"],
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
      <body className="bg-bg-light text-text-main antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}