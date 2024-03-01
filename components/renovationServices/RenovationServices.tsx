import React, { useState } from "react";
import RenovationServicesType from "./RenovationServicesType";
import RenovationServicesLinks from "./RenovationServicesLinks";
import { tabs } from "@/constants/index";

interface Tab {
  id: string;
  title: string;
  items: { id: string; label: string }[];
}

const RenovationServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Commercial");

  return (
    <div className="w-full mb-28">
      <h1 className="text-xl md:text-5xl mb-8">RENOVATION SERVICES</h1>

    

      <div className="w-full flex flex-col gap-10">
        <RenovationServicesType
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="w-full">
          {tabs.map(
            (tab) =>
              activeTab === tab.title && (
                <RenovationServicesLinks key={tab.id} tab={tab} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default RenovationServices;
