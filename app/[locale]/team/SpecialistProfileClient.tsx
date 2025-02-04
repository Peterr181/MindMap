"use client";
import { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ServiceCard } from "@/components/Services/ServiceCard"; // Import the ServiceCard component
import Image from "next/image";
import { useLocale } from "next-intl";

interface Specialist {
  name: string;
  schoolName: string;
  linkDoctor?: string;
  imageSrc: string;
  experience: string;
  approach: string; // Add approach property
  areas: string[]; // Change areas property to string array
}

interface Service {
  title: string;
  description: string;
  isPrimaryButton?: boolean;
}

interface SpecialistProfileClientProps {
  specialist: Specialist;
  services: Service[];
  experienceTitle: string;
  sessionTypeTitle: string;
  slug: string; // Add slug prop
  approachTitle: string; // Add approachTitle prop
  areasSupportedTitle: string; // Add areasSupportedTitle prop
  appointmentText: string; // Add appointmentText prop
}

const SpecialistProfileClient: React.FC<SpecialistProfileClientProps> = ({
  specialist,
  services,
  experienceTitle,
  sessionTypeTitle,
  slug, // Destructure slug prop
  approachTitle, // Destructure approachTitle prop
  areasSupportedTitle, // Destructure areasSupportedTitle prop
  appointmentText, // Destructure appointmentText prop
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState(""); // For iframe source in modal
  const locale = useLocale();

  const getLocaleIframeSrc = (slug: string, lang: string) => {
    let domain;
    if (slug === "specialistOne") {
      domain = lang === "en" ? "kasiahnowak-en" : "kasiahnowak";
    } else {
      domain = lang === "en" ? "kasianowak-en" : "kasianowak";
    }
    return `https://${domain}.youcanbook.me`;
  };

  const handleServiceClick = () => {
    // Get iframe source with locale
    setIframeSrc(getLocaleIframeSrc(slug, locale));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIframeSrc(""); // Clear iframeSrc to avoid residual iframe
  };

  // Default iframe (without modal) logic
  const defaultIframeSrc = getLocaleIframeSrc(slug, locale); // Use current locale

  return (
    <section className="mt-[32px]">
      <MaxWidthWrapper>
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <div className="text-center lg:text-left">
            <h2 className="text-[#074A68] font-extrabold sm:text-6xl text-[32px] text-center lg:text-left">
              {specialist.name}
            </h2>
            <p className="text-lg text-[#074A68] mt-[48px] lg:w-[60%] w-full">
              {specialist.schoolName}
            </p>
          </div>
          <Image
            src={specialist.imageSrc}
            alt={`${specialist.name}'s image`}
            className="rounded-[32px] sm:mt-0 mt-3"
            width={399}
            height={480}
            quality={100}
            unoptimized
          />
        </div>

        <h3 className="text-[#074A68] font-extrabold sm:text-[40px] text-[30px] mt-[32px] text-center lg:text-left">
          {experienceTitle}
        </h3>
        <p className="text-lg text-[#074A68] text-center lg:text-left sm:p-0 p-3 mt-[16px]">
          {specialist.experience}
        </p>

        <h3 className="text-[#074A68] font-extrabold sm:text-[40px] text-[30px] mt-[32px] text-center lg:text-left">
          {approachTitle}
        </h3>
        <p className="text-lg text-[#074A68] text-center lg:text-left sm:p-0 p-3 mt-[16px]">
          {specialist.approach}
        </p>

        <h3 className="text-[#074A68] font-extrabold sm:text-[40px] text-[30px] mt-[32px] text-center lg:text-left">
          {areasSupportedTitle}
        </h3>
        <ul className="text-lg text-[#074A68] text-center lg:text-left sm:p-0 p-3 list-disc list-inside mt-[16px]">
          {specialist.areas.map(
            (area, index) => area && <li key={index}>{area}</li>
          )}
        </ul>

        <h3 className="text-[#074A68] font-extrabold sm:text-[50px] text-[38px] mt-[64px] text-center">
          {sessionTypeTitle}
        </h3>

        <div className="flex flex-wrap justify-center gap-[16px]">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price="180 zł" // Assuming price is part of the service object
              isPrimaryButton={service.isPrimaryButton}
              onClick={() => handleServiceClick()} // Pass language (default 'en')
            />
          ))}
        </div>

        <p className="text-lg text-center mt-[48px] text-[#074A68]">
          {appointmentText}
        </p>

        {/* Default iframe rendered on page load */}
        {!isModalOpen && (
          <div className="text-lg text-center mt-[16px] sm:p-0 p-6">
            <iframe
              src={defaultIframeSrc}
              className="w-full h-[80vh]"
              frameBorder="0"
            ></iframe>
          </div>
        )}

        {/* Modal iframe is displayed when modal is open */}
        {isModalOpen && iframeSrc && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 sm:p-6 p-6">
            <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl">
              <div className="flex justify-end p-2">
                <button onClick={closeModal} className="text-black">
                  <Image
                    src="/closeIcon.svg"
                    alt="Close icon"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
              <iframe
                src={iframeSrc}
                className="w-full h-[80vh]"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default SpecialistProfileClient;
