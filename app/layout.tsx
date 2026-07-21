import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Godkjent Renholdsbedrift i Notodden",
  description: "Ekspert på flyttevask med 48-timers depositumgaranti, daglig renhold og visningsvask i Notodden og omegn. Offentlig godkjent. Beregn pris umiddelbart.",
  keywords: ["flyttevask Notodden", "renhold Notodden", "vaskehjelp Notodden", "godkjent renholdsbedrift", "vask ved utflytting", "Makarenko Reinhold"],
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: "Makarenko Reinhold — Flyttevask i Notodden",
    description: "Slipp flyttestresset. 48-timers godkjenningsgaranti og fastpris på flyttevask i Notodden.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}