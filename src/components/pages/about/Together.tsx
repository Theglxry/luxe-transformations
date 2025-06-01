import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurSolution = () => {
  return (
    <>
      <div className="w-full text-black flex flex-col gap-[20px] md:gap-10 justify-between   py-[50px] lg:flex-row  xl:py-[100px]">
        <div className="w-full lg:w-1/3">
          <h1 className="text-[clamp(45px,calc(56/1420*100vw),100px)] font-floral-serif leading-[1.1]">
            Together we are strong
          </h1>
        </div>

        <div
          className="flex flex-col justify-between gap-[32px] sm:gap-[50px] lg:gap-[100px] 2xl:gap-[130px] 
        w-full
        lg:w-[clamp(100px,calc(760/1420*100vw),1200px)]
        text-[clamp(18px,calc(24/1420*100vw),50px)]
        
        font-thin">
          <p>
            Our journey is more than a narrative; it's a testament to our
            passion for transforming spaces into timeless havens of luxury. At
            the heart of our mission is a commitment to excellence that has
            evolved with us from our humble beginnings. As we continue to
            redefine luxury renovation, our commitment to delivering unmatched
            solutions has become the cornerstone of our success. Every project
            is an opportunity for us to showcase our dedication to innovation,
            collaboration, and attention to detail, creating spaces that
            transcend the ordinary.
          </p>
          <p>
            In our pursuit of excellence, we've developed solutions that not
            only meet but exceed the expectations of our clients. Through a
            fusion of cutting-edge technology, sustainable practices, and a deep
            understanding of design aesthetics, we've crafted solutions that
            stand as a testament to our unwavering commitment to quality.
          </p>
        </div>
      </div>

      <div className="w-full  text-black flex flex-col gap-[20px] md:gap-10 justify-between  lg:flex-row pb-[45px]  sm:pb-[50px]   xl:pb-[100px]  pt-[30px]  sm:pt-[30px]   xl:pt-[100px]">
        <div className="w-full lg:w-1/3">
          <div className="flex flex-col lg:flex-row gap-[24px] items-center justify-center lg:justify-start">
            <Image
              alt="ceo"
              width={80}
              height={80}
              src="/images/about/ceo.png"
              className="w-[clamp(80px,calc(80/1420*100vw),200px)]"
            />

            <div>
              <h4 className=" text-[#282828] text-[clamp(16px,calc(18/1420*100vw),35px)] leading-[1.5]">
                Phoenix Baker
              </h4>
              <h5 className="font-inter text-[#4E4E4E] text-[clamp(14px,calc(16/1420*100vw),30px)] leading-[1.5]">
                Founder & CEO
              </h5>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-between gap-[32px] sm:gap-[50px] lg:gap-[100px] 2xl:gap-[150px] 
        w-full
        lg:w-[clamp(100px,calc(760/1420*100vw),1200px)]
        text-[clamp(18px,calc(24/1420*100vw),50px)]
        
       ">
          <h1 className="text-[clamp(30px,calc(40/1420*100vw),100px)] leading-[1.2] font-semibold text-[#4E4E4E] font-archivo tracking-[-2%] italic text-center lg:text-left">
            ‘"At Luxe Renovation, we turn visions into timeless masterpieces,
            driven by excellence and a passion for craftsmanship."
          </h1>
        </div>
      </div>
    </>
  );
};

export default OurSolution;
