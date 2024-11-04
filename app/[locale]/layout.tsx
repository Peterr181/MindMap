import type { Metadata } from "next";
import "../../app/globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/Footer/Footer";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar/Navbar";
import LanguageNav from "@/components/LanguageNav/LanguageNav";

export const metadata: Metadata = {
  title: "CBTC | MindMap",
  description:
    "At MindMap, we believe in the transformative power of therapy to help you achieve balance and personal growth. Whether you are dealing with anxiety, depression, trauma, or simply looking to enhance your life skills.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Await params to get the locale value
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="font-title">
      <body>
        <NextIntlClientProvider messages={messages}>
          <LanguageNav />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
