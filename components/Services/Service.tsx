import React from "react";
import Image from "next/image";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const Service = ({ color, title, description }: ServiceProps) => {
  const getBackgroundClass = (color: string) => {
    switch (color) {
      case "#CAE6F2":
        return "bg-[#CAE6F2]"; // Corresponding Tailwind class
      case "#A0D195":
        return "bg-[#A0D195]";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center  pt-[24px] pb-[24px] pl-[16px] pr-[16px]">
      <h3
        className={`text-[22px] text-[#074A68] font-medium leading-[20px] tracking-[-0.88px] font-fontSecondary ${getBackgroundClass(
          color
        )} p-[10px] rounded-[30px] pr-4 pl-4`}
      >
        {title}
      </h3>
      <p className="mt-[20px] text-[20px] text-[#074A68] font-fontSecondary leading-[28px] font-light text-center tracking-[0.2px]">
        {description}
      </p>
    </div>
  );
};

export default Service;
