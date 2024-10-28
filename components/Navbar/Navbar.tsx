"use client";
import Image from "next/image";
import logo from "../../public/logo.svg";
import mobileMenuIcon from "../../public/mobileMenu.svg";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(locale === "en");

  const handleLanguageToggle = () => {
    const newLocale = isEnglish ? "pl" : "en";
    setIsEnglish(!isEnglish);
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full max-w-[1700px] mx-auto pt-[20px] relative">
      <div className="flex items-center gap-4 md:pl-0 pl-6">
        <Image src={logo} alt="CBTC logo" width={40} height={40} />
        <h2 className="font-semibold md:text-[20px] text-[14px]">
          {t("logo")}
        </h2>
      </div>
      <div className="hidden md:flex">
        <ul className="flex items-center gap-8">
          <li className="flex items-center">
            <span className="mr-2 text-white">{isEnglish ? "ENG" : "PL"}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isEnglish}
                onChange={handleLanguageToggle}
                className="sr-only"
              />
              <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner"></div>
              <div
                className={`dot absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transition ${
                  isEnglish ? "transform translate-x-full bg-blue-500" : ""
                }`}
              ></div>
            </label>
          </li>
          <li className="cursor-pointer">
            <a href="#about">{t("about")}</a>
          </li>
          <li className="cursor-pointer">
            <a href="#services">{t("services")}</a>
          </li>
          <li className="cursor-pointer">
            <a href="#contact">{t("contact")}</a>
          </li>
        </ul>
      </div>

      <div className="md:hidden relative md:pr-0 pr-6">
        <Image
          src={mobileMenuIcon}
          alt="mobile menu"
          width={24}
          height={24}
          onClick={toggleMenu}
          className="cursor-pointer"
        />

        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black shadow-lg rounded-md z-10 mr-6">
            <ul className="flex flex-col items-start p-4">
              <li className="py-2 cursor-pointer">
                <a href="#about">{t("about")}</a>
              </li>
              <li className="py-2 cursor-pointer">
                <a href="#services">{t("services")}</a>
              </li>
              <li className="py-2 cursor-pointer">
                <a href="#contact">{t("contact")}</a>
              </li>
              <li className="py-2 flex items-center">
                <span className="mr-2 text-black">
                  {isEnglish ? "ENG" : "PL"}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isEnglish}
                    onChange={handleLanguageToggle}
                    className="sr-only"
                  />
                  <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner"></div>
                  <div
                    className={`dot absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transition ${
                      isEnglish ? "transform translate-x-full bg-blue-500" : ""
                    }`}
                  ></div>
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
