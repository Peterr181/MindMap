import React from "react";
import client from "@/utils/contentfulClient";
import { getTranslations } from "next-intl/server";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import ShareButtons from "@/components/ShareButtons";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const t = await getTranslations("Blog");
  const fetchPost = async () => {
    try {
      const response = await client.getEntries({
        content_type: "mindMapTest",
        "fields.slug": slug,
      });
      return response.items[0].fields;
    } catch (error) {
      console.error("Error fetching blog post:", error);
      return null;
    }
  };

  const post = await fetchPost();

  if (!post) {
    return <div>Post not found</div>;
  }

  const getAuthorImage = (author: string) => {
    switch (author) {
      case "Kasia H. Nowak":
        return "/kasia11main.jpg";
      case "Kasia Nowak":
        return "/KasiaNowak1.jpg";
      default:
        return "/avatarBlog.png";
    }
  };

  const categoryTranslations: { [key: string]: string } = {
    mindfulness: t("mindfulness"),
    sad: t("sad"),
    happy: t("happy"),
    copingskills: t("copingSkills"),
    mentalhealth: t("mental"),
    anxiety: t("anxiety"),
    selfCare: t("selfCare"),
  };

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields;
        return (
          <div className="flex justify-center lg:w-[750px] lg:h-[496px] w-full h-full">
            <img src={file.url} alt={title} className="w-full h-full" />
          </div>
        );
      },
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <h1 className="text-[#074A68] w-full font-fontPrimary sm:text-[57px] text-[30px] font-extrabold leading-[110%] tracking-[-0.57px] mb-[32px]">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="text-[#074A68] w-full font-fontPrimary sm:text-[50px] text-[26px]  font-extrabold leading-[110%] tracking-[-0.5px] mb-[32px]">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h3 className="text-[#074A68] w-full font-fontPrimary sm:text-[50px] text-[26px] font-extrabold leading-[110%] tracking-[-0.5px] mb-[32px]">
          {children}
        </h3>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="text-[#074A68] text-justify  font-fontSecondary sm:text-[18px] text-[16px] font-light leading-[140%] mb-[20px] mt-[20px]">
          {children}
        </p>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="list-disc pl-5 text-[#074A68] font-fontSecondary text-[18px] font-light leading-[140%] mb-[20px] mt-[20px]">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol className="list-decimal pl-5 text-[#074A68] font-fontSecondary text-[18px] font-light leading-[140%] mb-[20px] mt-[20px]">
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <li className="mb-[10px]">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: any, children: any) => (
        <blockquote className="border-l-4 border-[#074A68] pl-4 text-[#074A68] font-fontSecondary text-[18px] font-light leading-[140%] mb-[20px] mt-[20px]">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => (
        <hr className="border-t-2 border-[#074A68] my-[20px]" />
      ),
      [BLOCKS.TABLE]: (node: any, children: any) => (
        <table className="min-w-full bg-white border-collapse">
          <tbody>{children}</tbody>
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (node: any, children: any) => (
        <tr className="border-b border-[#074A68]">{children}</tr>
      ),
      [BLOCKS.TABLE_CELL]: (node: any, children: any) => (
        <td className="p-4 text-[#074A68] font-fontSecondary text-[18px] font-light leading-[140%]">
          {children}
        </td>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (node: any, children: any) => (
        <th className="p-4 text-left text-[#074A68] font-fontPrimary text-[18px] font-bold leading-[140%]">
          {children}
        </th>
      ),
    },
  };

  return (
    <div>
      <div className="px-4 sm:px-8 md:px-[100px] py-4">
        <div className="border-t border-[#EAEBF0] pt-4 mb-8 flex items-center lg:justify-start justify-center">
          <Link href="/blog">
            <p className="flex items-center text-[#074A68] text-[14px] gap-[26px] font-semibold">
              <Image src="/arrowLeft.svg" width={20} height={20} alt="arrow" />
              <span>{t("backToBlog")}</span>
            </p>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Image
              src={getAuthorImage(post.author as string)}
              width={45}
              height={45}
              alt="avatar"
              className="rounded-full"
              quality={100}
            />
            <div className="flex flex-col text-justify">
              <p className="text-[14px] text-[#757575]">
                {post.author as string}
              </p>
              <p className="text-[#B3B3B3] text-[14px] mt-[4px]">
                {t("published")} {post.publishDate as string}
              </p>
            </div>
          </div>
          <div className="flex sm:gap-4 gap-2 flex-wrap justify-center md:justify-start">
            {Array.isArray(post.category) &&
              post.category.map(
                (categoryItem, index) =>
                  typeof categoryItem === "string" && (
                    <span
                      key={index}
                      className="rounded-[30px] border border-[#EAEBF0] p-[8px] bg-[#fff] text-[14px] font-semibold leading-[20px] text-[#252525] mb-2 md:mb-0"
                    >
                      {categoryTranslations[
                        categoryItem.toLowerCase().replace(/\s+/g, "")
                      ] || categoryItem}
                    </span>
                  )
              )}
          </div>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto px-4 sm:px-8">
        {post.testrich &&
          documentToReactComponents(post.testrich as Document, options)}
      </div>

      <ShareButtons shareThisPost={t("shareThisPost")} />
    </div>
  );
};

export default Page;
