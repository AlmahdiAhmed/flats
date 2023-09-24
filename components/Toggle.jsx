import Link from "next-intl/link";
import Image from "next/image";
const Toggle = ({ locale }) => {
  return (
    <div className="border border-text-[#EDFFEC] p-1 px-2 rounded-md">
      {locale === "en" ? (
        <Link href={"/"} locale="ar" className="flex gap-1">
          <Image
            src={"/sa.png"}
            width={25}
            height={16}
            alt="flag"
            className="h-1/2 my-auto "
          />
          <span>Ar</span>
        </Link>
      ) : (
        <Link href={"/"} locale="en" className="flex gap-1">
          <Image
            src={"/us.png"}
            width={25}
            height={16}
            alt="flag"
            className="h-1/2 my-auto "
          />
          <span>En</span>
        </Link>
      )}
    </div>
  );
};
export default Toggle;
