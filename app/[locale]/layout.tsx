import type { Metadata } from "next";
import "../../app/globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "CBTC | MindMap",
  description:
    "At MindMap, we believe in the transformative power of therapy to help you achieve balance and personal growth. Whether you are dealing with anxiety, depression, trauma, or simply looking to enhance your life skills.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const { locale } = await params;

  const resolvedLocale = locale ?? "en";
  // @ts-ignore
  const messages = await getMessages(resolvedLocale);

  return (
    <html lang={resolvedLocale} className="font-title">
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
