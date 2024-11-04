import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useTranslations } from "next-intl";

const MentalWellness = () => {
  const t = useTranslations("MentalWellness");

  const steps = [
    {
      imgSrc: "/mental1.svg",
      imgAlt: "individual therapy",
      header: t("firstStepHeader"),
      desc: t("firstStepDesc"),
    },
    {
      imgSrc: "/mental2.svg",
      imgAlt: "how to book instructions",
      header: t("secondStepHeader"),
      desc: t("secondStepDesc"),
    },
    {
      imgSrc: "/mental3.svg",
      imgAlt: "how to book instructions",
      header: t("thirdStepHeader"),
      desc: t("thirdStepDesc"),
    },
    {
      imgSrc: "/mental4.svg",
      imgAlt: "how to book instructions",
      header: t("fourthStepHeader"),
      desc: t("fourthStepDesc"),
    },
  ];

  return (
    <section className="mt-[108px] mb-[44px]">
      <MaxWidthWrapper>
        <div>
          <h2 className="text-center text-[#074A68] font-fontPrimary leading-[42px] font-extrabold sm:text-[56px] text-[38px]">
            {t("header")}
          </h2>
          <div className="flex sm:flex-row flex-col items-center justify-center gap-[12px] mt-[64px] text-center">
            {steps.map((step, index) => (
              <div key={index} className="sm:mt-0 mt-[32px]">
                <div className="flex justify-center items-center">
                  <Image
                    src={step.imgSrc}
                    alt={step.imgAlt}
                    width={203}
                    height={203}
                  />
                </div>
                <h3 className="font-fontSecondary text-[22px] font-semibold tracking-[0.88px] leading-[33px] text-[#074A68] mt-[12px] mb-[12px]">
                  {step.header}
                </h3>
                <p className="text-[20px] text-[#074A68] font-fontSecondary font-light sm:w-[70%] w-full mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MentalWellness;
