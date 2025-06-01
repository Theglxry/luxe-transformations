import Image from "next/image";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import React from "react";
import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";

const default_top = [
  "/images/services/1.jpeg",
  "/images/services/2.jpeg",
  "/images/services/3.jpeg",
  "/images/services/4.jpeg",
];

const defaul_bottom = [
  "/images/services/5.jpeg",
  "/images/services/6.jpeg",
  "/images/services/7.jpeg",
  "/images/services/8.jpeg",
];

const Recentwork = ({
  recent_works_top = [],
  recent_works_bottom = [],
}: {
  recent_works_top?: string[];
  recent_works_bottom?: string[];
}) => {
  return (
    <div className={styles.home_container}>
      <div className="px-padding-vertical-screen">
        <HeaderTitle
          title_color="#100E10"
          title_top="RECENT WORKS"
          title_font_size="56px"
          description="Recent projects reflecting our commitment to high-quality craftsmanship and exceptional results."
          description_color="#4E4E4E"
        />
      </div>

      <Marquee className={styles.images_top}>
        {[
          ...(recent_works_top?.length && typeof recent_works_top === "object"
            ? recent_works_top
            : default_top),
        ].map((item, index) => {
          return (
            <div key={`${index}`} className={styles.image}>
              <img src={item} />
            </div>
          );
        })}
      </Marquee>

      <Marquee className={styles.images_bottom} direction="right">
        {[
          ...(recent_works_bottom?.length &&
          typeof recent_works_bottom === "object"
            ? recent_works_bottom
            : defaul_bottom),
        ].map((item, index) => {
          return (
            <div key={`${index}`} className={styles.image}>
              <img src={item} />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Recentwork;
