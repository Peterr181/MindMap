import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-[108px]">
      <MaxWidthWrapper>
        <div className="border-t border-t-[#B3B3B3]">
          <div className="flex sm:flex-row sm:justify-start justify-center sm:text-start text-center flex-col gap-[40px] mt-[40px]">
            <div className="flex-1 flex flex-col gap-[16px]">
              <h4 className="text-[#4D4D4D] text-[16px] font-semibold leading-[24px]">
                {t("services")}
              </h4>
              <ul className="flex flex-col gap-[16px]">
                <li className="text-[#054B4E] text-[16px] cursor-pointer font-medium leading-[24px] ">
                  {t("therapy")}
                </li>
                <li className="text-[#054B4E] text-[16px] cursor-pointer font-medium leading-[24px]">
                  {t("consultation")}
                </li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col gap-[16px]">
              <h4 className="text-[#4D4D4D] text-[16px] font-semibold leading-[24px]">
                {t("aboutUs")}
              </h4>
              <ul className="flex flex-col gap-[16px]">
                <li className="text-[#054B4E] text-[16px] cursor-pointer font-medium leading-[24px]">
                  {t("ourMission")}
                </li>
                <li className="text-[#054B4E] text-[16px] cursor-pointer font-medium leading-[24px]">
                  {t("whoWeAre")}
                </li>
              </ul>
            </div>
            <div className="flex-1 flex flex-col gap-[16px]">
              <h4 className="text-[#4D4D4D] text-[16px] font-semibold leading-[24px]">
                {t("connectWithUs")}{" "}
              </h4>
              <ul className="flex flex-col gap-[16px]">
                <li className="text-[#054B4E] text-[16px] cursor-pointer font-medium leading-[24px]">
                  {t("instagram")}
                </li>
                <li className="text-[#054B4E] text-[16px] cursor-pointer font-medium leading-[24px]">
                  {t("facebook")}
                </li>
                <li className="text-[#054B4E] text-[16px] cursor-pointer font-medium leading-[24px]">
                  {t("pinterest")}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] mt-[40px]">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="logo" width={32} height={32} />
              <p className="text-[#1A1A1A] font-bold leading-[24px] text-[16px]">
                {t("companyName")}
              </p>
            </div>
            <div>
              <p className="text-[#1a1a1a5b] text-[16px] font-medium leading-[24px] mb-[40px]">
                {t("copyright")}
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
