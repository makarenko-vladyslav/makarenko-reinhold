
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Profesjonell rengjøring for private og bedrifter i Notodden og Telemark. Flyttevask med garanti, miljøvennlige midler, og fullt forsikret personell.",
  keywords: ["renhold Notodden", "flyttevask Telemark", "vaskehjelp", "kontorvask", "Makarenko Reinhold"],
  openGraph: {
    title: "Makarenko Reinhold | Profesjonell Rengjøring i Notodden",
    description: "Flyttevask med garanti, miljøvennlige midler, og fullt forsikret personell i Telemark.",
    type: "website",
  },
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
