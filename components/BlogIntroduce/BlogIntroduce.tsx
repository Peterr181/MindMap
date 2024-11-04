import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const BlogIntroduce = () => {
  const t = useTranslations("BlogIntroduce");
  return (
    <section className="mt-[108px]">
      <MaxWidthWrapper>
        <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-[12px]">
          <div className="flex flex-col justify-center items-center">
            <div className="sm:w-[80%] w-full">
              <h2 className="mt-[32px] text-[#074A68] sm:text-[56px] text-[38px] font-extrabold leading-[55px] font-fontPrimary  text-center lg:text-start">
                {t("header")}
              </h2>

              <p className="mt-[32px] text-[#074A68] font-fontSecondary font-light text-[22px] leading-[30.8px] mb-[60px] text-center lg:text-start ">
                {t("description")}
              </p>
              <div className="flex  lg:justify-end justify-center mb-[16px] sm:mb-0">
                <Link href="/schedule">
                  <button className="flex h-[60px] px-10 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#FFD015] text-[#074A6B] font-bold leading-[26px] text-[16px] transition-all hover:bg-white hover:text-[#FFD015]">
                    {t("buttonText")}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-[504px] lg:h-[524px] w-full h-full flex-shrink-0 flex lg:justify-start justify-center lg:mt-0 mt-3">
            <Image
              src="/highlightImage.png"
              alt="highlight image"
              width={504}
              height={524}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BlogIntroduce;
