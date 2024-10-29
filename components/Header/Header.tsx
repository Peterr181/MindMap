import React from "react";

import "./Header.css";

import { useTranslations } from "next-intl";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="h-screen bg-cover customHeaderClass">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow text-center centeredContent lg:p-0 p-6 ">
        <h1 className="font-semibold text-[36px] sm:text-[60px] text-[#FCFCFC] tracking-wide">
          {t("header")}
        </h1>
        <p className="text-[#F3F3F3] opacity-[0.7] font-semibold mt-[20px] md:w-[565px] w-full leading-[28px] text-[14px] sm:text-[16px]  ">
          {t("description")}
        </p>
      </div>
    </header>
  );
};

export default Header;
