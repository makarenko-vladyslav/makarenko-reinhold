import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Професійні клінінгові послуги в Нотоддені та Телемарку. Flyttevask з гарантією, регулярне прибирання. Екологічні засоби Svanemerket, 100% легально.",
  keywords: ["клінінг Нотодден", "flyttevask Notodden", "renhold Telemark", "прибирання при переїзді", "Makarenko Reinhold"],
  icons: { icon: '/icon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-main bg-white antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}