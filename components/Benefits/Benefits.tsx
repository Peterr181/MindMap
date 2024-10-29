import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Benefit from "./Benefit";
import { useTranslations } from "next-intl";

const Benefits = () => {
  const t = useTranslations("Benefits");

  return (
    <section className="mt-[108px] mb-[64px]">
      <MaxWidthWrapper>
        <div>
          <h2 className="sm:text-[30px] text-[24px] font-bold text-[#054B4E] mt-3 mb-[64px]">
            {t("header")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-[24px]">
            <Benefit
              icon="./electricIcon.svg"
              title={t("firstItemHeader")}
              description={t("firstItemDesc")}
            />
            <Benefit
              icon="./starIcon.svg"
              title={t("secondItemHeader")}
              description={t("secondItemDesc")}
            />
            <Benefit
              icon="./lockIcon.svg"
              title={t("thirdItemHeader")}
              description={t("thirdItemDesc")}
            />
            <Benefit
              icon="./loveIcon.svg"
              title={t("fourthItemHeader")}
              description={t("fourthItemDesc")}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Benefits;
