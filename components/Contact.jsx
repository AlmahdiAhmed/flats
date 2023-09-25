"use client";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <section
      id="contact"
      className="bg-[#2f4858] flex flex-col justify-center items-center py-5 text-[#edffec]"
    >
      <div className="flex flex-col sm:flex-row gap-3 h-fit">
        <div className="flex items-center justify-center gap-1">
          <ImLocation /> {t("location")}
        </div>
        <div className="h-[30px] hidden sm:flex w-[2px] rounded bg-[#edffec]"></div>
        <div className="flex items-center justify-center gap-1">
          <BsFillTelephoneFill /> Mobile: +968 90710828
        </div>
        <div className="h-[30px] hidden sm:flex w-[2px] rounded bg-[#edffec]"></div>
        <div className="flex items-center justify-center gap-1">
          <AiFillMail /> Email: flat@gmail.com
        </div>
      </div>
      <div className="mt-5">{t("reception")}</div>
    </section>
  );
};
export default Contact;
