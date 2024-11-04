import React from "react";
import "./Header.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className="h-screen bg-cover customHeaderClass">
      <div className="flex flex-col justify-center items-center flex-grow text-center centeredContent lg:p-0 p-6">
        <h1 className="text-[36px] sm:text-[77px] text-[#FCFCFC] tracking-wide font-fontPrimary font-extrabold">
          {t("header")}
        </h1>

        <p className="text-[#FFFDF7] opacity-[0.7] font-light mt-[20px] md:w-[718px] w-full leading-[31px] tracking-[-0.22px] text-[14px] sm:text-[22px] font-fontSecondary text-center">
          {t("description")}
        </p>

        {/* Responsive Button and Icon Container */}
        <div className="flex cursor-pointer justify-center items-center md:justify-end w-full md:w-[718px] mt-[48px] btnContainer ">
          <button className=" font-fontSecondary font-normal text-[20px] leading-[26px] text-[#FFFDF7] tracking-[1px] learnMoreButton">
            LEARN MORE
          </button>
          <div className=" md:block sm:ml-[90px] ml-[16px]">
            <Image
              src="/chevronRight.svg"
              width={24}
              height={24}
              alt="right icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
