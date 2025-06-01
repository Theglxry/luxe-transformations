import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import React from "react";

function AboutProject() {
  return (
    <div className="md:p-16 p-4 grid grid-cols-5 gap-8 bg-white text-[#100E10]">
      <div className="md:col-span-2 col-span-5">
        <HeaderTitle
          title_top="ABOUT THE PROJECT"
          title_color="#100E10"
          description_color="#fff"
          title_font_size={"56px"}
        />
      </div>
      <div className="md:col-span-3 col-span-5 flex flex-col gap-12 font-archivo">
        <div className="flex flex-col gap-4">
          <div className="md:text-lg text-sm font-semibold">Challenges</div>
          <div className="md:text-2xl text-lg">
          The decision to embark on a renovation journey was further fueled by valuable feedback from the guests. While the hotel continued to receive praise for its rich history and impeccable service, there were growing expectations for contemporary amenities and a refreshed ambiance. Guest reviews and market research indicated that, to remain a preferred choice, the Grand Vista needed a rejuvenation that aligned with the evolving tastes and preferences of its clientele..
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="md:text-lg text-sm font-semibold">Approach</div>
          <div className="md:text-2xl text-lg">
          The Grand Vista Hotel, a prominent luxury hotel in a prime urban location, faced the challenge of maintaining its competitiveness in the evolving hospitality industry. In response to changing customer expectations and increased competition, the hotel management decided to embark on a comprehensive renovation project to enhance the overall guest experience and rejuvenate the hotel's image.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
