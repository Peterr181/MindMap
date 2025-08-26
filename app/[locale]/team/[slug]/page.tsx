import { getTranslations } from "next-intl/server";
import SpecialistProfileClient from "../SpecialistProfileClient";

interface SpecialistProfileServerProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SpecialistProfileServer({
  params,
}: SpecialistProfileServerProps) {
  const t = await getTranslations("SpecialistProfile");
  const { slug } = await params;

  const specialists = [
    {
      slug: "kasiahannanowak",
      name: t("specialistOne.name"),
      schoolName: t("specialistOne.schoolName"),

      imageSrc: "/kasia11main.jpg",
      experience: t("specialistOne.experience"),
      approach: t("specialistOne.approach"),
      areas: [
        t("specialistOne.area1"),
        t("specialistOne.area2"),
        t("specialistOne.area3"),
        t("specialistOne.area4"),
        t("specialistOne.area5"),
        t("specialistOne.area6"),
        t("specialistOne.area7"),
      ],
      specialties: [
        t("specialistOne.specialtyA"),
        t("specialistOne.specialtyB"),
      ],
      description: t("specialistOne.description"),
    },
    {
      slug: "kasianowak",
      name: t("specialistSecond.name"),
      schoolName: t("specialistSecond.schoolName"),

      imageSrc: "/KasiaNDetailed.png",
      experience: t("specialistSecond.experience"),
      approach: t("specialistSecond.approach"),
      areas: [
        t("specialistSecond.area1"),
        t("specialistSecond.area2"),
        t("specialistSecond.area3"),
        t("specialistSecond.area4"),
        t("specialistSecond.area5"),
        t("specialistSecond.area6"),
      ],
      specialties: [
        t("specialistSecond.specialtyA"),
        t("specialistSecond.specialtyB"),
      ],
      description: t("specialistSecond.description"),
    },
  ];

  const specialist = specialists.find((s) => s.slug === slug);

  if (!specialist) {
    return <div>Specialist not found.</div>;
  }

  const services = [
    {
      title: t("firstItemTitle"),
      description: t("firstItemDescription"),
    },
    {
      title: t("secondItemTitle"),
      description: t("secondItemDescription"),
      isPrimaryButton: true,
    },
    {
      title: t("thirdItemTitle"),
      description: t("thirdItemDescription"),
    },
  ];

  return (
    <SpecialistProfileClient
      specialist={specialist}
      services={services}
      experienceTitle={t("experience")}
      sessionTypeTitle={t("sessionType")}
      slug={slug}
      approachTitle={t("approachTitle")}
      areasSupportedTitle={t("areasSupportedTitle")}
      appointmentText={t("appointmentText")} // Pass appointmentText
    />
  );
}
