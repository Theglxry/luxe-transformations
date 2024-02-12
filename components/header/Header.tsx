"use client";

import { navLinks, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { usePathname } from "next/navigation";
import Nav from "./Nav";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="absolute flex items-center left-0 justify-between p-10 w-full z-50"
      data-aos="fade-down"
    >
      {/* home logo */}
      <Link href={"/"}>
        <div className="absolute top-10 w-24 h-24 md:w-[10rem] md:h-auto left-4 lg:left-8  lg:w-auto">
          <Image src="/icons/logo.svg" alt="logo" width={160} height={160} />
        </div>
      </Link>

      {/*------------ hamburger -------------*/}
      <button
        className="right-4 md:right-20 top-6 md:top-10 absolute h-[5px]  lg:w-30 md:h-30 cursor-pointer"
        onClick={toggleMenu}
      >
        <Image src="/icons/hamburger.svg" alt="menu" width={30} height={30} />
      </button>

      {/* nav section */}
      <Nav toggleMenu={toggleMenu} isOpen={isOpen} />
    </header>
  );
};

export default NavBar;

// ${isOpen ? "translate-y-1/2" : "-translate-y-full"}`}

// ${isOpen ? "translate-y-1/2" : "opacity-0"}`}
