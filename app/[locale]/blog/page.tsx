"use client";
import React, { useEffect, useState } from "react";
import "../../../components/Header/Header.css";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BlogPost from "@/components/BlogPost/BlogPost";
import client from "@/utils/contentfulClient";
import { usePathname } from "next/navigation";

const Blog = () => {
  const t = useTranslations("Blog");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const pathname = usePathname();
  const isPolish = pathname?.startsWith("/pl") ?? false;
  const isEnglish = pathname?.startsWith("/en") ?? false;
  const categoryTranslations: { [key: string]: string } = {
    mindfulness: t("mindfulness"),
    sad: t("sad"),
    happy: t("happy"),
    copingskills: t("copingSkills"),
    mentalhealth: t("mental"),
    anxiety: t("anxiety"),
    cbtbasics: t("cbtbasics"),
    depression: t("depression"),
    ptsd: t("ptsd")
  };

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await client.getEntries({
        content_type: "mindMapTest",
      });
      const fetchedPosts = response.items.map((item) => item.fields);

      const filteredPosts = fetchedPosts
        .filter((post) =>
          isPolish ? post.language === "pl" : post.language === "en"
        )
      .sort((a, b) => {
  const dateA = new Date(a.publishDate as string).getTime();
  const dateB = new Date(b.publishDate as string).getTime();
  return dateB - dateA;
})

      setPosts(filteredPosts);

      const allCategories: string[] = filteredPosts.flatMap(
        (post) => post.category as string[]
      );
      const uniqueCategories = Array.from(new Set(allCategories));
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
}, [isPolish, isEnglish]);

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

  return (
    <>
      <section className="h-screen bg-cover customBlogClass">
        <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center  flex-grow text-center lg:centeredContent lg:p-0 p-6">
          <h1 className="text-[36px] sm:text-7xl text-[#FCFCFC] tracking-wide font-fontPrimary font-extrabold lg:mt-[128px] mt-[32px] lg:ml-[128px] ml-[0px] lg:w-[55%] w-full">
            {t("header")}
          </h1>

          <div className="flex cursor-pointer justify-center items-center md:justify-end w-full md:w-[718px] mt-[48px] btnContainerBlog ">
            <Link href="/mission">
              <button className=" font-fontSecondary font-normal text-[20px] leading-[26px] text-[#FFFDF7] tracking-[1px] learnMoreButtonBlog">
                {t("buttonText")}
              </button>
            </Link>
            <div className=" md:block sm:ml-[90px] ml-[16px]">
              <Image
                src="/chevronRight.svg"
                width={24}
                height={24}
                alt="right icon"
              />
            </div>
          </div>
        </div>
      </section>
      <MaxWidthWrapper>
        <div className="flex items-center mt-[32px]">
          <p className="text-[#074A68] text-[16px] font-semibold leading-[24px] mr-[16px]">
            {t("tags")}
          </p>
          <ul className="flex flex-wrap items-center gap-[8px] sm:gap-[16px]">
            {categories.map((category, index) => {
              const key = category.toLowerCase().replace(/\s+/g, ""); // Normalize category key
              const translation = categoryTranslations[key] || category;

              return (
                <li
                  key={index}
                  className="rounded-[30px] border border-[#EAEBF0] p-[4px] sm:p-[8px] bg-[#fff] text-[12px] sm:text-[14px] font-semibold leading-[16px] sm:leading-[20px] text-[#252525]"
                >
                  {translation}
                </li>
              );
            })}
          </ul>
        </div>
        <h2 className="text-center text-[#074A68] font-fontPrimary leading-[75px] font-extrabold sm:text-5xl text-[38px] tracking-[-0.56px] mt-[32px]">
          {t("headerSecond")}
        </h2>
        <p className="mt-[32px] text-center text-[#074A68] font-fontSecondary font-light text-lg leading-[30.8px] ">
          {t("descriptionSecond")}
        </p>
        <div className="mt-[32px] flex flex-col gap-[60px]">
          {posts.length > 0 ? (
            posts.map((post, index) => <BlogPost key={index} post={post} />)
          ) : (
            <p className="text-center text-[#074A68] font-fontSecondary font-light text-lg leading-[30.8px]">
              {t("noPostsMessage")}
            </p>
          )}
        </div>
        {/* <div className="flex items-center justify-center mt-[32px] gap-[16px]">
          <div className="w-[56px] h-[56px] p-[16px] flex items-center justify-center border border-[#074A68] rounded-full cursor-pointer">
            <Image src="/iconLeft.svg" width={24} height={24} alt="left icon" />
          </div>
          <div className="w-[56px] h-[56px] p-[16px] flex items-center justify-center bg-[#074A68] rounded-full cursor-pointer">
            <Image
              src="/iconRight.svg"
              width={24}
              height={24}
              alt="right icon"
            />
          </div>
        </div> */}
        <h2 className="mt-[48px] text-[#074A68] sm:text-5xl text-[38px] font-extrabold leading-[55px] font-fontPrimary text-center">
          {t("headerThird")}
        </h2>
        <p className="mt-[32px] text-center text-[#074A68] font-fontSecondary font-light text-lg leading-[30.8px] ">
          {t("descriptionThird")}
        </p>
        <form
          className="flex items-center gap-2 justify-center mt-[32px]"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder={t("inputMessage")}
            onChange={(e) => setEmail(e.target.value)}
            className="flex h-[56px] p-4 items-center gap-[8px] self-stretch rounded-lg border border-[#074A68] text-black text-base !outline-none lg:w-[420px] w-full"
            required
          />
          <button
            type="submit"
            className="flex h-[53px] px-[24px] py-4 justify-center items-center gap-[4px] rounded-lg bg-[#074A68] text-[#ECFDF5] text-center font-fira text-[14px] font-normal leading-[160%] hover:bg-inherit transition-all duration-300 hover:text-[#074A68]"
          >
            {t("buttonSubscribe")}
          </button>
        </form>
        <div className="mt-[16px]">
          {status === "sending" && (
            <p className="text-center text-[#074A68]">{t("messageSending")}</p>
          )}
          {status === "success" && (
            <p className="text-center text-[#074A68]">{t("messageSuccess")}</p>
          )}
          {status === "error" && (
            <p className="text-center text-[#FF0000]">{t("messageFail")}</p>
          )}
        </div>
        <div className="flex items-center gap-[16px] mt-[48px] justify-center">
          {/* <Image
            src="/pinterestBlog.svg"
            width={28}
            height={28}
            alt="pinterest"
            className="cursor-pointer"
          /> */}
          <Link href="https://www.instagram.com/themindmap_cbt">
            <Image
              src="/instagramBlog.svg"
              width={28}
              height={28}
              alt="twitter"
              className="cursor-pointer"
            />
          </Link>
          {/* <Image
            src="/linkedinBlog.svg"
            width={28}
            height={28}
            alt="facebook"
            className="cursor-pointer"
          /> */}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Blog;
