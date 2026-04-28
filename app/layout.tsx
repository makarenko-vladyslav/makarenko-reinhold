
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Renhold | Profesjonell Vaskehjelp i Notodden",
  description: "Pålitelig og grundig renholdstjeneste i Notodden. Vi tilbyr flyttevask, fast vask og kontorrenhold med 100% fornøydgaranti og miljøvennlige produkter.",
  keywords: ["renhold Notodden", "flyttevask Notodden", "vaskehjelp", "Makarenko Renhold", "rengjøringsbyrå", "kontorvask Notodden"],
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: "Makarenko Renhold | Profesjonell Vaskehjelp i Notodden",
    description: "Pålitelig og grundig renholdstjeneste i Notodden. Vi tilbyr flyttevask, fast vask og kontorrenhold med 100% fornøydgaranti.",
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
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
