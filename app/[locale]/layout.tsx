import type { Metadata } from "next";
import "../../app/globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/Footer/Footer";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar/Navbar";
import LanguageNav from "@/components/LanguageNav/LanguageNav";

const localizedMetadata: Record<
  string,
  { title: string; description: string }
> = {
  en: {
    title: "MindMap | Transformative Therapy for Growth and Balance",
    description:
      "At TheMindMap, we harness the power of therapy to help you find balance and personal growth, whether overcoming anxiety, depression, trauma, or enhancing life skills.",
  },
  pl: {
    title: "MindMap | Terapia transformacyjna dla wzrostu i równowagi",
    description:
      "W TheMindMap wykorzystujemy moc terapii, aby pomóc Ci znaleźć równowagę i osobisty rozwój, pokonując lęki, depresję, traumę lub rozwijając umiejętności życiowe.",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://themindmap.eu"),
  keywords: [
    "therapy",
    "CBT",
    "mindfulness",
    "mindmap",
    "cognitive behavioral therapy",
    "psychotherapy",
    "counseling",
    "mental health",
    "anxiety",
    "depression",
    "trauma",
    "life skills",
  ],
  title: {
    default: localizedMetadata.en.title,
    template: "%s | MindMap",
  },
  verification: {
    google: "dks_Lfi_CZPmIfP3IhrqMM1vmsU7wCaeDxSm7rVMZN0",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "en" | "pl" };
}) {
  const { locale } = await params;

  // Ensure the locale is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  // Retrieve the appropriate localized metadata
  const { title, description } =
    localizedMetadata[locale] || localizedMetadata.en;

  return (
    <html lang={locale} className="font-title">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
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
