"use client";
import React from "react";

import arrorw_top_right_white from "@/assets/icons/arrorw_top_right_white.svg";

import styles from "./styles.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Link from "next/link";
const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren", // Start animation before children
      staggerChildren: 0.2, // Stagger child animations by 0.2 seconds
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

const ListItems = ({
  active,
  disableAnimations = false,
}: {
  active?: any;
  disableAnimations?: boolean;
}) => {
  const router = useRouter();
  if (disableAnimations) {
    return (
      <div className={styles.sub_services_wrapper}>
        {active?.items?.length
          ? active.items.map((item) => {
              return (
                <Link href={item?.link}>
                  <motion.button
                    whileHover={{
                      backgroundColor: "#282828",
                      paddingRight: 20,
                      paddingLeft: 20,
                    }}
                    variants={childVariants}
                    key={item?.id || `${index}`}
                    className={styles.sub_service}>
                    <small>{item.id}</small>
                    <span>{item.label}</span>
                    <Image
                      src={arrorw_top_right_white}
                      alt="arrorw_top_right_white"
                    />
                  </motion.button>
                </Link>
              );
            })
          : null}
      </div>
    );
  }

  return (
    <>
      <motion.div
        className={styles.sub_services_wrapper}
        transition={{ delay: 0.2 }}
        initial={"hidden"}
        viewport={{ once: true }}
        whileInView="visible"
        variants={parentVariants}>
        {active?.items?.length
          ? active.items.map((item?: any, indx?: any) => {
              return (
                <Link href={item?.link}>
                  <motion.button
                    viewport={{ once: true }}
                    whileHover={{
                      backgroundColor: "#282828",
                      paddingRight: 20,
                      paddingLeft: 20,
                    }}
                    variants={childVariants}
                    key={item?.id || `${indx}`}
                    className={styles.sub_service}>
                    <small>{item.id}</small>
                    <span>{item.label}</span>
                    <Image
                      src={arrorw_top_right_white}
                      alt="arrorw_top_right_white"
                    />
                  </motion.button>
                </Link>
              );
            })
          : null}
      </motion.div>
    </>
  );
};

export default ListItems;
