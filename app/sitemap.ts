import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://themindmap.eu",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://themindmap.eu/en",
          pl: "https://themindmap.eu/pl",
        },
      },
    },
    {
      url: "https://themindmap.eu/mission",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://themindmap.eu/en/mission",
          pl: "https://themindmap.eu/pl/mission",
        },
      },
    },
    {
      url: "https://themindmap.eu/team",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://themindmap.eu/en/team",
          pl: "https://themindmap.eu/pl/team",
        },
      },
    },
    {
      url: "https://themindmap.eu/blog",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://themindmap.eu/en/blog",
          pl: "https://themindmap.eu/pl/blog",
        },
      },
    },
  ];
}
