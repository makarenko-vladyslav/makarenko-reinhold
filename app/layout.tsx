import React from "react";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Profesjonelt Renhold i Notodden",
  description: "Godkjent renholdsbedrift i Notodden. Vi tilbyr flyttevask med garanti, fast vask, og kontorvask. 100% lovlig, miljøvennlig og personlig service fra eierne.",
  keywords: ["renhold Notodden", "flyttevask", "vaskehjelp", "kontorvask", "Makarenko Reinhold", "godkjent renholdsbedrift"],
  openGraph: {
    title: "Makarenko Reinhold | Profesjonelt Renhold i Notodden",
    description: "Godkjent renholdsbedrift i Notodden. Vi tilbyr flyttevask med garanti, fast vask, og kontorvask.",
    type: "website",
    locale: "nb_NO",
  },
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
      <body className="font-body text-text-main bg-bg-light antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
