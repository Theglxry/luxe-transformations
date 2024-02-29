import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImg1 from "../../public/images/balcony.png";
import heroImg2 from "../../public/images/hero2.jpg";
import heroImg3 from "../../public/images/hero3.jpg";

import { heroLogos } from "./index";







const Hero = () => {



  
  return (
    <section className="hero-section relative w-full h-full mb-28">
      <div className="hero-section flex flex-col  mb-10 md:mb-20">
        <h1 className="floral-reg text-5xl  md:text-6xl lg:text-8xl xl:text-9xl mb-8 whitespace-nowrap">
          CRAFTING <br /> LUXURY SPACES
        </h1>
        <div className="w-full flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-3 xl:gap-5 md:h-auto">
          <Image src={heroImg1} alt="hero image" className="md:w-full h-auto rounded-2xl" />


          <div className="flex gap-2 w-full md:gap-10 lg:gap-5 xl:w-4/5">
          <Image src={heroImg2} alt="hero image" className="w-1/2 h-auto rounded-2xl" />
          <Image src={heroImg3} alt="hero image" className="w-1/2 h-auto rounded-2xl" />
          </div>
        </div>
      </div>



      {/* infinite play slide */}
      <div className="companies tab-br w-full pb-1 lg:px-10  md:pb-5 border-b-2  gap-2 flex items-center lg:gap-16 overflow-hidden">
        <h1 className="text-gray-400 font-semibold text-[8px] sm:text-xs md:text-sm lg:text-lg md:w-36 uppercase whitespace-nowrap">
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
                  <Image src={img.url} alt=""  className="logos min-w-[50px] md:min-w-[100px]" />
                </div>
              ))}
              
            </div>
          </div>
        </div>


      </div>





{/* pencil */}
      <Link
        href="/contact"
        className="animated-wrapper float-right mt-5 rounded-full z-10"
      >
        <div className="animated-btn border border-yellow-600 rounded-full">
          <span className="btn-container">
            <Image
              className="pen-1"
              src="/icons/pencil.svg"
              alt="pencil"
              width={100}
              height={100}
            />
            <Image
              className="pen-2"
              src="/icons/pencil.svg"
              alt="pencil"
              width={100}
              height={100}
            />
          </span>
        </div>
      </Link>
    </section>
  );
};

export default Hero;
