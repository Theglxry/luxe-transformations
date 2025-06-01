"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function BorderedPageWrapper({
  children,
  light_bg = false,
}: {
  children: React.ReactNode;
  light_bg?: boolean;
}) {
  return (
    <div className={styles.main}>
      <div
        className="fixed w-full border-[5px] border-[#ffffff00] sm:border-white h-full top-0 left-0 z-10 rounded-[10px]"
        style={{
          pointerEvents: "none",
        }}
      />

      <Link href="/contact">
        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: 360,
            transition: {
              duration: 0.5,
            },
          }}
          // onClick={() => window.open("https://wa.me/+442038369086", "_blank")}
          className="fixed bottom-[40px] sm:bottom-[50px] z-10 right-padding-vertical-screen cursor-pointer   rounded-[40px] "
          style={{
            background: light_bg ? undefined : "#0e0e0e",
          }}>
          <Image
            width="80"
            alt="alt"
            height="80"
            className="h-[clamp(60px,calc(70/1420*100vw),90px)] w-[clamp(60px,calc(70/1420*100vw),90px)] cursor-pointer z-10 relative"
            src={"/icons/pencil_circled_yellow.svg"}
          />
        </motion.button>
      </Link>

      <div className={styles.main_inner}>{children}</div>
    </div>
  );
}

export default BorderedPageWrapper;
