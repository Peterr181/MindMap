import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import aboutImage from "../../public/aboutImage.png";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const About = () => {
  const t = useTranslations("About");

  return (
    <section className="mt-[120px]">
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="lg:w-[504px] lg:h-[524px] w-full h-full flex lg:justify-start justify-center mb-3 lg:mb-0 ">
            <Image
              src="/aboutImage.png"
              alt="highlight image"
              width={504}
              height={524}
            />
          </div>

          <div className="md:w-1/2 md:mt-0 mt-6 text-left">
            <h2 className="  text-[#074A68] font-fontPrimary leading-[75px] font-extrabold  sm:text-[68px] text-[38px] tracking-[-0.56px] mb-[16px] text-center lg:text-start">
              {t("header")}
            </h2>
            <p className="text-[#074A68] text-[22px] font-light font-fontSecondary leading-[30.8px] tracking-[-0.22px] mb-[47px] text-center lg:text-start">
              {t("description")}
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/booknow">
                <button className="flex h-[60px] px-10 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#A0D195] text-[#074A68] font-bold leading-[26px] text-[16px] transition-all hover:bg-white hover:text-[#A0D195]">
                  WHY CHOOSE US?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
