import React, { Fragment } from "react";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";

import { IoCheckmarkCircle } from "react-icons/io5";

function Deliverables() {
  const data = [
    "Seamlessly blending modern aesthetics with timeless charm in the hotel's interiors.",
    "Achieving a remarkable 30% improvement in operational efficiency through cutting-edge systems.",
    "Realizing a noteworthy 20% reduction in energy consumption, aligning with eco-conscious preferences.",
    "Generating a substantial 15% increase in foot traffic and engagement.",
    "Introducing a new visual identity and refreshed logo, leading to an 18% growth in brand awareness.",
    "Streamlining guest services, contributing to a 25% increase in bookings.",
  ];
  return (
    <div className="md:p-16 p-4 bg-[#0F0F0F] text-white flex flex-col md:gap-12 gap-4">
      <HeaderTitle
        title_top="DELIVERABLES"
        title_color={"#FFFFFF"}
        title_font_size="56px"
      />
      <div className="flex flex-col font-archivo">
        {data.map((item, index) => (
          <Fragment key={`${index}`}>
            <div className="flex gap-4 py-6">
              <div>
                <IoCheckmarkCircle className="my-auto text-3xl" />
              </div>
              <span className="md:text-2xl text-base">{item}</span>
            </div>
            {index + 1 !== data.length && (
              <div className="h-[1px] bg-[#4B4B4B] " />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Deliverables;
