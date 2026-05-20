import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Profesjonelt vaskebyrå i Notodden og Telemark. Spesialister på flyttevask med garanti, regelmessig renhold og bedriftsrenhold. 100% fornøydgaranti, Svanemerkede produkter.",
  keywords: ["flyttevask Notodden", "vaskebyrå Telemark", "rengjøring Notodden", "godkjent renholdsbedrift", "Makarenko Reinhold", "visningsvask", "kontorvask"],
  openGraph: {
    title: "Makarenko Reinhold | Profesjonelt Renhold i Notodden",
    description: "Garantert godkjent flyttevask og miljøvennlig renhold for private og bedrifter i Telemark.",
    type: "website",
    locale: "nb_NO",
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
