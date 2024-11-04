import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Service from "./Service";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const Services = () => {
  const t = useTranslations("Services");

  return (
    <section className="mt-[160px] mb-[44px]">
      <MaxWidthWrapper>
        <div>
          <h2 className="text-center  text-[#074A68] font-fontPrimary leading-[75px] font-extrabold  sm:text-[56px] text-[38px] tracking-[-0.56px]">
            {t("header")}
          </h2>

          <div className="grid lg:grid-cols-3 grid-cols-1 mt-[64px] gap-[64px]">
            <Service
              color="#CAE6F2"
              icon="/electricIcon.svg"
              title={t("firstServiceHeader")}
              description={t("firstServiceDesc")}
            />
            <Service
              color="#A0D195"
              icon="/starIcon.svg"
              title={t("secondServiceHeader")}
              description={t("secondServiceDesc")}
            />
            <Service
              color="#CAE6F2"
              icon="/lockIcon.svg"
              title={t("thirdServiceHeader")}
              description={t("thirdServiceDesc")}
            />
            <Service
              color="#A0D195"
              icon="/electricIcon.svg"
              title={t("fourthServiceHeader")}
              description={t("fourthServiceDesc")}
            />
            <Service
              color="#CAE6F2"
              icon="/starIcon.svg"
              title={t("fifthServiceHeader")}
              description={t("fifthServiceDesc")}
            />
            <Service
              color="#A0D195"
              icon="/heart.svg"
              title={t("sixthServiceHeader")}
              description={t("sixthServiceDesc")}
            />
          </div>

          <div className="flex lg:justify-end justify-center mt-[80px]">
            <Link href="/booknow">
              <button className="flex h-[60px] px-10 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#074A68] text-[#FFFDF7] font-fontNavbar font-bold leading-[26px] text-[16px] transition-all hover:bg-white hover:text-[#074A68]">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
