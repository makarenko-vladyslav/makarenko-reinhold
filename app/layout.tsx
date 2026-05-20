import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Garantert Flyttevask i Notodden",
  description: "Offentlig godkjent renholdsbedrift i Notodden. Profesjonell flyttevask med garanti, daglig renhold og spesialvask. 100% fornøydgaranti.",
  keywords: ["flyttevask notodden", "renhold telemark", "vaskebyrå", "hms kort renhold", "svanemerket vask"],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent/20 selection:text-accent-dark">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
