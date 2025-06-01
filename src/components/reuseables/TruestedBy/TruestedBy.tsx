import React from "react";
import Image from "next/image";
import { trusted_by_logos } from "./data";

import Marquee from "react-fast-marquee";

import styles from "./styles.module.css";

function TruestedBy({ title_color = "#100E10" }: { title_color?: string }) {
  return (
    <div className={styles.main}>
      <h2 className={styles.title} style={{ color: title_color }}>
        COLLABORATED WITH
      </h2>

      <Marquee className="my-[40px]  z-0">
        {trusted_by_logos.map((item, index) => (
          <div key={item.id || `${index}`} className={styles.slide_img_wrapper}>
            <Image src={item.icon} alt="" width={100} height={78} />
          </div>
        ))}
      </Marquee>
      <div className={styles.slide_track_border} />
    </div>
  );
}

export default TruestedBy;
