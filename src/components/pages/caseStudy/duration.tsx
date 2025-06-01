import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import React from "react";

function Duration() {
  return (
    <div className="md:p-16 p-4 bg-[#0F0F0F] text-white flex-col  ">
      <HeaderTitle
        title_top="PROJECT DURATION"
        title_color={"#FFFFFF"}
        title_font_size="56px"
      />
      <div className="grid md:grid-cols-3 md:gap-6 md:py-8 py-5 px-2 md:mt-20 mt-6 font-inter border border-white rounded-3xl border-opacity-10">
        <div className="flex flex-col gap-3 py-3 justify-center text-center md:border-r md:border-b-0 border-b md:border-r-white border-b-white border-opacity-10">
          <span className="md:text-[40px] text-[28px] font-semibold">3 Months</span>
          <span className="md:text-lg text-sm font-medium">Preparation Phase</span>
        </div>
        <div className="flex flex-col gap-3 py-3 justify-center text-center md:border-r md:border-b-0 border-b md:border-r-white border-b-white border-opacity-10">
          <span className="md:text-[40px] text-[28px] font-semibold">12 Months</span>
          <span className="md:text-lg text-sm font-medium">Implementation Phase</span>
        </div>
        <div className="flex flex-col gap-3 py-3 justify-center text-center">
          <span className="md:text-[40px] text-[28px] font-semibold">9 Months</span>
          <span className="md:text-lg text-sm font-medium">
            Finalization & Evaluation Phase
          </span>
        </div>
      </div>
    </div>
  );
}

export default Duration;
