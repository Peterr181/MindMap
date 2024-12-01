import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HowToBook = () => {
  const t = useTranslations("HowToBook");

  const steps = [
    {
      imgSrc: "/howtobook1.svg",
      header: t("firstStepHeader"),
      desc: t("firstStepDesc"),
    },
    {
      imgSrc: "/howtobook2.svg",
      header: t("secondStepHeader"),
      desc: t("secondStepDesc"),
    },
    {
      imgSrc: "/howtobook3.svg",
      header: t("thirdStepHeader"),
      desc: t("thirdStepDesc"),
    },
  ];

  return (
    <section className="mt-[50px] mb-[44px]">
      <MaxWidthWrapper>
        <div>
          <h2 className="text-center text-[#074A68] font-fontPrimary leading-[42px] font-extrabold sm:text-5xl text-[38px]">
            {t("header")}
          </h2>
          <div className="flex md:flex-row flex-col items-start justify-center gap-[12px] mt-[64px] text-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  index !== 0 ? "md:mt-0 mt-[32px]" : ""
                }`}
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={step.imgSrc}
                    alt="how to book instructions"
                    width={170}
                    height={170}
                  />
                </div>
                <h3 className="font-fontSecondary text-lg font-semibold tracking-[0.88px] leading-[33px] text-[#074A68] mt-[12px] mb-[12px]">
                  {step.header}
                </h3>
                <p className="text-base text-[#074A68] font-fontSecondary font-light sm:w-[70%] w-full mx-auto">
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

export default HowToBook;
