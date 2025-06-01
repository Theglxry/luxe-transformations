import Image from "next/image";
import React, { useState } from "react";

function PageTab({
  tabs = [],
  activeTab,
  setActiveTab = () => null,
}: {
  tabs?: any[];
  activeTab?: any;
  setActiveTab?: any;
}) {
  return (
    <div>
      <div
        className=" my-[32px] md:my-[60px] py-[32px] flex flex-wrap gap-[16px] sm:gap-[24px] items-center"
        style={{
          borderTop: "1px solid #C4C4C4",
          borderBottom: "1px solid #C4C4C4",
        }}>
        {tabs.map((t, indx) => {
          const active = activeTab === t?.id;
          return (
            <button
              onClick={() => setActiveTab(t?.id)}
              key={t?.id || `${indx}`}
              style={{
                color: active ? "#282828" : "#BBBBBBBB",
                background: active ? "#ffffff" : "#282828",
              }}
              className="
            h-[clamp(40px,calc(49/1420*100vw),70px)]
            px-[21px] flex items-center justify-center text-[clamp(14px,calc(16/1420*100vw),24px)] leading-[1.2] font-semibold rounded-[39px]">
              <span className="text-inherit">{t?.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PageTab;
