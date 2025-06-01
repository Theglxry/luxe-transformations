"use client";
import React from "react";

import { tabs } from "./data";

import styles from "./styles.module.css";
import { motion } from "framer-motion";

const ControlTab = ({
  disableAnimations = false,
  active,
  setactive,
}: {
  disableAnimations?: boolean;
  active?: boolean;
  setactive?: any;
}) => {
  return (
    <>
      <motion.div
        className={styles.button_wrapper}
        whileInView={disableAnimations ? undefined : "visible"}
        initial={disableAnimations ? undefined : "hidden"}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 150 },
        }}>
        {tabs.map((item, indx) => {
          return (
            <button
              onClick={() => setactive(item)}
              key={item?.id || `${indx}`}
              className={
                active?.id === item?.id ? styles.active_btn : undefined
              }>
              {item?.title}
            </button>
          );
        })}
      </motion.div>
    </>
  );
};

export default ControlTab;
