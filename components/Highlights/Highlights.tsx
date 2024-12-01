import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Highlights = () => {
  const t = useTranslations("Highlights");
  return (
    <section className="mt-[50px]">
      <MaxWidthWrapper>
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <div className="flex flex-col md:w-[480px] w-full">
            <h2 className="mt-[32px] text-[#054B4E] text-[30px] font-bold leading-[42px]">
              {t("header")}
            </h2>
            <p className="mt-[10px] text-[#054B4E] text-[16px] font-normal leading-[24px]">
              {t("description")}
            </p>

            <div className="flex mt-[32px] mb-6 lg:mb-0">
              <button className="flex h-[44px] min-h-[44px] px-[16px] justify-center items-center gap-[12px] rounded-[12px] border border-[#2463EB] bg-[#2463EB] text-white hover:bg-inherit  hover:text-[#2463EB] transition-colors duration-200">
                {t("buttonText")}
              </button>
            </div>
          </div>
          <div>
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

export default Highlights;
