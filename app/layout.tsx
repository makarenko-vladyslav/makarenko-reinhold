
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Premium Cleaning in Notodden",
  description: "Professional, eco-friendly cleaning services in Notodden, Norway. Personal responsibility, detailed checklists, and a 24-hour satisfaction guarantee.",
  keywords: ["cleaning Notodden", "vaskehjelp Notodden", "renhold Notodden", "eco cleaning", "Makarenko Reinhold"],
  icons: {
    icon: '/icon.svg'
  }
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-bg-light text-text-main selection:bg-accent selection:text-white">
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
