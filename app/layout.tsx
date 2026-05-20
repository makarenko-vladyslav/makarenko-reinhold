
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Profesjonell flyttevask med garanti, regelmessig renhold og kontorvask i Notodden og Telemark. 100% lovlig, HMS-kort, og Svanemerkede produkter.",
  keywords: ["flyttevask notodden", "renhold telemark", "vaskehjelp", "godkjent renholdsbedrift", "makarenko reinhold"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Makarenko Reinhold | Profesjonelt Renhold i Notodden",
    description: "Garantert godkjent flyttevask og regelmessig renhold for private og bedrifter.",
    type: "website",
    locale: "no_NO",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-bg-light text-text-main">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
