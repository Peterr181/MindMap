import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const BlogIntroduction = () => {
  const t = useTranslations("BlogIntroduction");

  return (
    <section className="mt-[108px]">
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[64px] sm:gap-[80px]">
          {/* Image container */}
          <div className="flex-shrink-0 lg:w-[406px] lg:h-[406px] w-full h-full flex items-center justify-center">
            <Image
              src="/email.svg"
              alt="highlight image"
              width={406}
              height={406}
              layout="fixed"
            />
          </div>

          {/* Text and button container */}
          <div className="flex flex-col items-center sm:items-start text-center lg:text-left w-full max-w-[600px]">
            <h2 className="text-[#074A68] text-[38px] sm:text-[56px] font-extrabold leading-tight font-fontPrimary mt-[32px] sm:mt-0">
              {t("header")}
            </h2>

            <p className="mt-[32px] text-[#074A68] font-fontSecondary font-light text-[22px] leading-[1.4] mb-[60px]">
              {t("description")}
            </p>

            <div className="flex justify-center lg:justify-start mx-auto lg:m-0">
              <Link href="/blog">
                <button className="flex h-[60px] px-10 py-4 items-center gap-2 rounded-[8px] bg-[#A0D195] text-[#074A68] font-bold text-[16px] leading-[26px] transition-all hover:bg-white hover:text-[#A0D195]">
                  {t("buttonText")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BlogIntroduction;
