"use client"; // Keep this to make the Navbar a client component
import "./Navbar.css";
import Image from "next/image";
import logo from "../../public/mainLogo.png";
import mobileMenuIcon from "../../public/mobileMenu.svg";
import React, { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation"; // Import usePathname hook

const Navbar = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname(); // Get the current pathname

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (item: string) => {
    setActiveItem(item);
    setIsMenuOpen(false); // Close menu when item is clicked (especially for mobile)
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        // Increase threshold as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if the current page is the landing page
  const isLandingPage = pathname === "/en" || pathname === "/pl"; // Adjust the condition if your landing page path is different

  const notBookNow = pathname === "/en/team" || pathname === "/pl/team";

  return (
    <nav
      className={`${isLandingPage ? "bg-[#FFFDF7]" : "bg-[#FFFDF7]"} ${
        isSticky
          ? "fixed bg-white top-0 left-0 right-0 shadow-md py-[4px] z-50 navbarAnimated"
          : "relative"
      } flex items-center justify-between px-[100px] py-[16px] transition-all duration-500 ease-in-out`}
    >
      <Link href="/">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="CBTC logo"
            width={120}
            height={113}
            quality={100}
          />
        </div>
      </Link>
      <div className="hidden lg:flex">
        <ul className="flex items-center lg:gap-[16px] gap-[4px] text-[#074A68] font-normal leading-[25.6px] text-[16px] font-fontNavbar">
          {["home", "mission", "team", "blog"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer hover:font-bold transition-all duration-300 px-[16px] whitespace-nowrap ${
                activeItem === item ? "font-bold" : ""
              }`}
            >
              <Link
                href={`/${item === "home" ? "" : item}`}
                onClick={() => handleNavClick(item)}
              >
                {t(item)}
              </Link>
            </li>
          ))}
          {!notBookNow && (
            <li>
              <Link href="/team" onClick={() => handleNavClick("bookNow")}>
                <div>
                  <button className="flex h-[60px] px-10 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#FFD015] text-[#074A6B] font-bold leading-[26px] text-[16px] transition-all hover:bg-inherit  hover:text-[#FFD015] whitespace-nowrap ">
                    {t("bookNow")}
                  </button>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="lg:hidden relative">
        <div className="w-[24px] h-[24px] mr-[-32px]">
          {" "}
          {/* Added mr-4 for right margin */}
          <Image
            src={mobileMenuIcon}
            alt="mobile menu"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>

        {isMenuOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black shadow-lg rounded-md z-10">
            <ul className="flex flex-col items-center gap-[16px] text-[#074A68] font-normal leading-[25.6px] text-[16px] font-fontNavbar p-6">
              {["home", "mission", "team", "blog"].map((item) => (
                <li
                  key={item}
                  className={` px-[16px] whitespace-nowrap ${
                    activeItem === item ? "font-bold" : ""
                  }`}
                >
                  <Link
                    href={`/${item === "home" ? "" : item}`}
                    onClick={() => handleNavClick(item)}
                    className="cursor-pointer"
                  >
                    {t(item)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/team" onClick={() => handleNavClick("bookNow")}>
                  <div>
                    <button className="flex h-[60px] px-10 py-4 justify-center items-center gap-2 rounded-[8px] bg-[#FFD015] text-[#074A6B] font-bold leading-[26px] text-[16px] transition-all hover:bg-inherit  hover:text-[#FFD015]">
                      {t("bookNow")}
                    </button>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
