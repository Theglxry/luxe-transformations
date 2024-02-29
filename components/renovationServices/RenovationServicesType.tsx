// TabSelectionTypeComponent.jsx
import React from "react";
interface Tab {
    id: string;
    title: string;

  }
  
  interface TabProps {
    tabs: Tab[];
    activeTab: string;
    setActiveTab: (title: string) => void;
  }

const RenovationServicesType:React.FC<TabProps> = ({ tabs, activeTab, setActiveTab }) => {
    const isLeftTabActive = activeTab === tabs[0].title;
    const isRightTabActive = activeTab === tabs[tabs.length - 1].title;

    

  return (
    <div className="flex gap-10 w-auto">
      <ul
        className="tab-container md:w-1/2 lg:w-1/4 flex items-center justify-between border-2 border-gray-500 font-thin text-xs sm:text-sm px-2 rounded-full"

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
  );
};

export default RenovationServicesType;
