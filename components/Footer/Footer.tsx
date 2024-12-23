import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-[108px]">
      <MaxWidthWrapper>
        <div className="border-t  border-[#E5E7EB]  ">
          <div className="flex sm:flex-row sm:justify-start justify-center sm:text-start text-center flex-col gap-[40px] mt-[40px] border-b border-[#E5E7EB] pb-6">
            <div className="flex-1 flex flex-col gap-[16px]">
              <h4 className="text-[#074A68] text-[18px] font-semibold leading-[24px] font-fontSecondary">
                {t("services")}
              </h4>
              <ul className="flex flex-col gap-[16px]">
                <Link href="/team">
                  <li className="text-[#054B4E]  cursor-pointer font-normal leading-[24px] font-fontSecondary text-[18px] hover:font-bold transition-all duration-100 ">
                    {t("therapy")}
                  </li>
                </Link>
                <Link href="/team">
                  <li className="text-[#054B4E]  cursor-pointer font-normal leading-[24px] font-fontSecondary text-[18px] hover:font-bold transition-all duration-100 ">
                    {t("consultation")}
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex-1 flex flex-col gap-[16px]">
              <h4 className="text-[#074A68] text-[18px] font-semibold leading-[24px] font-fontSecondary">
                {t("aboutUs")}
              </h4>
              <ul className="flex flex-col gap-[16px]">
                <Link href="/mission">
                  <li className="text-[#054B4E]  cursor-pointer font-normal leading-[24px] font-fontSecondary text-[18px] hover:font-bold transition-all duration-100">
                    {t("ourMission")}
                  </li>
                </Link>
                <Link href="/team">
                  <li className="text-[#054B4E]  cursor-pointer font-normal leading-[24px] font-fontSecondary text-[18px] hover:font-bold transition-all duration-100">
                    {t("whoWeAre")}
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex-1 flex flex-col gap-[16px]">
              <h4 className="text-[#074A68] text-[18px] font-semibold leading-[24px] font-fontSecondary">
                {t("connectWithUs")}{" "}
              </h4>
              <ul className="flex flex-col gap-[16px]">
                <li className="text-[#054B4E]  cursor-pointer font-normal leading-[24px] font-fontSecondary text-[18px] flex items-center gap-3 sm:justify-start justify-center hover:font-bold transition-all duration-100">
                  <Image
                    src="/instagram.svg"
                    alt="instagram icon"
                    width={20}
                    height={20}
                  />
                  <p>{t("instagram")}</p>
                </li>
                <li className="text-[#054B4E]  cursor-pointer font-normal leading-[24px] font-fontSecondary text-[18px] flex items-center gap-3 sm:justify-start justify-center hover:font-bold transition-all duration-100">
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin icon"
                    width={20}
                    height={20}
                  />
                  <p>{t("facebook")}</p>
                </li>
                <li className="text-[#054B4E]  cursor-pointer font-normal leading-[24px] font-fontSecondary text-[18px] flex items-center gap-3 sm:justify-start justify-center hover:font-bold transition-all duration-100">
                  <Image
                    src="/pinterest.svg"
                    alt="pinterest icon"
                    width={20}
                    height={20}
                  />
                  <p> {t("pinterest")}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-[20px] mt-[40px] mb-[40px]">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image
                  src="/mainLogo.png"
                  alt="logo"
                  width={120}
                  height={74}
                  quality={100}
                />
              </div>
            </Link>
            <div>
              <p className="text-[#074A68] font-semibold leading-[24px] text-[18px] font-fontSecondary sm:text-left text-center">
                {t("companyName")}
              </p>
              <p className="text-[#B3B3B3] text-[16px] font-fontSecondary leading-[24px] mt-[20px] sm:text-left text-center ">
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
