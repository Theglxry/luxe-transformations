import React, { useState } from "react";
import { tabs } from "@/constants";
import Image from "next/image";
import tabsArrow from "../../public/icons/tabs-arrow.svg";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Commercial");

  const isLeftTabActive = activeTab === tabs[0].title;
  const isRightTabActive = activeTab === tabs[tabs.length - 1].title;

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex gap-10 w-auto">
        <ul
          className="tab-container md:*:w-1/4 flex items-center sm:gap-20 border-2 border-gray-500 font-thin  text-xs sm:text-sm px-2 rounded-full"
          style={{
            paddingLeft: isLeftTabActive ? "0" : "",
            paddingRight: isRightTabActive ? "0" : "",
          }}
        >
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(tab.title)}
              className={`cursor-pointer ${
                activeTab === tab.title
                  ? "tab-bg text-white font-thin py-3 px-5 sm:px-8 rounded-full"
                  : ""
              } ${index !== 0 ? "ml-4" : ""}`}
              style={{ minWidth: "100px", width: "fit-content" }}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>

      {/* tab content */}
      <div className="w-full">
        {tabs.map(
          (tab) =>
            activeTab === tab.title && (
              <div
                key={tab.id}
                className="flex flex-col gap-5 sm:gap-10 md:flex-row uppercase"
              >
                {/*--------------(commercails)-----------*/}
                <div className="flex w-full gap-10">
                  <div className="w-full flex flex-col">
                    {tab.items.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="tab-items tab-br flex items-center justify-between border-b py-5 w-full transition-all duration-300 ease-in-out hover:px-4"
                      >
                        <div className="flex items-center gap-5 sm:gap-10">
                          <div className="text-gray-500 whitespace-nowrap">{item.id}</div>
                          <p className="label text-xs sm:text-sm lg:text-base whitespace-nowrap">
                            {item.label}
                          </p>
                        </div>
                        <div className="">
                          <Image src={tabsArrow} alt="" className="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>



                {/*----------------(residentials)------------*/}
                <div className="flex w-full  gap-10">
                  <div className="w-full flex flex-col">
                    {tab.items.slice(3, 6).map((item, index) => (
                      <div
                        className="tab-items tab-br flex items-center justify-between border-b py-5 w-full transition-all duration-300 ease-in-out hover:px-4"
                        key={index}
                      >
                        <div className="flex items-center gap-5 sm:gap-10">
                          <div className="text-gray-500 whitespace-nowrap">{item.id}</div>
                          <p className="label text-xs sm:text-sm lg:text-base whitespace-nowrap">
                            {item.label}
                          </p>
                        </div>
                        <div className="">
                          <Image src={tabsArrow} alt="arrow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
