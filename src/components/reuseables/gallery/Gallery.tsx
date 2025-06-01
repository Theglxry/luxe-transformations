import { gallery } from "@/constants";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="w-full h-full mb-16 md:mb-28">
      <h1 className="text-4xl md:text-6xl text-center text-gray-300 mb-10">
        Gallery
      </h1>

      {/* gallery slide */}
      <div className="w-full flex flex-col gap-10">
        <div className="relative w-full flex items-center gap-5 sm:gap-10 overflow-x-auto overflow-y-hidden no-scrollbar whitespace-nowrap">
          {gallery.map((img, idx) => (
            <div key={`${idx}`} className="">
              <div className="perks-items tab-bg min-w-[250px] min-h-[200px] md:min-w-[350px] md:min-h-[350px] cursor-grab rounded-2xl flex flex-col justify-between">
                <Image src={img.img} alt="" className="w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
