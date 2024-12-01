"use client";

import React from "react";
import Image from "next/image";

const ShareButtons = ({ shareThisPost }: { shareThisPost: string }) => {
  const sharePost = (platform: string) => {
    const url = window.location.href;
    const title = document.title;
    let shareUrl = "";

    switch (platform) {
      case "pinterest":
        shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`;
        break;
      case "instagram":
        shareUrl = `https://www.instagram.com/?url=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <div>
      <p className="text-[#074A68] text-[20px] mt-[48px] text-center font-semibold">
        {shareThisPost}
      </p>
      <div className="flex items-center gap-[16px] mt-[20px] justify-center">
        <Image
          src="/pinterestBlog.svg"
          width={28}
          height={28}
          alt="pinterest"
          className="cursor-pointer"
          onClick={() => sharePost("pinterest")}
        />
        <Image
          src="/instagramBlog.svg"
          width={28}
          height={28}
          alt="instagram"
          className="cursor-pointer"
          onClick={() => sharePost("instagram")}
        />
        <Image
          src="/linkedinBlog.svg"
          width={28}
          height={28}
          alt="linkedin"
          className="cursor-pointer"
          onClick={() => sharePost("linkedin")}
        />
      </div>
    </div>
  );
};

export default ShareButtons;
