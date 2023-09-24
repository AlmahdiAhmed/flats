"use client";
import { BsBuildingsFill } from "react-icons/bs";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Toggle from "./Toggle";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
const Navbar = ({ locale }) => {
  const [toggle, setToggle] = useState(false);
  const t = useTranslations("navbar");
  return (
    <header className="w-full z-50 fixed h-[50px] bg-[#2F4858] text-[#EDFFEC]">
      <nav className="flex max-w-5xl mx-auto justify-between items-center h-full relative ">
        <Link href={"/"} className="flex items-center gap-2 text-xl pl-2">
          <BsBuildingsFill />
          <span>Flats for rent</span>
        </Link>
        <div className="flex h-full justify-center items-center gap-2">
          <Toggle locale={locale} />

          <div
            className={`hidden sm:flex justify-center gap-3 p-1 ${
              locale === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <Link href={"#home"}>{t("home")}</Link>
            <Link href={"#services"}>{t("services")}</Link>
            <Link href={"#gallery"}>{t("gallery")}</Link>
            <Link href={"#contact"}>{t("contact")}</Link>
          </div>
          <div onClick={() => setToggle(!toggle)} className="pr-5">
            <HiMenu className="flex sm:hidden text-3xl cursor-pointer" />
          </div>
        </div>
        {/* mobile */}

        <div
          className={`absolute shadow-slate-700 top-[50px] flex flex-col items-center sm:hidden gap-3 pt-5 h-screen w-[35%] transition-all duration-500 bg-[#44728f] ${
            !toggle ? "-translate-x-[150%]" : "translate-x-0"
          }`}
        >
          <Link href={"#home"} onClick={() => setToggle(false)}>
            {t("home")}
          </Link>
          <Link href={"#services"} onClick={() => setToggle(false)}>
            {t("services")}
          </Link>
          <Link href={"#gallery"} onClick={() => setToggle(false)}>
            {t("gallery")}
          </Link>
          <Link href={"#contact"} onClick={() => setToggle(false)}>
            {t("contact")}
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
