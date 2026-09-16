import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: {
    default: "Farovon Academy — Академия практических навыков в Душанбе",
    template: "%s · Farovon Academy",
  },
  description:
    "Курсы в Душанбе: финансы, SMM, английский, ораторское искусство, компьютерная грамотность, искусственный интеллект. Практика с первого занятия.",
  keywords: [
    "курсы Душанбе",
    "академия Таджикистан",
    "SMM курсы",
    "английский Душанбе",
    "искусственный интеллект курсы",
    "Farovon Academy",
  ],
  authors: [{ name: "Farovon Academy" }],
  openGraph: {
    title: "Farovon Academy — Академия практических навыков",
    description: "6 направлений. Практика с первого занятия. Душанбе, Таджикистан.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}