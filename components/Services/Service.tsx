import React from "react";
import Image from "next/image";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: ServiceProps) => {
  return (
    <div className="flex flex-col items-center bg-[#FCFCFC] pt-[24px] pb-[24px] pl-[16px] pr-[16px]">
      <div
        className="p-[10px] border border-[#B3B3B3] mb-[20px] flex justify-center items-center rounded-[12px]"
        style={{ width: "fit-content" }}
      >
        <Image src={icon} alt="benefit icon" width={24} height={24} />
      </div>

      <h3 className="text-[18px] text-[#054B4E] leading-[20px] font-semibold">
        {title}
      </h3>
      <p className="mt-[10px] text-[16px] text-[#054B4E] leading-[24px] font-normal text-center">
        {description}
      </p>
    </div>
  );
};

export default Service;
