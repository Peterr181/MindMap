import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BlogIntroduce = () => {
  const t = useTranslations("BlogIntroduce");
  return (
    <section className="mt-[108px]">
      <MaxWidthWrapper>
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <div className="flex flex-col md:w-[480px] w-full">
            <h2 className="mt-[32px] text-[#054B4E] text-[30px] font-bold leading-[42px]">
              {t("header")}
            </h2>
            <div
              className="p-[10px] border border-[#B3B3B3] mt-[44px] mb-[20px] flex justify-center items-center rounded-[12px]"
              style={{ width: "fit-content" }}
            >
              <Image
                src="/starIcon.svg"
                alt="benefit icon"
                width={24}
                height={24}
              />
            </div>
            <p className="mt-[10px] text-[#054B4E] text-[16px] font-normal leading-[24px]">
              {t("description")}
            </p>

            <div className="flex mt-[32px]">
              <button className="flex h-[44px] min-h-[44px]  justify-center items-center gap-[12px] rounded-[12px] bg-inherit text-[#2463EB] hover:bg-white hover:text-[#2463EB] transition-colors duration-200">
                {t("buttonText")}
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/blogIntroduce.png"
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
