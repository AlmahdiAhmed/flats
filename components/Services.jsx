"use client";
import { BiSolidCameraHome } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { GiElevator } from "react-icons/gi";
import { FaFireExtinguisher } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { lang } from "./Provider";
import { useContext } from "react";
const Services = () => {
  const { locale } = useContext(lang);
  const t = useTranslations("services");
  return (
    <section className="bg-[#2f4858] w-full py-5 scroll-mt-7" id="services">
      <h1 className="text-center capitalize text-2xl font-semibold  text-[#fafbfa]">
        {t("title")}
      </h1>
      <div className="w-full flex items-center justify-center">
        <div
          className={`max-w-4xl px-auto flex justify-center items-center gap-3 flex-col sm:flex-row ${
            locale === "ar" ? "sm:flex-row-reverse" : ""
          } flex-wrap py-5`}
        >
          <div className="bg-[#fafbfa] w-full flex items-center flex-col p-3 rounded-md sm:w-[150px] h-[80px]">
            <BiSolidCameraHome className="text-2xl" />
            {t("cameras")}
          </div>
          <div className="bg-[#fafbfa] w-full flex items-center flex-col p-3 rounded-md sm:w-[150px] h-[80px]">
            <AiFillCar className="text-2xl" />
            {t("parking")}
          </div>
          <div className="bg-[#fafbfa] w-full flex items-center flex-col p-3 rounded-md sm:w-[150px] h-[80px]">
            <GiElevator className="text-2xl" />
            {t("elevator")}
          </div>
          <div className="bg-[#fafbfa] w-full flex items-center flex-col p-3 rounded-md sm:w-[150px] h-[80px]">
            <FaFireExtinguisher className="text-2xl" />
            {t("fire")}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
