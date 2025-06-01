import React from "react";
import ListItems from "@/components/reuseables/RenovationServices/ListItems";
import ControlTab from "@/components/reuseables/RenovationServices/ControlTab";
import { tabs } from "@/components/reuseables/RenovationServices/data";

const ServicesComponent = () => {
  const [active, setactive] = React.useState(tabs[0]);

  return (
    <div className="flex w-full flex-col items-center">
      <ControlTab setactive={setactive} active={active} disableAnimations />
      <ListItems disableAnimations active={active} />
    </div>
  );
};

export const listItems = [
  {
    title: "SERVICES",
    id: "1",
    component: <ServicesComponent />,
  },
  {
    title: "PORTFOLIO",
    id: "2",
    link: "/portfolio",
  },

  {
    title: "GALLERY",
    id: "3",
    link: "/gallery",
  },
  {
    title: "CONTACT",
    id: "4",
    link: "/contact",
  },
  {
    title: "ABOUT",
    id: "5",
    link: "/about",
  },
];
