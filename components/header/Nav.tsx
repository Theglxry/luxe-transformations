import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, socialLinks } from "@/constants";

interface NavProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const Nav = ({ toggleMenu, isOpen }: NavProps) => {
  const handleNavLinkClick = () => {
    // Close the navigation when a navLink is clicked
    toggleMenu();
  };

  return (
    <>
      <div
        className={`w-screen h-screen overflow-hidden flex flex-col items-center bg-white fixed top-0 left-0 z-50 transition-all duration-1000 ease-in-out  transform sm:border-x-8 border-white ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href={"/"}>
          <div className="absolute top-10 w-24 h-24 md:w-[10rem] md:h-auto left-4 lg:left-4  lg:w-auto">
            <Image src="/icons/logo.svg" alt="logo" width={100} height={100} />
          </div>
        </Link>

        {/* close button*/}
        <button
          className="right-5 sm:right-10 md:right-5 xl:right-20 absolute  xl:top-10 w-30 md:h-30 cursor-pointer z-50"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <Image src="/icons/close.svg" alt="menu" width={40} height={40} />
        </button>

        {/* nav links */}
        <nav className="absolute inset-x-0 flex items-center top-[15%] sm:top-[10%] md:top-8 xl:top-12 justify-center flex-1 gap-10 text-black">
          <ul className="flex flex-col md:flex-row items-center md:gap-10 lg:gap-20">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="bold flex items-center gap-2 text-6xl  sm:text-8xl md:text-5xl xl:text-7xl 2xl:text-8xl"
              >
                <Link href={link.url} onClick={handleNavLinkClick}>
                  <div className="popUpWord">{link.label}</div>
                </Link>
                <span className="w-3 h-3 lg:w-5 lg:h-5  mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 ">
                  <svg
                    viewBox="0 0 10 11"
                    fill="goldenrod"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z"
                    ></path>
                  </svg>
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {/* social links */}
        <div className="absolute inset-x-0 flex items-center top-[60%] justify-center flex-1 text-black boder-2 border-green-400">
          <ul className="thin flex items-center gap-5 sm:gap-10  sm:text-2xl">
            {socialLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.url}
                  className="hover:text-blue-900 hover:line-through transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition  after:duration-300 after:origin-right after:hover:origin-left"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`w-full h-screen flex flex-col bg-black rounded-3xl fixed top-0 left-0 z-50 transition-all duration-7000 ease-in-out transform
      ${isOpen ? "translate-y-2/3" : "opacity-0"}`}
        ></div>
      </div>

      {/* overlay */}
      {/* <div
  className={`absolute left-0 bg-blue-400 w-[90%] h-screen m-auto rounded-3xl top-0  transition-all duration-1000 ease-in-out opacity-100 transform ${
    isOpen ? "top-full" : "top-0"
  }`}
></div>
  */}

      {/* <div className={`absolute bg-black left-0 w-full h-screen m-auto rounded-3xl top-0 z-0 transition-all duration-500 ease-in-out transform ${isOpen ? "" : "hidden"}`}></div> */}
    </>
  );
};

export default Nav;
