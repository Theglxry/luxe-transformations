"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import menu_yellow from "@/assets/icons/menu_yellow.svg";
// import menu_black from "@/assets/icons/menu_black.svg";

import yellow_dot_black_circle from "@/assets/icons/yellow_dot_black_circle.svg";
import yellow_dot_white_circle from "@/assets/icons/yellow_dot_white_circle.svg";

import { motion, Variants, useAnimate } from "framer-motion";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import NavbarOverlay from "./NavbarOverlay";
import "./style.css";

const getCardVariants = (delay?: number): Variants => {
  return {
    offscreen: {
      y: -300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
        delay,
      },
    },
  };
};

function NavBar({ dark = true }: { dark?: boolean }) {
  useGSAP(() => {
    SplitType.create("#navbar_text_1");
    SplitType.create("#navbar_text_2");

    const tl = gsap.timeline({});

    gsap.from("#navbar_text_icon", {
      scale: 0,
      opacity: 0,
      duration: 3,
    });

    tl.to("#navbar_text_1", {
      opacity: 1,
      duration: 0.2,
    }).to(
      ".char",
      {
        opacity: 1,
        stagger: 0.1,
        duration: 1,
      },
      1
    );

    return () => {
      tl.reverse();
    };
  }, {});

  const [scope, animate] = useAnimate();

  return (
    <div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="w-full flex items-center justify-between pt-[15px] sm:pt-[30px]">
        <motion.div variants={getCardVariants(0)}>
          <Link href="/">
            <Image
              src={dark ? "/icons/logo.svg" : "/icons/logo_dark.svg"}
              alt="logo"
              width={160}
              height={50}
              className="w-[clamp(123px,calc(213/1420*100vw),200px)]  h-[clamp(54px,calc(54/1420*100vw),96px)]"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}>
          <p
            style={{ color: dark ? "#ffffff" : "#000000" }}
            className="hidden sm:flex text-[clamp(11px,calc(20/1420*100vw),30px)] items-center gap-[10px]">
            <span id="navbar_text_1">WE</span>
            <Image
              id="navbar_text_icon"
              src={dark ? yellow_dot_white_circle : yellow_dot_black_circle}
              alt="logo"
              className="w-[clamp(24px,calc(24/1420*100vw),36px)] "
            />
            <span id="navbar_text_2">PROVIDE COMFORT AND ELEGANCE</span>
          </p>
        </motion.div>
        <motion.div variants={getCardVariants(0.2)}>
          <button
            onClick={() =>
              animate(scope.current, { y: 0 }, { ease: "linear" })
            }>
            <Image
              src={dark ? "icons/menu_yellow.svg" : "/icons/menu_black.svg"}
              alt="logo"
              width={50}
              height={50}
              className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]"
            />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: "-100%" }}
        ref={scope}
        className="
      top-0 left-0 z-20
     
      overflow-hidden
      fixed h-screen w-screen m-[0] bg-[#0f0f0f] md:bg-white">
        <NavbarOverlay
          onClose={() =>
            animate(scope.current, { y: "-100%" }, { ease: "linear" })
          }
        />
      </motion.div>
    </div>
  );
}

export default NavBar;
