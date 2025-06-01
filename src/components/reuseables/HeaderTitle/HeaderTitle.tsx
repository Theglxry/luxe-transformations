import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function HeaderTitle({
  captionText = "",
  title_top = "",
  title_bottom = "",
  title_bottom2="",
  title_font_size = "100px",
  title_color = "#100E10",
  description = "",
  description_color = "#4E4E4E",
  description_max_width = "700px",
}: {
  captionText?: string;
  title_top?: string;
  title_bottom?: string;
  title_bottom2?:string;
  title_font_size?: "100px" | "56px";
  title_color?: string;
  description?: string;
  description_color?: string;
  description_font_size?: "18px" | "20px";
  description_max_width?: string;
}) {
  let titleClassName = styles.h1_100px;
  if (title_font_size === "100px") titleClassName = styles.h1_100px;
  if (title_font_size === "56px") titleClassName = styles.h1_56px;

  const titleStyle = {
    color: title_color,
  };

  const descriptionStyle = {
    color: description_color,
    paddingTop: title_font_size === "100px" ? "36px" : "16px",
    maxWidth: `clamp(500px, calc(${parseInt(description_max_width)} / 1420 * 100vw), 1300px)`,
  };
  return (
    <div className={styles.main}>
      {captionText ? (
        <p className={styles.titleCaptionText}>{captionText}</p>
      ) : null}
      {title_top ? (
        <motion.h1
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 150 },
          }}
          className={titleClassName}
          style={titleStyle}>
          {title_top}
        </motion.h1>
      ) : null}
      {title_bottom ? (
        <motion.h1
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 150 },
          }}
          className={titleClassName}
          style={titleStyle}>
          {title_bottom}
        </motion.h1>
      ) : null}

      {title_bottom2 ? (
        <motion.h1
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 150 },
          }}
          className={titleClassName}
          style={titleStyle}>
          {title_bottom2}
        </motion.h1>
      ) : null}

      {description ? (
        <motion.p
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 150 },
          }}
          style={descriptionStyle}
          className={styles.description}>
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}

export default HeaderTitle;
