import React from "react";
import StickyButton from "../../button/ArrowBtn";
// import allCases from "../../public/icons/service-white-arr.svg";
import Image from "next/image";

const OurSolution = () => {
  return (
    <div className="w-full mb-28 text-black flex flex-col gap-10  px-5 md:px-0 py-10 lg:flex-row  xl:py-10">
      <div className="w-1/3" data-aos="fade-right">
        <button className="all-cases text-white hover:px-14 flex items-center gap-5 bg-black px-8 py-3 md:px-6 md:py-3 lg:px-10 lg:py-3 rounded-full text-sm xl:text-xl">
          {/* See All Case Studies */}
          <div className="wave text-base uppercase whitespace-nowrap">
            <span style={{ "--i": 1 }}>Our</span>
            <span style={{ "--i": 4 }}>&nbsp;</span>
            <span style={{ "--i": 5 }}>Solution</span>
          </div>

          <div>
            <Image
              src={'/icons/service-white-arr.svg'}
              alt=""
              className="all-cases-arrow"
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>

      <div
        className="w-full flex flex-col gap-5"
        data-aos="fade-left"
        data-aos-duration="600"
      >
        <div className="flex flex-col gap-10 md:gap-5 lg:gap-10 text-base xl:text-3xl font-thin">
          <p>
            We offer a comprehensive range of services to meet all your needs.
            From renovations and refurbishments to new constructions, we've got
            you covered. Our team of skilled professionals is dedicated to
            delivering high-quality workmanship and exceptional results.
          </p>
          <p>
            With attention to detail and a commitment to excellence, we ensure
            that every project is completed to the highest standards. Whether
            you're looking to update your home or embark on a new construction
            project, we're here to help. Contact us today to learn more about
            our services and how we can assist you in bringing your vision to
            life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
