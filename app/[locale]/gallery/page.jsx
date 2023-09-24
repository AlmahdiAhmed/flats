import { images } from "@/data/data";
import Image from "next/image";

const page = () => {
  return (
    <section className="pt-[50px]">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 py-5">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative w-[200px] h-[200px] hover:scale-[1.1] transition-all"
          >
            <Image src={image.url} alt="building image" fill />
          </div>
        ))}
      </div>
    </section>
  );
};
export default page;
