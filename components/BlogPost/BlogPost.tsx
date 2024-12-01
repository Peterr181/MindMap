import Image from "next/image";
import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface PostFields {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  slug: string;
  category?: string[];
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

interface BlogPostProps {
  post: PostFields;
}

const getAuthorImage = (author: string) => {
  switch (author) {
    case "Kasia H. Nowak":
      return "/KashiaHDetailed.png";
    case "Kasia Nowak":
      return "/KasiaNowak1.jpg";
    default:
      return "/avatarBlog.png";
  }
};

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { title, description, author, publishDate, category, image, slug } =
    post;

  const t = useTranslations("BlogIntroduction");

  const categoryTranslations: { [key: string]: string } = {
    mindfulness: t("mindfulness"),
    sad: t("sad"),
    happy: t("happy"),
    copingSkills: t("copingSkills"),
    mentalHealth: t("mentalHealth"),
    anxiety: t("anxiety"),
    selfCare: t("selfCare"),
  };

  return (
    <div className="bg-white shadow-md flex items-center lg:flex-row flex-col p-[20px] justify-between rounded-[32px]">
      <div className="lg:w-[700px] w-full">
        <div className="flex flex-wrap items-center lg:justify-start justify-center gap-[8px] sm:gap-[16px] mb-[50px]">
          {category &&
            category.map((categoryItem, index) => (
              <span
                key={index}
                className="rounded-[30px] border border-[#EAEBF0] p-[4px] sm:p-[8px] bg-[#fff] text-[12px] sm:text-[14px] font-semibold leading-[16px] sm:leading-[20px] text-[#252525]"
              >
                {categoryTranslations[
                  categoryItem.toLowerCase().replace(/\s+/g, "")
                ] || categoryItem}
              </span>
            ))}
        </div>

        <h2 className="text-[#074A68] font-fontPrimary leading-[75px] font-extrabold sm:text-5xl text-[38px] tracking-[-0.56px] mt-[32px] lg:text-start text-center ">
          {title}
        </h2>
        <div>
          <p className="mt-[32px] text-[#074A68] font-fontSecondary font-light text-lg leading-[30.8px] lg:text-start text-center break-words">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-[12px] mt-[32px] lg:justify-start justify-center">
          <div className="rounded-full">
            <Image
              src={getAuthorImage(author)}
              width={45}
              height={45}
              alt="specialists avatar"
              className="rounded-full"
              quality={100}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] text-[#757575]">{author}</p>
            <p className="text-[#B3B3B3] text-[14px] mt-[4px]">
              {t("published")} {publishDate}
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Link href={`/blog/${slug}`}>
            <button className="flex h-[60px] px-10 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#074A68] text-[#FFFDF7] font-fontNavbar font-bold leading-[26px] text-sm transition-all hover:bg-inherit  hover:text-[#074A68] mt-[32px]">
              {t("buttonTextPost")}
            </button>
          </Link>
        </div>
      </div>

      {image && image.fields.file && (
        <div className="flex-grow lg:ml-[32px] lg:w-[445px] lg:h-[416px] w-full h-[240px] rounded-[32px] lg:mt-0 mt-[32px] overflow-hidden">
          <Image
            src={`https:${image.fields.file.url}`}
            width={445}
            height={416}
            alt={title}
            className="object-cover object-center w-full h-full"
            quality={100}
          />
        </div>
      )}
    </div>
  );
};

export default BlogPost;
