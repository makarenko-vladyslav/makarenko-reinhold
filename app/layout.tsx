
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Profesjonell flyttevask, regelmessig vask og kontorvask i Notodden og Telemark. 100% fornøydgaranti, Svanemerkede midler og full forsikring.",
  keywords: ["flyttevask notodden", "renhold telemark", "vaskehjelp", "kontorvask", "makarenko reinhold", "godkjent renholdsbedrift"],
  icons: {
    icon: '/icon.svg'
  },
  openGraph: {
    title: "Makarenko Reinhold | Profesjonelt Renhold i Notodden",
    description: "Garantert godkjent flyttevask og miljøvennlig renhold for private og bedrifter i Telemark.",
    type: "website",
    locale: "no_NO",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,500;0,600;0,700;0,800;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
