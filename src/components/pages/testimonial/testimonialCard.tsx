"use client";
import React from "react";

import { testimonialData } from "./data";
import play_icon from "@/assets/icons/play.svg";

import styles from "./styles.module.css";
import Image from "next/image";

const TestimonialCard = ({
  title_color = "#ffffff",
  description_color = "#ffffff",
}: {
  title_color?: string;
  description_color?: string;
}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[40px] md:gap-y-[30px]">
        {testimonialData?.map((item, idx) => {
          return (
            <div key={item?.id || `${idx}`} className={styles.testimonial}>
              <div className={styles.testimonial_play_overflow}>
                <button key={item?.id} className={styles.testimonial_play}>
                  <Image
                    src={play_icon}
                    alt="play_icon"
                    className={styles.testimonial_play_img}
                  />
                </button>
              </div>

              <Image
                src={item?.image}
                alt="image_testimonial"
                className={styles.testimonial_img}
              />

              <div className="bg-[#0F0F0F] mt-5">
                <h2 className="text-[#fff] md:text-[20px] text-[18px]">
                  {item?.name}
                </h2>
                <p className="text-[#fff] md:text-[16px] text-[15px] mt-1">
                  {item?.company_name}
                </p>
                <p className="text-[#FEC84B] text-[22px] mt-1">
                  {Array.from({ length: item.rating }, (_, index) => (
                    <span key={index} className="mr-1">
                      ★
                    </span>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TestimonialCard;
