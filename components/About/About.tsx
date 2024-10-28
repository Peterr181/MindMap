import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import aboutImage from "../../public/aboutImage.png";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  return (
    <section className="mt-[108px]">
      <MaxWidthWrapper>
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div>
            <Image
              src={aboutImage}
              alt="About image"
              width={600}
              height={600}
            />
          </div>
          <div className="lg:w-[650px] w-full md:mt-0 mt-6 md:ml-[20px] ml-0">
            <h2 className="text-[#054B4E] sm:text-[30px] text-[24px] font-bold leading-[32px]">
              {t("header")}
            </h2>
            <p className="text-[#000] text-[18px] font-medium leading-[24px] mt-[12px]">
              {t("description")}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
