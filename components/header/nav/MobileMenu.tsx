import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import Tabs from "@/components/renovationServices/Tabs";
import WorkHoverComponent from "../hoveredComp/WorkHoverComponent";
import StudioHoverComponent from "../hoveredComp/StudioHoverComponent";
import ContactHoverComponent from "../hoveredComp/ContactHoverComponent";
import ServiceHoverComp from "../hoveredComp/ServiceHoverComp";
import Gallery from "@/components/gallery/Gallery";

interface NavProps {
  toggleMenu: () => void;
  isOpen: boolean;
}
const defaultIndex = navLinks.findIndex((link) => link.label === "WORK");

const MobileMenu = ({ toggleMenu, isOpen }: NavProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultIndex);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleNavLinkClick = () => {
    // Close the navigation when a navLink is clicked
    toggleMenu();
  };

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setDropdownVisible(false);
  };

  return (
    <>
    <div className="bg-red-500  w-full h-screen">

      <div
        className={`w-full  flex flex-col items-center rounded-3xl fixed top-0 right-0 z-50 transition-all duration-1000 ease-in-out  transform  ${
          isOpen ? "translate-y-0" : "hidden"
        }`}
      >

 

        {/* close button*/}
        <button
          className="right-10 absolute top-10 p-4 cursor-pointer z-50"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <Image src="/icons/closeNav.svg" alt="menu" width={40} height={40} />
        </button>

        {/* nav links */}
        <div className="relative w-full flex flex-col gap-10 pt-40 px-10">
          <nav className="flex items-center justify-center flex-1 gap-10 text-white">
            <ul className="relative flex flex-col items-center justify-evenly w-[80%]">
              {navLinks.map((link, index) => (
                <>
                  <li
                    key={index}
                    className={`floral-reg relative flex items-center text-center justify-center gap-2 xl:text-6xl`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={handleNavLinkClick}
                  >
                    <Link href={link.url} className="">
                      <div
                        className={`flex items-center justify-center px-6 py-2  ${
                          activeIndex === index ? "light-gray rounded-full" : ""
                        } `}
                      >
                        <div
                          className="flex items-center justify-center gap-2 pt-2"
                          style={{ justifyContent: "center" }}
                        >
                          <p>{link.label}</p>
                          {activeIndex === index && (
                            <span>
                              <Image
                                src={"/icons/tabs-arrow.svg"}
                                alt=""
                                width={30}
                                height={30}
                              />
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </nav>









          {/* <section className="flex items-center justify-center">
            <div className="w-full flex justify-center">
              {activeIndex !== null && (
                <>
                  {navLinks[activeIndex].label === "WORK" && (
                    <WorkHoverComponent />
                  )}
                </>
              )}

              {isDropdownVisible && activeIndex !== null && (
                <>
                  {navLinks[activeIndex].label === "SERVICES" && (
                    <ServiceHoverComp />
                  )}
                  {navLinks[activeIndex].label === "STUDIO" && (
                    <StudioHoverComponent />
                  )}
                  {navLinks[activeIndex].label === "CONTACT" && (
                    <ContactHoverComponent />
                  )}
                </>
              )}
            </div>
          </section> */}
        </div>
      </div>
    </div>

    </>
  );
};

export default MobileMenu;
