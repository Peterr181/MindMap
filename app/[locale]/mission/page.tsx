import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Mission = () => {
  const t = useTranslations("Mission");
  return (
    <section className="mt-[32px]">
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row items-center lg:gap-[64px] gap-[32px] w-full">
          <div className="lg:w-[459px] lg:h-[595px] w-full h-full lg:flex lg:justify-start justify-center mb-3 lg:mb-0 hidden">
            <Image
              src="/missionFirst.png"
              alt="our mission image"
              width={459}
              height={595}
              quality={100}
            />
          </div>

          <div className="lg:w-1/2 lg:mt-0 mt-6 text-left lg:ml-9 ml-0">
            <h2 className="  text-[#074A68] font-fontPrimary leading-[75px] font-extrabold  sm:text-6xl text-[38px] tracking-[-0.68px] mb-[16px] text-center lg:text-start">
              {t("headerFirst")}
            </h2>
            <p className="text-[#074A68] text-lg font-light font-fontSecondary leading-[30.8px] tracking-[-0.22px] mb-[47px] text-center lg:text-start">
              {t("descriptionFirst")}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:gap-[64px] gap-[32px] w-full lg:mt-[80px] mt-0">
          <div className="lg:w-1/2 lg:mt-0 mt-6 text-left lg:ml-9 ml-0">
            <h2 className="  text-[#074A68] font-fontPrimary leading-[75px] font-extrabold  sm:text-[42px] text-[30px] tracking-[-0.68px] mb-[16px] text-center lg:text-start">
              {t("headerSecond")}
            </h2>
            <p className="text-[#074A68] text-lg font-light font-fontSecondary leading-[30.8px] tracking-[-0.22px] mb-[47px] text-center lg:text-start lg:w-[88%] w-full">
              {t("descriptionSecond")}
            </p>
          </div>
          <div className="lg:w-[427px] lg:h-[439px] w-full h-full flex lg:justify-start justify-center mb-3 lg:mb-0 ">
            <Image
              src="/missionSecond.png"
              alt="our mission image"
              width={427}
              height={439}
              quality={100}
              unoptimized
            />
          </div>
        </div>
        <div className="flex flex-col  lg:gap-[64px] gap-[32px] w-full lg:mt-[80px] mt-0">
          <div className="text-center lg:mt-0 mt-6  lg:ml-9 ml-0">
            <h2 className="  text-[#074A68] font-fontPrimary leading-[75px] font-extrabold  sm:text-[42px] text-[38px] tracking-[-0.68px] mb-[32px]  text-center ">
              {t("headerThird")}
            </h2>
            <p className="text-[#074A68] text-lg font-light font-fontSecondary leading-[30.8px] tracking-[-0.22px] mb-[47px] text-center lg:text-start ">
              {t("descriptionThirdFirst")}
            </p>
            <p className="text-[#074A68] text-lg font-light font-fontSecondary leading-[30.8px] tracking-[-0.22px]  text-center lg:text-start ">
              {t("descriptionThirdSecond")}
            </p>
            <p className="text-[#074A68] text-lg font-light font-fontSecondary leading-[30.8px] tracking-[-0.22px]  text-center lg:text-start mt-[47px] ">
              {t("descriptionThirdThird")}
            </p>
          </div>
          <div className="lg:w-[808px] lg:h-[390px]  w-full h-full flex  justify-center mx-auto mb-3 lg:mb-0 ">
            <Image
              src="/missionThird.jpg"
              alt="our mission image"
              className="rounded-[32px]"
              width={808}
              height={390}
              quality={100}
            />
          </div>
          <p className="text-[#074A68] text-lg font-light font-fontSecondary leading-[30.8px] tracking-[-0.22px]  text-center  ">
            {t("descriptionThirdQuad")}
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Mission;
