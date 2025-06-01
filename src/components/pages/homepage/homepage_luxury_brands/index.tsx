"use client";
import React, { useRef } from "react";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import Image from "next/image";
import { boxes } from "./data";
import arrow_left_circled_black from "@/assets/icons/arrow_left_circled_black.svg";
import arrow_right_circled_white from "@/assets/icons/arrow_right_circled_white.svg";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren", // Start animation before children
      staggerChildren: 0.3, // Stagger child animations by 0.2 seconds
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20, // Initial position offset for stagger
  },
  visible: {
    opacity: 1,
    y: 0, // Final position after stagger
  },
};

const imageVariants = {
  hidden: {
    rotate: 90, // Initial rotation (90 degrees for right-to-left)
  },
  visible: {
    rotate: 0, // Final rotation (0 degrees for normal view)
    transition: { duration: 1 }, // Animation duration (1 second)
  },
};
const HomepageLuxuryBrands = () => {
  const navRef = useRef();

  const handleNav = (direction) => {
    const scrollAmount = 1000;
    const scrollDuration = 500; // milliseconds

    const scrollContainer = navRef.current;
    const startScrollPosition = scrollContainer.scrollLeft;
    const targetScrollPosition =
      direction === "left"
        ? startScrollPosition - scrollAmount
        : startScrollPosition + scrollAmount;

    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const easedProgress = progress; // You can apply easing if needed

      scrollContainer.scrollLeft =
        startScrollPosition +
        easedProgress * (targetScrollPosition - startScrollPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.header_title}>
          <HeaderTitle
            title_top="LUXURY BRAND PERKS"
            title_color="#fff"
            title_font_size="56px"
            description="Your journey to opulence begins with Luxe – Where Numbers Speak of Unrivaled Quality and Luxury."
            description_color="#A9A9A9"
          />

          <div className={styles.header_title_buttons}>
            <motion.div
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              variants={{
                visible: { opacity: 1, x: 0, rotate: [0, 180, 270, 360] },
                hidden: { opacity: 0, x: 50 },
              }}>
              <motion.button
                className={styles.header_title_button}
                whileHover={{
                  scale: 1.3,
                  transition: { delay: 0, duration: 0.1, ease: "easeInOut" },
                }}
                onClick={() => handleNav("left")}>
                <Image
                  alt="arrow_left_circled_black"
                  src={arrow_left_circled_black}
                />
              </motion.button>
            </motion.div>
            <motion.div
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              variants={{
                visible: { opacity: 1, x: 0, rotate: [0, 180, 270, 360] },
                hidden: { opacity: 0, x: 50 },
              }}>
              <motion.button
                whileHover={{
                  scale: 1.3,
                  transition: { delay: 0, duration: 0.1 },
                }}
                className={styles.header_title_button}
                onClick={() => handleNav("right")}>
                <Image
                  alt="arrow_right_circled_white"
                  src={arrow_right_circled_white}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
        <motion.div
          className={styles.boxes}
          ref={navRef}
          initial="hidden"
          whileInView="visible"
          variants={parentVariants}
          viewport={{ once: true }}>
          {boxes.map((box) => {
            return (
              <motion.div
                whileHover={{
                  backgroundColor: "#282828",
                  scale: 0.98,
                }}
                transition={{ duration: 0.1 }}
                variants={childVariants}
                className={styles.box}
                key={box?.id}>
                <h4>{box.top}</h4>
                <div className="flex flex-col">
                  <small>{box.bottom}</small>
                  <small>{box.bottom_sub}</small>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </>
  );
};

export default HomepageLuxuryBrands;
