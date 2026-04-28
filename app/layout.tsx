import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Offentlig Godkjent Renholdsbedrift i Notodden",
  description: "Profesjonell flyttevask med garanti, regelmessig renhold og spesialvask i Notodden og Telemark. 100% lovlig, HMS-kort, og Svanemerkede produkter.",
  keywords: ["flyttevask notodden", "renhold telemark", "vaskebyrå", "godkjent renholdsbedrift", "makarenko reinhold"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Makarenko Reinhold | Premium Renhold i Notodden",
    description: "Garantert godkjent flyttevask og profesjonelt renhold for private og bedrifter.",
    type: "website",
    locale: "nb_NO",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
