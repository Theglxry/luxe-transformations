import React from "react";

const OurJourney = () => {
  return (
    <div className="w-full mb-28 text-black flex flex-col gap-10  px-5 md:px-0 lg:px-5 py-10 md:flex-row  xl:px-24 xl:py-24">
      <div className="w-full md:pt-10" data-aos="fade-right">
        <h1 className="text-5xl md:text-6xl xl:text-8xl font-bold whitespace-nowrap">
          Our Journey
        </h1>
        <h4 className="text-4xl md:text-5xl  xl:text-[5.5rem] font-semilight text-gray-700 mt-2 leading-[3rem] md:leading-[5rem] xl:leading-[7rem]">
          Unveiling The <br /> Story Behind <br /> Our Success
        </h4>
      </div>

      <div
        className="w-full flex flex-col gap-5"
        data-aos="fade-left"
        data-aos-duration="600"
      >
        <h4 className="uppercase font-thin text-xs md:text-base">
          Partnership mentality
        </h4>

        <div className="flex flex-col gap-10 md:gap-5 lg:gap-10 text-base xl:text-3xl font-thin">
          <p>
            Our journey began with a passion for transforming spaces and a
            commitment to excellence. From humble beginnings, we embarked on a
            mission to redefine luxury renovation, one project at a time. With
            dedication and unwavering focus, we've honed our craft, creating
            breathtaking spaces that exceed expectations.
          </p>
          <p>
            Along the way, we've encountered challenges and triumphs, each one
            shaping our story and fueling our drive to excel. Through
            collaboration, innovation, and attention to detail, we've earned the
            trust of our clients and the admiration of our peers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
