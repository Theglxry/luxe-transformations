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

      {/* tab selection type */}
      <div className="flex gap-10 w-auto">
        <ul
          className="tab-container md:w-1/2 lg:w-1/4 flex items-center justify-between  border-2 border-gray-500 font-thin  text-xs sm:text-sm  px-2 rounded-full"
          style={{
            paddingLeft: isLeftTabActive ? "0" : "",
            paddingRight: isRightTabActive ? "0" : "",
          }}
        >
          
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(tab.title)}
              className={`cursor-pointer text-center ${
                activeTab === tab.title
                  ? "tab-bg text-white font-thin py-3 px-2  rounded-full"
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
                  <div className="relative w-full flex flex-col ">
                    {tab.items.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="tab-items tab-br flex items-center justify-between border-b py-4 w-full transition-all duration-300 ease-in-out"
                      >
                        <div className="flex items-center gap-10">
                          <div className="tab-id text-gray-500 whitespace-nowrap ">
                            {item.id}
                          </div>

                          <p className="label text-xs  lg:text-base whitespace-nowrap">
                            {item.label}
                          </p>
                        </div>

                        <div className="tab-arr">
                          <Image
                            src={tabsArrow}
                            alt=""
                            width={15}
                          />
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
                        className="tab-items tab-br flex items-center justify-between border-b py-4 w-full transition-all duration-300 ease-in-out"
                        key={index}
                      >
                        <div className="flex items-center gap-10">
                          <div className="tab-id text-gray-500 whitespace-nowrap">
                            {item.id}
                          </div>
                          <p className="label text-xs lg:text-base whitespace-nowrap">
                            {item.label}
                          </p>
                        </div>

                        <div className="tab-arr">
                          <Image
                            src={tabsArrow}
                            alt="arrow"
                            width={15}
                          />
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

{
  /* <div className="tab-id-2 opacity-0 text-gray-500 text-xs whitespace-nowrap">
  {item.id}
</div>; */
}
