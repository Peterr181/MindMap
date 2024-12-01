"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";

const LanguageNav = () => {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState(locale === "en");

  const handleLanguageToggle = () => {
    const newLocale = isEnglish ? "pl" : "en";
    setIsEnglish(!isEnglish);
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="flex justify-end font-fontNavbar font-normal text-[16px] text-[#FFFDF7] bg-[#074A68] p-3 gap-[16px]">
      <p
        onClick={() => {
          if (isEnglish) handleLanguageToggle();
        }}
        className={`cursor-pointer pl-[16px] pr-[16px] hover:font-bold transition-all duration-100 ${
          !isEnglish ? "font-bold" : ""
        }`}
      >
        {t("polish")}
      </p>
      <p
        onClick={() => {
          if (!isEnglish) handleLanguageToggle();
        }}
        className={`cursor-pointer pl-[16px] pr-[16px] hover:font-bold transition-all duration-100 ${
          isEnglish ? "font-bold" : ""
        }`}
      >
        {t("english")}
      </p>
    </div>
  );
};

export default LanguageNav;
