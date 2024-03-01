import Image from "next/image";
import React from "react";
import allCases from "../../public/icons/service-white-arr.svg";

const Recentwork = () => {
  return (
    <section className="floral-reg w-full flex flex-col gap-10 mb-10 md:pb-28 xl:px-16">
      <h1 className="text-2xl md:text-5xl font-semibold">RECENT PROJECT</h1>

      <div className="w-full flex flex-col gap-5">
        {/* top */}
        <div className="w-full flex md:gap-10">
          <Image
            src={"/images/img1.png"}
            alt=""
            className="w-[200px] xl:w-full lg:h-[400px] rounded-2xl"
            width={100}
            height={100}
          />
          <Image
            src={"/images/img1.png"}
            alt=""
            className="w-[200px] xl:w-full lg:h-[400px] rounded-2xl"
            width={100}
            height={100}
          />
          <Image
            src={"/images/img1.png"}
            alt=""
            className="w-[200px] xl:w-full lg:h-[400px] rounded-2xl"
            width={100}
            height={100}
          />
        </div>



        {/* bottom */}
        <div className="w-full flex gap-5 ">
          <Image
            src={"/images/peak-luxe1.png"}
            alt=""
            className="w-1/2  xl:w-full h-[400px] rounded-2xl"
            width={100}
            height={100}
          />
          <Image
            src={"/images/peak-luxe1.png"}
            alt=""
            className="w-1/2  xl:w-full lg:h-[400px] rounded-2xl"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="all-cases text-white hover:px-14 flex items-center gap-5 bg-black px-12 py-3 md:px-6 md:py-3 lg:px-12 lg:py-3 rounded-full text-sm xl:text-xl">
            {/* See All Case Studies */}
            <div className="wave text-base uppercase whitespace-nowrap">
              <span style={{ "--i": 1 }}>View</span>
              <span style={{ "--i": 4 }}>&nbsp;</span>
              <span style={{ "--i": 5 }}>All</span>
            </div>

            <div>
              <Image
                src={"/icons/service-white-arr.svg"}
                alt=""
                className="all-cases-arrow"
                width={20}
                height={20}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recentwork;
