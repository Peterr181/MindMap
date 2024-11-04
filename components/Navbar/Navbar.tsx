"use client";
import Image from "next/image";
import logo from "../../public/mainLogo.png";
import mobileMenuIcon from "../../public/mobileMenu.svg";
import React, { useState } from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <nav className="flex items-center justify-between ml-[100px] mr-[100px] pt-[16px] pb-[16px]">
      <div className="flex items-center gap-4 md:pl-0 pl-6">
        <Image src={logo} alt="CBTC logo" width={120} height={113} />
        <h2 className="font-semibold md:text-[20px] text-[14px]">
          {t("logo")}
        </h2>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center lg:gap-[16px] gap-[4px] text-[#074A68] font-normal leading-[25.6px] text-[16px] font-fontNavbar">
          <li
            className={`cursor-pointer pl-[16px] pr-[16px] whitespace-nowrap ${
              activeItem === "home" ? "font-bold" : ""
            }`}
            onClick={() => handleNavClick("home")}
          >
            <Link href="/services">{t("home")}</Link>
          </li>
          <li
            className={`cursor-pointer pl-[16px] pr-[16px] whitespace-nowrap ${
              activeItem === "mission" ? "font-bold" : ""
            }`}
            onClick={() => handleNavClick("mission")}
          >
            <Link href="/services">{t("mission")}</Link>
          </li>
          <li
            className={`cursor-pointer pl-[16px] pr-[16px] whitespace-nowrap ${
              activeItem === "team" ? "font-bold" : ""
            }`}
            onClick={() => handleNavClick("team")}
          >
            <Link href="/services">{t("team")}</Link>
          </li>
          <li
            className={`cursor-pointer pl-[16px] pr-[16px] whitespace-nowrap ${
              activeItem === "blog" ? "font-bold" : ""
            }`}
            onClick={() => handleNavClick("blog")}
          >
            <Link href="/services">{t("blog")}</Link>
          </li>
          <li>
            <Link href="/booknow">
              <div>
                <button className="flex h-[60px] px-10 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#FFD015] text-[#074A6B] font-bold leading-[26px] text-[16px] transition-all hover:bg-white hover:text-[#FFD015] whitespace-nowrap">
                  BOOK NOW
                </button>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="lg:hidden relative md:pr-0 pr-6">
        <div className="w-[24px] h-[24px] ml-[100px]">
          <Image
            src={mobileMenuIcon}
            alt="mobile menu"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>

        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black shadow-lg rounded-md z-10 mr-6">
            <ul className="flex flex-col items-center gap-[16px] text-[#074A68] font-normal leading-[25.6px] text-[16px] font-fontNavbar p-6">
              <li
                className={`cursor-pointer pl-[16px] pr-[16px] whitespace-nowrap ${
                  activeItem === "home" ? "font-bold" : ""
                }`}
                onClick={() => handleNavClick("home")}
              >
                <Link href="/">{t("home")}</Link>
              </li>
              <li
                className={`cursor-pointer pl-[16px] pr-[16px] whitespace-nowrap ${
                  activeItem === "mission" ? "font-bold" : ""
                }`}
                onClick={() => handleNavClick("mission")}
              >
                <Link href="/services">{t("mission")}</Link>
              </li>
              <li
                className={`cursor-pointer pl-[16px] pr-[16px] whitespace-nowrap ${
                  activeItem === "team" ? "font-bold" : ""
                }`}
                onClick={() => handleNavClick("team")}
              >
                <Link href="/services">{t("team")}</Link>
              </li>
              <li
                className={`cursor-pointer pl-[16px] pr-[16px] whitespace-nowrap ${
                  activeItem === "blog" ? "font-bold" : ""
                }`}
                onClick={() => handleNavClick("blog")}
              >
                <Link href="/services">{t("blog")}</Link>
              </li>
              <li>
                <Link href="/booknow">
                  <div>
                    <button className="flex h-[60px] px-10 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#FFD015] text-[#074A6B] font-bold leading-[26px] text-[16px] transition-all hover:bg-white hover:text-[#FFD015]">
                      BOOK NOW
                    </button>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
