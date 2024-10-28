"use client";

import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import FaqItem from "./FaqItem";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("Faq");

  const faqData = [
    {
      question: t("questions.0.question"),
      answer: t("questions.0.answer"),
    },
    {
      question: t("questions.1.question"),
      answer: t("questions.1.answer"),
    },
    {
      question: t("questions.2.question"),
      answer: t("questions.2.answer"),
    },
    {
      question: t("questions.3.question"),
      answer: t("questions.3.answer"),
    },
    {
      question: t("questions.4.question"),
      answer: t("questions.4.answer"),
    },
  ];

  return (
    <section className="mt-[108px]">
      <MaxWidthWrapper>
        <h2 className="text-center text-[#054B4E] text-[30px] font-bold leading-[42px]">
          {t("header")}
        </h2>
        <p className="text-center text-[#0D0D0D] text-[18px] font-medium leading-[28px] mt-[12px]">
          {t("description")}
        </p>
        <div className="mt-[64px]">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Faq;
