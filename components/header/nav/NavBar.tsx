import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, socialLinks } from "@/constants";
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

const NavBar = ({ toggleMenu, isOpen }: NavProps) => {
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
      <div
        className={`w-full h-screen flex flex-col items-center bg-black rounded-3xl fixed top-0 left-0 z-50 transition-all duration-1000 ease-in-out  transform sm:border-x-8 border-white ${
          isOpen ? "translate-y-0" : "hidden"
        }`}
      >
        <Link href={"/"}>
          {/* <div className="absolute top-10 w-24 h-24 md:w-[10rem] md:h-auto left-4 lg:left-4  lg:w-auto"> */}
          <div className="absolute top-10 left-10   ">
            <Image src="/icons/logo.svg" alt="logo" width={200} height={100} />
          </div>
        </Link>





        {/* close button*/}
        <button
          // className="right-5 sm:right-10 md:right-5 xl:right-10 absolute  xl:top-10 w-30 md:h-30 cursor-pointer z-50 border-2 rounded-full"
          className="right-10 absolute top-10 p-4 cursor-pointer z-50 border-2 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <Image src="/icons/closeNav.svg" alt="menu" width={40} height={40} />
        </button>





        {/* nav links */}
        {/* <nav className="absolute inset-x-0 flex items-center top-[15%] sm:top-[10%] md:top-8 xl:top-24 justify-center flex-1 gap-10 text-white"> */}
        <div className="relative w-full flex flex-col gap-10 xl:pt-40 px-10">

        {/* <nav className="absolute inset-x-0 flex items-center top-40 justify-center flex-1 gap-10 text-white"> */}
        <nav className="flex items-center justify-center flex-1 gap-10 text-white">
          {/* <ul className="relative flex flex-col md:flex-row items-center md:gap-10 lg:gap-20  border w-[80%]"> */}
          <ul className="relative flex items-center justify-evenly w-[80%]">

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

        {/* <section className="absolute top-[50%]   left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-full px-10 flex items-center justify-center"> */}
        {/* <section className="absolute  inset-0 flex items-center justify-center sm:static sm:translate-x-0 sm:translate-y-0 sm:flex-none sm:justify-start lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[80%]"> */}
       
       
       
       
        <section className="flex items-center justify-center">
          <div className="w-full flex justify-center">
            {/* Render components for nav links that don't need to be hovered */}
            {activeIndex !== null && (
              <>
                {navLinks[activeIndex].label === "WORK" && (
                  <WorkHoverComponent />
                )}
              </>
            )}

            {/* Render components for nav links with hovered content */}
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
        </section>
        </div>













      </div>
    </>
  );
};

export default NavBar;
