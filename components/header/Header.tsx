"use client";

import { navLinks, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { usePathname } from "next/navigation";
// import NavB from "./Nav";
import NavBar from "./nav/NavBar";
import MobileMenu from "./nav/MobileMenu";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      // className="absolute flex items-center left-0 justify-between px-10 w-full z-50 border" 
      className="absolute left-0 mx-auto w-full z-50" 
      data-aos="fade-down"
    >
      <div className="relative flex items-center justify-between"> 

      {/* home logo */}
      <Link href={"/"}>
        <div className="absolute left-5 md:left-16 top-10 w-24 h-24 md:w-[10rem] md:h-auto   lg:w-auto">
          <Image src="/icons/logo.svg" alt="logo" width={160} height={160} />
        </div>
      </Link>

      {/*------------ hamburger -------------*/}
      <button
        className="right-4 md:right-16 top-6 md:top-10 absolute h-[5px]  lg:w-30 md:h-30 cursor-pointer"
        
        onClick={toggleMenu}
      >
        <Image src="/icons/menu-01.svg" alt="menu" width={50} height={50} />
      </button>

      {/* nav section */}
      {/* <Nav toggleMenu={toggleMenu} isOpen={isOpen} /> */}
      {/* Mobile menu */}


      <div className="lg:hidden">
          <MobileMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>

        {/* Navigation bar */}
        <div className="hidden lg:block">
          <NavBar toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>






      </div>
    </header>
  );
};

export default Header;


