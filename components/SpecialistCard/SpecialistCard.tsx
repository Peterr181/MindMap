import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing"; // Import the Link component from Next.js

// Define the props interface
interface SpecialistCardProps {
  imageSrc: string; // URL of the specialist's image
  name: string; // Name of the specialist
  specialties: string[]; // Array of specialties
  imagePosition?: "left" | "right"; // Image position prop
  linkHref: string; // New prop for the link URL
  buttonText: string; // New prop for the button text
}

// Functional component with props type
const SpecialistCard: React.FC<SpecialistCardProps> = ({
  imageSrc,
  name,
  specialties,
  imagePosition = "left",
  linkHref, // Destructure the new link prop
  buttonText, // Destructure the new button text prop
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={`flex flex-col lg:flex-row gap-[32px] items-center bg-white shadow-md rounded-[32px] p-[24px] lg:p-[48px] mt-[32px] lg:mt-[108px]`}
    >
      {/* Container for the image and text with justify-between */}
      <div className="justify-center flex items-center mx-auto">
        <div
          className={`flex ${
            isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } w-full items-center flex-col lg:gap-[128px] gap-[64px] `}
        >
          <div
            className={`lg:w-[407px] w-full flex-shrink-0 flex justify-center mt-3 ${
              isImageLeft ? "lg:mr-[32px]" : "lg:ml-[32px]"
            }`}
          >
            <Image
              src={imageSrc}
              alt={`${name} specialists image`}
              width={407}
              height={610}
              className="rounded-[16px] object-cover"
              quality={100}
              unoptimized
            />
          </div>

          <div className={`flex flex-col gap-[16px] w-full justify-start`}>
            <h2 className="text-[#074A68] font-fontPrimary leading-[55px] font-extrabold sm:text-5xl text-[32px] tracking-[-0.56px] text-center lg:text-left mb-[16px]">
              {name}
            </h2>
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center gap-[12px]">
                <Image
                  src="/checkCircle.svg"
                  alt="check circle icon"
                  width={20}
                  height={20}
                />
                <p className="text-[#074A68] font-fontSecondary font-light text-lg leading-[30.8px] ">
                  {specialty}
                </p>
              </div>
            ))}
            <div className="mt-[16px]">
              <Link href={linkHref} passHref>
                <button className="flex lg:w-[360px] w-full h-[60px] px-10 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#FFD015] text-[#074A6B] font-bold leading-[26px] text-base transition-all hover:bg-inherit  hover:text-[#FFD015]">
                  {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;
