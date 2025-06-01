import React from "react";

import Button from "@/components/reuseables/Button/Button";

const OurSolution = ({
  solution_text_1 = `Luxe Transformation provides a wide array of hotel renovation
  services, including guest room refurbishments, lobby redesigns, spa
  renovations, and exterior enhancements, with a focus on delivering
  unparalleled guest experiences through the integration of luxurious
  amenities and timeless design elements, ensuring each stay is
  memorable and extraordinary.`,
  solution_text_2 = `  With a commitment to excellence and attention to detail, Luxe
  Transformation transforms hotels into distinctive destinations that
  captivate guests and set new standards in luxury hospitality. Whether
  you're seeking to refresh the interior ambiance, enhance guest
  comfort, or revitalize your property's exterior, our team of skilled
  professionals is dedicated to bringing your vision to life with
  precision and flair. Trust Luxe Transformation to elevate your hotel's
  aesthetic appeal, functionality, and overall guest satisfaction,
  ensuring that each stay leaves a lasting impression of luxury and
  sophistication.`,
}: {
  solution_text_1?: string;
  solution_text_2?: string;
}) => {
  return (
    <div className="w-full md:mb-[20px] text-black flex flex-col-reverse gap-10 justify-between md:py-[50px] py-5 lg:flex-row  xl:py-[100px]">
      <div className="w-48">
        <Button
          title="Our Solution"
          background="#100E10"
          width="170px"
          color="#ffffff"
          rightIcon={"/icons/arrorw_top_right_white.svg"}
        />
      </div>

      <div
        className="flex  flex-col justify-between gap-[32px] sm:gap-[50px] 3xl:gap-[100px] 
        w-full
        lg:w-[clamp(100px,calc(890/1420*100vw),1200px)]
        text-[clamp(18px,calc(24/1420*100vw),50px)]
        
        font-thin md:text-start text-justify">
        {!solution_text_1 ? null : <p>{solution_text_1}</p>}
        {!solution_text_2 ? null : <p>{solution_text_2}</p>}
      </div>
    </div>
  );
};

export default OurSolution;
