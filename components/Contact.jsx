import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#2f4858] flex flex-col justify-center items-center py-5 text-[#edffec]"
    >
      <div className="flex flex-col sm:flex-row gap-3 h-fit">
        <div className="flex items-center justify-center gap-1">
          <ImLocation /> Salalah, Oman
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
      <div className="mt-5">Reception is open 24 hrs</div>
    </section>
  );
};
export default Contact;
