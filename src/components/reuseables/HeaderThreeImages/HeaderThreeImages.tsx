import React from "react";
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

function HeaderThreeImages({
  image_1,
  image_2,
  image_3,
}: {
  image_1?: any;
  image_2?: any;
  image_3?: any;
}) {
  return (
    <motion.div
      className={styles.main}
      initial="hidden"
      whileInView="visible"
      variants={parentVariants}
      viewport={{ once: true }}>
      <motion.div variants={childVariants} className={styles.main_left}>
        <img alt="image_1" src={image_1} />
      </motion.div>
      <motion.div variants={childVariants} className={styles.main_middle}>
        <img alt="image_2" src={image_2} />
      </motion.div>
      <motion.div variants={childVariants} className={styles.main_right}>
        <img alt="image_3" src={image_3} />
      </motion.div>
    </motion.div>
  );
}

export default HeaderThreeImages;
