
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makarenko Reinhold | Професійний клінінг у Нотоддені",
  description: "Сімейний клінінговий сервіс у Нотоддені. Прибирання при виїзді з 24-годинною гарантією, регулярне прибирання, еко-хімія. Офіційно затверджене підприємство.",
  keywords: ["клінінг Нотодден", "прибирання квартир Notodden", "flyttevask Notodden", "Makarenko Reinhold", "прибирання після ремонту"],
  icons: { icon: '/icon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-text-main antialiased selection:bg-accent/20 selection:text-primary overflow-x-hidden">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
