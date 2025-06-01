"use client";
import React from "react";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

import { useWindowSize } from "@react-hook/window-size";

import { processes } from "./data";

import styles from "./styles.module.css";

const HomepageOurProcess = () => {
  const [windowWidth] = useWindowSize();
  const stopAnimation = windowWidth < 965;

  let totalChildren = 0;
  processes.map((x) => {
    totalChildren += x?.children?.length || 0;
  });
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const aa = useTransform(scrollYProgress, [0, 1], [1, 100]);

  const shiftX = useSpring(aa, {
    stiffness: 100,
    damping: 10,
    mass: 0.1,
  });

  const [ev, setev] = React.useState(0);

  useMotionValueEvent(shiftX, "change", (latest) => {
    setev(latest);
  });

  return (
    <div className="relative">
      <main className={styles.main}>
        <HeaderTitle
          title_top="OUR PROCESS"
          title_color="#fff"
          title_font_size="56px"
          description=" Our luxury renovation process blends meticulous planning, craftsmanship, and innovation seamlessly, creating a living masterpiece in four key stages."
          description_color="#A9A9A9"
        />

        <motion.div className={styles.processes} ref={ref}>
          {processes.map((parent) => {
            return (
              <motion.div
                key={parent?.id}
                className={styles.processes_parent}
                style={{
                  borderTop: "0.6px solid #ffffff",
                  borderLeft:
                    windowWidth < 700
                      ? "0.6px solid #ffffff"
                      : parent?.leftBorder
                        ? "0.6px solid #ffffff"
                        : "0.6px solid #ffffff00",
                }}>
                <h3>{parent.title}</h3>
                {parent.children.map((item, index) => {
                  return (
                    <motion.div
                      key={item?.id || `${index}`}
                      className={styles.process}
                      viewport={{ once: true }}
                      style={{
                        x: stopAnimation
                          ? windowWidth < 500
                            ? index * 10
                            : index * 20
                          : ev * index,
                      }}>
                      <div className={styles.process_badge}>{index + 1}</div>
                      <span className={styles.process_text}>{item?.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
};

export default HomepageOurProcess;
