import React from "react";
import Image from "next/image";
import { heroLogos } from "../../hero/index";



const ServiceHero = () => {
  return (
    <section className="hero-section relative w-full h-full mb-16 ">
      <div className="hero-section flex flex-col lg:flex-row  mb-10 md:mb-20">
        
        <h1 className="xl:w-1/2 floral-reg text-5xl  md:text-6xl lg:text-8xl xl:text-9xl mb-8 whitespace-nowrap">
          ELEVATE <br /> YOUR <br /> EXPERIENCE
        </h1>








        <div className="w-full flex flex-col  gap-5 md:gap-10 lg:gap-3 lg:w-1/2 xl:gap-5">
          <Image
            src={"/images/balcony.png"}
            width={500}
            height={100}
            alt="hero image"
            className="w-full h-[400px] rounded-2xl"
          />

          <div className="flex gap-2 w-full md:gap-10 lg:gap-5">
            <Image
              src={"/images/hero2.jpg"}
              width={500}
              height={100}
              alt="hero image"
              className="w-1/2 h-[300px] rounded-2xl"
            />
            <Image
              src={"/images/hero3.jpg"}
              width={500}
              height={100}
              alt="hero image"
              className="w-1/2 h-[300px] rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* infinite play slide */}
      <div className="companies border-gray-400 w-full pb-1 lg:px-10  md:pb-5 border-b-2  gap-2 flex items-center lg:gap-16 overflow-hidden">
        <h1 className="text-black font-semibold text-[8px] sm:text-xs md:text-sm lg:text-lg md:w-36 uppercase whitespace-nowrap">
          Trusted by
        </h1>

        <div className="slider-wrapper w-full flex items-center h-auto">
          <div className="slider w-full m-auto overflow-hidden">
            <div
              className="slide-track w-full flex items-center md:justify-between gap-5 lg:gap-10"
              id="slideTrack"
            >
              {heroLogos.map((img, idx) => (
                <div key={idx} className="slide w-full">
                  <Image
                    src={img.url}
                    alt=""
                    className="logos min-w-[50px] md:min-w-[100px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default ServiceHero;
