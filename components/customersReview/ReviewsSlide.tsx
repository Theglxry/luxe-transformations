import Image from "next/image";
import React, { useState } from "react";
import Allcases from "./Allcases";
import { brandPerks, customerReviews } from "@/constants";

const ReviwsSlide = () => {
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
    <>
      {/* slide */}
      <div className="perks-slide-wrapper w-full flex flex-col gap-10">
        <div className="relative w-full flex items-center gap-5 sm:gap-10 overflow-x-auto overflow-y-hidden no-scrollbar whitespace-nowrap">
          {customerReviews.map((img, idx) => (
            <div key={idx} className="perks-items-container">
              <div className="perks-items relative min-w-[250px] min-h-[200px] md:min-w-[400px] md:min-h-[400px]  lg:min-w-[450px] cursor-grab  flex flex-col justify-between">
                <Image
                  src={img.img}
                  alt="review images"
                  className="w-full h-full rounded-2xl"
                  width={100}
                  height={100}
                />


                {/* play button */}
                <Image
                  src={"/icons/play.svg"}
                  alt=""
                  width={50}
                  height={50}
                  className="absolute top-[40%] left-[40%]  md:w-24 md:h-24"
                />
              </div>
            </div>
          ))}
        </div>



        {/* control arrows */}
        <div className="flex items-center justify-center gap-5 md:hidden">
          <button onClick={prevSlide} className="tab-bg px-2 py-2 rounded-full">
            <Image
              src="/icons/control-left.svg"
              width={20}
              height={20}
              alt="Previous"
            />
          </button>

          <button onClick={nextSlide} className="tab-bg px-2 py-2 rounded-full">
            <Image
              src="/icons/control-right.svg"
              width={20}
              height={20}
              alt="Next"
            />
          </button>
        </div>

        
      </div>
    </>
  );
};

export default ReviwsSlide;
