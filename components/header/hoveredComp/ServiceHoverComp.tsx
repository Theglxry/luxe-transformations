import { useState } from "react";
import RenovationServicesType from "../../renovationServices/RenovationServicesType";
import RenovationServicesLinks from "../../renovationServices/RenovationServicesLinks";
import { tabs } from "@/constants/index";

interface Tab {
  id: string;
  title: string;
  items: { id: string; label: string }[];
}

const ServiceHoverComp: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Commercial");

  return (
    <div className="w-full flex flex-col gap-10 items-center px-10">
      <div className="relative w-full mb-10">
        <div className="absolute left-1/3  w-full ">
          <RenovationServicesType
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>

      <div className="w-full">
        {tabs.map(
          (tab) =>
            activeTab === tab.title && (
              <RenovationServicesLinks key={tab.id} tab={tab} />
            )
        )}
      </div>


      {/* tab indicator */}
      <div className="">

      </div>
    </div>


  );
};

export default ServiceHoverComp;
