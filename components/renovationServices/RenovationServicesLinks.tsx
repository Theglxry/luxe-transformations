// TabContentComponent.jsx
import React from "react";
import Image from "next/image";
import tabsArrow from "../../public/icons/tabs-arrow.svg";

interface TabItem {
  id: string;
  label: string;
}

interface Tab {
  items: TabItem[];
}

interface TabProps {
  tab: Tab;
}



const RenovationServicesLinks:React.FC<TabProps> = ({ tab } ) => {
  return (
    <div className="flex flex-col gap-5 sm:gap-10 md:flex-row uppercase">
      {/* Commercial Tab */}
      <div className="flex w-full gap-10">
        <div className="relative w-full flex flex-col">
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
                <Image src={tabsArrow} alt="" width={15} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Residential Tab */}
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
                <Image src={tabsArrow} alt="arrow" width={15} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenovationServicesLinks;
