"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SpecialistCard from "@/components/SpecialistCard/SpecialistCard";

type SessionType = {
  imageSrc: string;
  alt: string;
  title: string;
  price: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  buttonTextColor: string;
  hoverColor: string;
};

const Team = () => {
  const t = useTranslations("Teams");

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail(""); // Clear email input
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  // Example data for the specialist
  const specialties: string[] = [
    "Specializes in eating disorders, anxiety, and insomnia.",
    "Psychotherapist during certification at the SWPS School of Cognitive-Behavioral Therapy (PTTPB).",
    "Skilled in integrating CBT, mindfulness, and schema therapy, with professional experience in psychiatric clinics and therapy centers.",
  ];

  const specialties2: string[] = [
    "Specializes in PTSD, anxiety, and mood disorders.",
    "Psychotherapist in training at the Crescentia School of Psychotherapy (PTTPB).",
    "Specializing in CBT, with certifications from the Feeling Good Institute (Level 1) and extensive experience gained through HR roles, psychological internships, counseling workshops, and therapeutic practice.",
  ];

  // Session types data
  const sessionTypes: SessionType[] = [
    {
      imageSrc: "/sessionType1.svg",
      alt: "psychotherapy consultation icon",
      title: t("firstItemHeader"),
      price: "180 zł",
      description: t("firstItemDesc"),
      buttonText: t("buttonText"),
      buttonColor: "bg-[#A0D195]",
      buttonTextColor: "text-[#074A68]",
      hoverColor: "hover:text-[#A0D195]",
    },
    {
      imageSrc: "/sessionType2.svg",
      alt: "psychotherapy consultation icon",
      title: t("secondItemHeader"),
      price: "180 zł",
      description: t("secondItemDesc"),
      buttonText: t("buttonText"),
      buttonColor: "bg-[#074A68]",
      buttonTextColor: "text-[#FFFDF7]",
      hoverColor: "hover:text-[#074A68]",
    },
    {
      imageSrc: "/sessionType3.svg",
      alt: "psychotherapy consultation icon",
      title: t("thirdItemHeader"),
      price: "180 zł",
      description: t("thirdItemDesc"),
      buttonText: t("buttonText"),
      buttonColor: "bg-[#A0D195]",
      buttonTextColor: "text-[#074A68]",
      hoverColor: "hover:text-[#A0D195]",
    },
  ];

  // Specialist card component
  const SpecialistCards = () => (
    <>
      <SpecialistCard
        imageSrc="/kasia1.png"
        name="Kasia H. Nowak"
        specialties={specialties}
        imagePosition="left"
        linkHref="/team/specialistOne"
        buttonText={t("scheduleBtn")}
      />
      <SpecialistCard
        imageSrc="/KasiaNowakTeam.jpg"
        name="Kasia Nowak"
        specialties={specialties2}
        imagePosition="right"
        linkHref="/team/specialistSecond"
        buttonText={t("scheduleBtn")}
      />
    </>
  );

  // Session card component
  const SessionCard: React.FC<SessionType> = ({
    imageSrc,
    alt,
    title,
    price,
    description,
  }) => (
    <div className="flex flex-col items-center">
      <Image src={imageSrc} alt={alt} width={240} height={250} />
      <div className="text-center bg-white rounded-[32px] shadow-sm mt-[32px] p-[20px] lg:w-[331px] w-full lg:h-[320px] flex flex-col justify-between">
        <div>
          <h3 className="font-fontSecondary text-lg font-semibold leading-[33px] text-[#074A68] mb-[18px]">
            {title}
          </h3>
          <span className="text-[#074A68] font-fontSecondary text-xl font-light text-center mb-[18px]">
            {price}
          </span>
          <p className="text-[#074A68] text-base font-normal leading-[28px] tracking-[0.2px] text-center pt-[32px] pb-[32px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="mt-[32px]">
      <MaxWidthWrapper>
        {/* Header Section */}
        <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-[12px]">
          <div className="flex flex-col justify-center items-center">
            <div className="sm:w-[80%] w-full">
              <h2 className="mt-[32px] text-[#074A68] sm:text-6xl text-[38px] font-extrabold leading-[55px] font-fontPrimary text-center lg:text-start">
                {t("header")}
              </h2>
              <p className="mt-[32px] text-[#074A68] font-fontSecondary font-light text-lg leading-[30.8px] mb-[60px] text-center lg:text-start">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="lg:w-[388px] lg:h-[388px] w-full h-full flex-shrink-0 flex lg:justify-start justify-center lg:mt-0 mt-3">
            <Image
              src="/howtobook1.svg"
              alt="person booking a session on tablet"
              width={350}
              height={350}
            />
          </div>
        </div>

        {/* Specialist Cards Section */}
        <div className="mt-[108px]">
          <h2 className="text-center text-[#074A68] font-fontPrimary leading-[75px] font-extrabold sm:text-5xl text-[38px] tracking-[-0.56px]">
            {t("headerSecond")}
          </h2>
          <p className="mt-[32px] text-center text-[#074A68] font-fontSecondary font-light text-lg leading-[30.8px] mb-[60px]">
            {t("descriptionSecond")}
          </p>
          <SpecialistCards />
        </div>

        {/* Session Types Section */}
        <div className="mt-[108px]">
          <h2 className="text-center text-[#074A68] font-fontPrimary leading-[75px] font-extrabold sm:text-5xl text-[38px] tracking-[-0.56px]">
            {t("headerThird")}
          </h2>
          <p className="mt-[32px] text-center text-[#074A68] font-fontSecondary font-light text-lg leading-[30.8px] mb-[60px] pt-[32px] pb-[32px]">
            {t("descriptionThird")}
          </p>
          <div className="flex lg:flex-row flex-col gap-[16px] items-center justify-center">
            {sessionTypes.map((sessionType, index) => (
              <SessionCard key={index} {...sessionType} />
            ))}
          </div>
        </div>
        <div className="mt-[108px]">
          <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-[12px]">
            <div className="lg:w-[388px] lg:h-[388px] w-full h-full flex-shrink-0 flex lg:justify-start justify-center lg:mt-0 mt-3">
              <Image
                src="/teamsEndImage.svg"
                alt="person watering a plant"
                width={410}
                height={410}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="sm:w-[60%] w-full">
                <h2 className="mt-[32px] text-[#074A68] sm:text-5xl text-[38px] font-extrabold leading-[55px] font-fontPrimary text-center lg:text-start">
                  {t("headerEnd")}
                </h2>
                <p className="mt-[32px] text-[#074A68] font-fontSecondary font-light lg:text-lg text-[18px] leading-[30.8px] mb-[60px] text-center lg:text-start">
                  {t("descriptionEnd")}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[108px]">
            <h2 className="mt-[32px] text-[#074A68] sm:text-5xl text-[38px] font-extrabold leading-[55px] font-fontPrimary text-center">
              {t("contactUs")}
            </h2>
            <p className="mt-[32px] text-[#074A68] font-fontSecondary font-light text-lg leading-[30.8px]  text-center ">
              {t("contactDesc")}
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 justify-center mt-[32px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("contactPlaceholder")}
                className="flex h-[56px] p-4 items-center gap-[8px] text-sm self-stretch rounded-lg border border-[#074A68] text-black !outline-none"
                required
              />
              <button
                type="submit"
                className="flex h-[53px] px-[24px] py-4 justify-center items-center gap-[4px] rounded-lg bg-[#074A68] text-[#ECFDF5] text-center font-fira text-sm font-normal leading-[160%] hover:bg-inherit transition-all duration-300 hover:text-[#074A68]"
              >
                {t("contactButton")}
              </button>
            </form>
            <div className="mt-[16px]">
              {status === "sending" && (
                <p className="text-center text-[#074A68]">
                  {t("messageSending")}
                </p>
              )}
              {status === "success" && (
                <p className="text-center text-[#074A68]">
                  {t("messageSuccess")}
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-[#FF0000]">{t("messageFail")}</p>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Team;
