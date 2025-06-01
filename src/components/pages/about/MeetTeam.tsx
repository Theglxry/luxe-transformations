import React from "react";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import { teamData } from "./teamData";

function MeetTheTeam() {
  return (
    <div className="md:mt-0 mt-10 py-[32px] sm:py-[70px]">
      <HeaderTitle
        title_top={"MEET THE TEAM"}
        description={
          "Unveil the excellence within our team as you meet the faces behind our success"
        }
        description_max_width="648px"
        title_color="#100E10"
        description_color="#4E4E4E"
        title_font_size="56px"
      />

      {/* MEET THE TEAM CODE HERE */}

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-x-6 gap-y-[48px]">
        {teamData?.map((item, indx) => {
          return (
            <div key={item?.id || `${indx}`}>
              <img
                src={item?.image}
                alt="image_testimonial"
                className="w-full"
              />

              <div className=" mt-4">
                <h2 className="text-[#282828] md:text-[20px] text-[18px]">
                  {item?.name}
                </h2>
                <p className="text-[#4E4E4E] font-light md:text-[16px] text-[15px] mt-1">
                  {item?.designation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MeetTheTeam;
