"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { lang } from "./Provider";
import { useContext } from "react";
const Hero = () => {
  const { locale } = useContext(lang);
  const t = useTranslations("home");
  return (
    <section className=" flex justify-center h-screen max-w-4xl mx-auto">
      <div className="flex flex-col px-0 items-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative w-full h-[50%]"
        >
          <Image src={"/building.jpg"} alt="building" fill />
        </motion.div>
        <motion.div
          transition={{ staggerChildren: 0.3 }}
          className="flex p-2 pt-5 flex-col gap-2 items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl capitalize font-bold text-[#2F4858]"
          >
            {t("title")}
          </motion.h1>
          <div
            className={`flex flex-col gap-3 items-start ${
              locale === "ar" ? "items-end" : ""
            }`}
          >
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              {t("desc")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold"
            >
              {t("rents")}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex gap-2 pt-3"
        >
          <Link
            href={"#contact"}
            className="border border-[#2f4858] py-1 px-2 rounded-full flex items-center justify-center gap-2"
          >
            <span className="h-full flex items-center">
              <ImLocation />
            </span>
            <span className="h-full">{t("location")}</span>
          </Link>
          <Link
            href={"#contact"}
            className="bg-[#2f4858] text-[#fafbfa] border hover:border-[#2f4858] py-1 px-2 rounded-full flex h-full items-center justify-center gap-2 hover:bg-[#fafbfa] hover:text-[#2f4858] transition-all"
          >
            <span className="h-full flex items-center">
              <BsFillTelephoneFill />
            </span>
            <span className="h-full flex items-center">{t("contact")}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
