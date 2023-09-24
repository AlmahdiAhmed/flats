"use client";
import Image from "next/image";
import room1 from "@/public/room1.jpg";
import living from "@/public/living.jpg";
import room2 from "@/public/room2.jpg";
import kitchen from "@/public/kitchen.jpg";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useContext } from "react";
import { lang } from "./Provider";
import Link from "next/link";
const Gallery = () => {
  const { locale } = useContext(lang);
  const t = useTranslations("gallery");
  return (
    <section className="max-w-4xl mx-auto py-5 scroll-mt-10" id="gallery">
      <div className="flex items-center flex-col sm:flex-row px-3">
        <div className="images-container w-full sm:flex-[0.9] grid grid-cols-5 grid-rows-2 gap-1">
          <div className=" relative h-[200px]  col-span-3 row-span-1 ">
            <Image
              src={living}
              className="h-full object-cover"
              alt="photo"
              fill
            />
          </div>
          <div className="relative h-[200px] img col-span-2  row-span-1">
            <Image
              src={room1}
              className="h-full object-cover"
              alt="photo"
              fill
            />
          </div>
          <div className="relative h-[180px] img col-span-2  row-span-1 ">
            <Image
              src={room2}
              className="h-full object-cover"
              alt="photo"
              fill
            />
          </div>
          <div className="relative h-[180px] img col-span-3  row-span-1">
            <Image
              src={kitchen}
              className="h-full object-cover object-center"
              alt="photo"
              onBlur={"blur"}
              fill
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text sm:flex-1 flex flex-col"
        >
          <h2
            className={`flex text-2xl font-semibold text-[#2F4858] sm:pl-3 mb-2 ${
              locale === "ar" ? "justify-end" : ""
            }`}
          >
            {t("title")}
          </h2>
          <p className="text-lg text-[#010101] sm:pl-3">{t("desc")}</p>
          <Link
            href={"/gallery"}
            className="mt-2 p-1 ml-3 bg-[#2f4858] text-[#fafbfa] border hover:border-[#2f4858] rounded-md w-fit hover:bg-[#fafbfa] hover:text-[#2f4858] transition-all"
          >
            {t("link")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default Gallery;
