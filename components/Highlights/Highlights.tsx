import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Highlights = () => {
  const t = useTranslations("Highlights");
  return (
    <section className="mt-[108px]">
      <MaxWidthWrapper>
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <div className="flex flex-col md:w-[480px] w-full">
            <div
              className="p-[10px] border border-[#B3B3B3] mb-[20px] flex justify-center items-center rounded-[12px]"
              style={{ width: "fit-content" }}
            >
              <Image
                src="./electricIcon.svg"
                alt="highlight image"
                width={24}
                height={24}
              />
            </div>
            <h2 className="mt-[32px] text-[#054B4E] text-[30px] font-bold leading-[42px]">
              {t("header")}
            </h2>
            <p className="mt-[10px] text-[#054B4E] text-[16px] font-normal leading-[24px]">
              {t("description")}
            </p>
            <div className="flex items-center gap-4 mt-[44px]">
              <div
                className="p-[10px] border border-[#B3B3B3] mb-[20px] flex justify-center items-center rounded-[12px] cursor-pointer"
                style={{ width: "fit-content" }}
              >
                <Image
                  src="./arrowLeft.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </div>
              <div
                className="p-[10px] border border-[#B3B3B3] mb-[20px] flex justify-center items-center rounded-[12px] cursor-pointer"
                style={{ width: "fit-content" }}
              >
                <Image
                  src="./arrowRight.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </div>
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
