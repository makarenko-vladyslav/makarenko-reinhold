import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Profesjonell flyttevask og renhold i Notodden og Telemark. 100% fornøydgaranti, Svanemerkede produkter og fullt forsikret. Få et gratis pristilbud i dag.",
  keywords: ["flyttevask notodden", "renhold telemark", "vaskehjelp", "godkjent renholdsbedrift", "kontorvask"],
  openGraph: {
    title: "Makarenko Reinhold | Profesjonelt Renhold i Notodden",
    description: "Garantert godkjent flyttevask med Svanemerkede produkter.",
    type: "website",
    locale: "no_NO",
  },
  icons: {
    icon: "/icon.svg",
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
      <body className="bg-bg-light text-text-main antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
