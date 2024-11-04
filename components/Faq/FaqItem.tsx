"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLParagraphElement | null>(null);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-[16px] ">
      {/* Question container with ::before border */}
      <div
        className="relative flex md:flex-row justify-between items-center px-[24px] py-[20px] cursor-pointer"
        onClick={toggleFaq}
      >
        <h4 className="text-[#074A68] text-[18px] font-fontSecondary font-normal leading-[27px]">
          {question}
        </h4>
        <Image
          src="/faqArrow.svg"
          alt="arrow icon"
          width={24}
          height={24}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />

        {/* ::before pseudo-element for bottom border */}
        <style jsx>{`
          div::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 10;
            width: 93%;
            height: 1px;
            background-color: #e5e7eb;
            transform: scaleX(1);
          }
        `}</style>
      </div>

      {/* Expandable answer content */}
      <div
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <p
          ref={contentRef}
          className=" text-[18px] text-[#074A68] font-fontSecondary leading-[28px] font-light tracking-[0.2px] p-3 w-[90%] mx-auto text-center"
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
