import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HowToBook = () => {
  const t = useTranslations("HowToBook");

  return (
    <section className="mt-[108px] mb-[44px]">
      <MaxWidthWrapper>
        <div>
          <h2 className="text-center  text-[#074A68] font-fontPrimary leading-[42px] font-extrabold  sm:text-[56px] text-[38px]">
            {t("header")}
          </h2>
          <div className="flex md:flex-row flex-col items-center justify-center gap-[12px] mt-[64px] text-center">
            <div className=" ">
              <div className="flex justify-center items-center">
                <Image
                  src="/howtobook1.svg"
                  alt="how to book instructions"
                  width={203}
                  height={203}
                />
              </div>
              <h3 className="font-fontSecondary text-[22px] font-semibold tracking-[0.88px] leading-[33px] text-[#074A68] mt-[12px] mb-[12px]">
                {t("firstStepHeader")}
              </h3>
              <p className="text-[20px] text-[#074A68] font-fontSecondary font-light sm:w-[70%] w-full mx-auto">
                {t("firstStepDesc")}
              </p>
            </div>
            <div className="md:mt-0 mt-[32px]">
              <div className="flex justify-center items-center">
                <Image
                  src="/howtobook2.svg"
                  alt="how to book instructions"
                  width={203}
                  height={203}
                />
              </div>
              <h3 className="font-fontSecondary text-[22px] font-semibold tracking-[0.88px] leading-[33px] text-[#074A68] mt-[12px] mb-[12px]">
                {t("secondStepHeader")}
              </h3>
              <p className="text-[20px] text-[#074A68] font-fontSecondary font-light sm:w-[70%] w-full mx-auto">
                {t("secondStepDesc")}
              </p>
            </div>
            <div className="md:mt-0 mt-[32px] ">
              <div className="flex justify-center items-center">
                <Image
                  src="/howtobook3.svg"
                  alt="how to book instructions"
                  width={203}
                  height={203}
                />
              </div>
              <h3 className="font-fontSecondary text-[22px] font-semibold tracking-[0.88px] leading-[33px] text-[#074A68] mt-[12px] mb-[12px]">
                {t("thirdStepHeader")}
              </h3>
              <p className="text-[20px] text-[#074A68] font-fontSecondary font-light  sm:w-[70%] w-full mx-auto">
                {t("thirdStepDesc")}
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowToBook;
