import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Sertifisert renhold i Notodden & Telemark",
  description: "Offisielt godkjent renholdsbedrift i Notodden. Fast renhold, flyttevask med 100% garanti, hyttevask og kontorrenhold. Inkludert Svanemerket produkter og MVA.",
  keywords: ["renhold Notodden", "flyttevask Notodden", "hyttevask Telemark", "renholdsbedrift Notodden", "fast renhold", "Makarenko Reinhold"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Makarenko Reinhold | Godkjent renholdsbedrift Notodden",
    description: "Kvalitetsrenhold i Notodden og Telemark. Beregn din pris på 30 sekunder med vår online priskalkulator.",
    type: "website",
    locale: "nb_NO",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-light text-text-main antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
