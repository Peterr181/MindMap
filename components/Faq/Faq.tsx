"use client";

import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import FaqItem from "./FaqItem";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

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
    <section className="mt-[50px]">
      <MaxWidthWrapper>
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full max-w-[600px]">
              <h2 className="text-[#074A68] text-[38px] sm:text-5xl font-extrabold leading-tight font-fontPrimary mt-[32px] sm:mt-0">
                {t("header")}
              </h2>

              <p className="mt-[32px] text-[#074A68] font-fontSecondary font-light text-lg leading-[1.4] mb-[60px]">
                {t("description")}
              </p>

              <div className="flex justify-center sm:justify-start">
                <Link href="/blog">
                  <button className="flex h-[60px] px-10 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#074A68] text-[#FFFDF7] font-fontNavbar font-bold leading-[26px] text-sm transition-all hover:bg-inherit hover:text-[#074A68]">
                    {t("buttonText")}
                  </button>
                </Link>
              </div>
            </div>
            ;
          </div>
          <div className="sm:w-1/2 w-full sm:mt-0 mt-[24px]">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Faq;
