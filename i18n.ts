import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

// Shared config
export const locales = ["en", "pl"];
export const defaultLocale = "en";

export default getRequestConfig(async () => {
  const headerLocale = (await headers()).get("X-NEXT-INTL-LOCALE");

  const locale =
    headerLocale && locales.includes(headerLocale)
      ? headerLocale
      : defaultLocale;

  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
