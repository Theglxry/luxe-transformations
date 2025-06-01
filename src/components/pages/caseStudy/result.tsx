import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import React from "react";

function Result() {
  const data = [
    {
      percentage: 50,
      title: "Positive Guest Reviews",
      description:
        "Over 25% increase, highlighting the successful fusion of modern aesthetics with timeless charm.",
    },
    {
      percentage: 30,
      title: "Operational Efficiency Boost:",
      description:
        "Achieved a remarkable 30% improvement through cutting-edge technology integration.",
    },
    {
      percentage: 50,
      title: "Sustainable Practices",
      description:
        "Noteworthy 20% reduction in energy consumption, aligning with eco-conscious traveler preferences.",
    },
    {
      percentage: 30,
      title: "Revitalized Public Spaces",
      description:
        "Substantial 15% increase in foot traffic and engagement, transforming communal areas into dynamic environments.",
    },
  ];
  return (
    <div className="md:p-16 p-4 bg-[#0F0F0F] text-white flex-col  ">
      <HeaderTitle
        title_top="TRANSFORMATIVE RESULTS"
        title_color={"#FFFFFF"}
        title_font_size="56px"
      />
      <div className="grid md:grid-cols-4 gap-6 font-archivo mt-12">
        {data.map((item) => (
          <div className="flex flex-col justify-center gap-2">
            <span className="md:text-[56px] text-[28px] font-semibold">{item.percentage}%</span>
            <span className="text-lg font-medium">{item.title}</span>
            <span className=" ">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
