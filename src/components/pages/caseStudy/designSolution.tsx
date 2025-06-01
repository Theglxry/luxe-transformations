import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import Image from "next/image";
import React from "react";

function DesignSolution() {
  const data = [
    {
      img: "/images/caseStudy/1.jpeg",
    },
    {
      img: "/images/caseStudy/2.jpeg",
    },
    {
      img: "/images/caseStudy/3.jpeg",
    },
    {
      img: "/images/caseStudy/4.jpeg",
    },
    {
      img: "/images/caseStudy/5.jpeg",
    },
    {
      img: "/images/caseStudy/6.jpeg",
    },
  ];
  return (
    <div className="md:p-16 p-4 bg-white text-[#100E10] grid grid-cols-2 gap-6">
      <div className="col-span-2 md:col-span-1">
        <HeaderTitle
          title_top="DESIGN SOLUTIONS"
          description={`This is more than a renovation; it's a meticulous crafting of elegance, where every architectural element tells a tale of tradition reborn.`}
          description_font_size="20px"
          title_color="#100E10"
          description_color="#100E10"
          title_font_size="56px"
        />
      </div>
      <div className="col-span-2 md:col-span-1"></div>
      {data.map((item, index) => (
        <Image
          key={`${index}`}
          src={item.img}
          alt=""
          height={600}
          width={635}
          className="h-full w-full rounded-md col-span-2 md:col-span-1"
        />
      ))}
    </div>
  );
}

export default DesignSolution;
