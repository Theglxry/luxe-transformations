import React from "react";
import styles from "./styles.module.css";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";

function Button({
  color = "#282828",
  background = "#ffffff",
  width = "auto",
  title = "",
  rightIcon = undefined,
  navigateTo = undefined,
  targetBlank = false,
  onClick = () => null,
}: {
  color?: string;
  background?: string;
  width?: string;
  title: string;
  rightIcon?: any;
  navigateTo?: string;
  targetBlank?: boolean;
  onClick?: any;
}) {
  const titles = typeof title === "string" ? title.split("") : [];

  const router = useRouter();
  const handleIfNavigateToIsPassed = () => {
    if (targetBlank) {
      if (typeof window !== "undefined") window.open(navigateTo, "_blank");
    } else router.push(navigateTo || "");
  };

  return (
    <motion.div
      style={{
        maxWidth:
          width === "auto"
            ? width
            : `clamp(200px, calc(${parseInt(width)} / 1420 * 100vw), 1300px)`,
        background,
        borderRadius: 36,
        overflow: "hidden",
        display: "flex",
      }}
      whileHover={"start"}
      variants={{
        start: (i) => ({
          // scale: 1.02,
          transition: {
            duration: 0.5,
          },
          staggerChildren: 0.3,
        }),
      }}>
      <motion.button
        onClick={navigateTo ? handleIfNavigateToIsPassed : onClick}
        className={styles.button_container}
        style={{
          color,
        }}>
        <motion.div
          className="flex"
          initial={{ y: -30, opacity: 0, display: "none" }}
          variants={{
            start: {
              y: 0,
              opacity: 1,
              display: "flex",
            },
          }}>
          {titles.map((x, i) => (
            <motion.div
              className={x === " " ? "ml-[8px]" : ""}
              key={`${i}`}
              initial={{ y: -30, opacity: 0 }}
              variants={{
                start: { y: 0, opacity: 1, transition: { delay: i * 0.05 } },
              }}>
              {x}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex"
          initial={{
            display: "flex",
          }}
          variants={{
            start: {
              y: 20,
              opacity: 0,
              display: "none",
            },
          }}>
          {titles.map((x, i) => (
            <motion.div
              className={x === " " ? "ml-[8px]" : ""}
              key={`${i}`}
              variants={{
                start: { y: 20, opacity: 0, transition: { delay: i * 0.05 } },
              }}>
              {x}
            </motion.div>
          ))}
        </motion.div>

        {rightIcon ? (
          <>
            <motion.div
              variants={{
                start: {
                  scale: 1.2,
                  x: [5, -5, 5, 0],
                  y: [-5, 5, -5, 0],
                },
              }}
              initial={{
                y: 0,
                x: 0,
              }}>
              <img src={rightIcon} alt="rightIcon" />
            </motion.div>
          </>
        ) : null}
      </motion.button>
    </motion.div>
  );
}

export default Button;
