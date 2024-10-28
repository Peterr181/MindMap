"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLParagraphElement | null>(null); // Reference to the content

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-[#B3B3B3] rounded-[12px] bg-[#FCFCFC] pt-[20px] pl-[24px] pr-[24px] pb-[24px] shadow-sm mb-[16px]">
      <div
        className="flex justify-between items-center p-4 cursor-pointer "
        onClick={toggleFaq}
      >
        <h4 className="text-[#054B4E] text-[18px] font-medium leading-[28px] ">
          {question}
        </h4>
        <Image
          src="/faqArrow.svg"
          alt="arrow icon"
          width={24}
          height={24}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`} // Rotate icon when open
        />
      </div>
      <div
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out", // Transition for smooth opening/closing
        }}
      >
        <p
          ref={contentRef}
          className="p-4 text-[#0D0D0D] text-[18px] font-normal leading-[28px]"
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
