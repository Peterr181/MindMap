import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const navigation = defineRouting({
  locales: ["en", "pl"],

  defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(navigation);
