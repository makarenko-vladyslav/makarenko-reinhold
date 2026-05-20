import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Profesjonell renholdstjeneste i Notodden og Telemark. Spesialister på flyttevask med garanti, HMS-kort og 10 mill. NOK ansvarsforsikring. Svanemerkede produkter.",
  keywords: ["renhold Notodden", "flyttevask Telemark", "vaskehjelp", "kontorvask", "Makarenko Reinhold"],
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: "Makarenko Reinhold | Premium Renhold i Notodden",
    description: "Garantert godkjent flyttevask og premium renholdstjenester i Telemark.",
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
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent/20 selection:text-primary">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}