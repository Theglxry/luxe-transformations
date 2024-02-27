import { brandPerks } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const BrandPerks = () => {
  // move state to useAppLogic
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === brandPerks.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? brandPerks.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="w-full mb-28 md:mb-52">
      <h1 className="text-xl md:text-5xl flex md:flex-col mb-8">
        LUXURY <span>BRAND PERKS</span>
      </h1>

      {/* slide */}

      <div className="perks-slide-wrapper w-full flex flex-col gap-10">
        <div className="relative w-full flex items-center gap-5 sm:gap-10 overflow-x-auto overflow-y-hidden no-scrollbar whitespace-nowrap">
          {brandPerks.map((perks, idx) => (
            <div key={idx} className="perks-items-container">
              <div
                className="perks-items tab-bg min-w-[250px] min-h-[200px] md:min-w-[400px] md:min-h-[400px]  lg:min-w-[500px] cursor-grab rounded-2xl p-5 md:p-10 flex flex-col justify-between"
                data-aos="fade-up"  data-aos-duration={perks.time}
              >
                <h1 className="text-4xl md:text-6xl font-bold">{perks.top}</h1>
                <p>{perks.bottom}</p>
              </div>
            </div>
          ))}
        </div>

        {/* control arrows */}
        <div className="flex items-center justify-center gap-5 md:hidden">
          <button onClick={prevSlide} className="tab-bg px-2 py-2 rounded-full">
            <Image
              // className="w-12"
              src="/icons/control-left.svg"
              width={20}
              height={20}
              alt="Previous"
            />
          </button>

          <button onClick={nextSlide} className="tab-bg px-2 py-2 rounded-full">
            <Image
              // className="tab-b w-12"
              src="/icons/control-right.svg"
              width={20}
              height={20}
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandPerks;
