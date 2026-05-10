import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Premium Cleaning in Notodden",
  description: "Offentlig godkjent renholdsbedrift i Notodden. Vi tilbyr profesjonell flyttevask med 100% fornøydgaranti, daglig renhold og bedriftsavtaler.",
  keywords: ["flyttevask notodden", "renhold telemark", "vaskebyrå notodden", "makarenko reinhold", "hms kort renhold"],
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
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent/30 selection:text-primary">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}