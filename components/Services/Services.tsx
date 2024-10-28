import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Service from "./Service";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services");

  return (
    <section className="mt-[108px] mb-[44px]">
      <MaxWidthWrapper>
        <div>
          <h2 className="text-center sm:text-[30px] text-[22px] text-[#054B4E] font-bold leading-[42px]">
            {t("header")}
          </h2>
          <div className="flex justify-center mt-[32px]">
            <button className="flex h-[44px] min-h-[44px] px-[16px] justify-center items-center gap-[12px] rounded-[12px] border border-[#2463EB] bg-[#2463EB] text-white hover:bg-white hover:text-[#2463EB] transition-colors duration-200">
              {t("buttonText")}
            </button>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 mt-[64px] gap-[64px]">
            <Service
              icon="/electricIcon.svg"
              title={t("firstServiceHeader")}
              description={t("firstServiceDesc")}
            />
            <Service
              icon="/starIcon.svg"
              title={t("secondServiceHeader")}
              description={t("secondServiceDesc")}
            />
            <Service
              icon="/lockIcon.svg"
              title={t("thirdServiceHeader")}
              description={t("thirdServiceDesc")}
            />
            <Service
              icon="/electricIcon.svg"
              title={t("fourthServiceHeader")}
              description={t("fourthServiceDesc")}
            />
            <Service
              icon="/starIcon.svg"
              title={t("fifthServiceHeader")}
              description={t("fifthServiceDesc")}
            />
            <Service
              icon="/heart.svg"
              title={t("sixthServiceHeader")}
              description={t("sixthServiceDesc")}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
