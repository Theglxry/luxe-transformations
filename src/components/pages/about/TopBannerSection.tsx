import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";
import play_icon from "@/assets/icons/play.svg";
import AnimatedCountup from "@/components/reuseables/AnimatedCountup";
import { motion } from "framer-motion";

const TopBannerSection = () => {
  const staticsData = [
    {
      id: "1",
      image: "/images/about/cubeIcon.svg",
      title: "Completed projects",
      percentage: 200,
      prepend: "+",
      duration: 5,
    },
    {
      id: "2",
      image: "/images/about/cubeIcon.svg",
      title: "Client Satisfaction Rate",
      percentage: 95,
      prepend: "%",
      duration: 5,
    },
    {
      id: "3",
      image: "/images/about/cubeIcon.svg",
      title: "Client Retention Rate",
      percentage: 80,
      prepend: "%",
      duration: 5,
    },
    {
      id: "4",
      image: "/images/about/cubeIcon.svg",
      title: "Years of Unparalleled Expertise",
      percentage: 10,
      prepend: "+",
      duration: 3,
    },
  ];

  return (
    <>
      <div className="text-[#fff] pb-[50px]">
        <div className="grid md:grid-cols-2  md:mt-24 mt-20 justify-between items-center md:gap-14 gap-5">
          <div>
            <motion.h3
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 150 },
              }}
              className="text-[21px] text-[#DDAE31]">
              About us
            </motion.h3>
            <motion.h2
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 150 },
              }}
              className="text-[clamp(40px,calc(50/1420*100vw),80px)] font-floral-serif mt-2 leading-[1.2] sm:leading-[1.4]">
              Our mission is to redefine luxury living through meticulous
              craftmanship
            </motion.h2>
          </div>
          <div>
            <motion.p
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 150 },
              }}
              className=" text-[clamp(16px,calc(18/1420*100vw),30px)]  text-justify leading-2 text-[#a9a9a9]">
              Luxe Transformations is dedicated to transforming dreams into
              breathtaking realities through unparalleled craftsmanship and
              innovative design. Our mission is to elevate living spaces to new
              heights, offering exquisite construction and refurbishment
              services that redefine luxury.
            </motion.p>
          </div>
        </div>
        {/* banner image section*/}

        <div className="md:mt-14 mt-10">
          <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.5 },
            }}
            className={styles.testimonial}>
            <div className={styles.testimonial_play_overflow}>
              <button className={styles.testimonial_play}>
                <Image
                  src={play_icon}
                  alt="play_icon"
                  className={"object-contain w-full h-full"}
                />
              </button>
            </div>
            <motion.img
              src={"/images/about/AboutUsBanner.svg"}
              alt="image_testimonial"
              className={styles.testimonial_img}
            />
          </motion.div>
        </div>
        {/* banner image section end here*/}

        {/* stattics section  */}
        <div className="md:mt-28 mt-14">
          <div className="text-center">
            <motion.h2
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 150 },
              }}
              className="text-[clamp(36px,calc(36/1420*100vw),66px)] font-floral-serif">
              NUMBERS THAT DEFINE US
            </motion.h2>

            <motion.p
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 150 },
              }}
              className="mt-1  text-[clamp(18px,calc(20/1420*100vw),36px)]  leading-2 text-[#a9a9a9]">
              our success is defined by the numbers that reflect our commitment
              to excellence
              <br /> and the satisfaction of our clients
            </motion.p>
          </div>

          <div className="py-14">
            <div className="md:divide-x grid md:grid-cols-4 md:justify-center items-center w-full border border-[#2a2a2a] rounded-[24px] md:py-8 py-6">
              {staticsData.map((statistic, indx) => (
                <div
                  key={statistic.id || `${indx}`}
                  className={` border-[#FFFFFF26] flex flex-col items-center  md:justify-center md:${
                    statistic.id === "1" ? "" : "border-l "
                  }`}>
                  {statistic.id !== "1" && (
                    <p className="md:hidden block border-b border-[#FFFFFF26] w-full my-6"></p>
                  )}

                  <img
                    src={statistic.image}
                    alt={statistic.image}
                    className="w-14 h-14 mb-4"
                  />
                  <h3 className="text-[clamp(14px,calc(16/1420*100vw),32px)] font-semibold text-center text-[#a9a9a9]">
                    {statistic.title}
                  </h3>
                  <p className="text-[clamp(24px,calc(30/1420*100vw),60px)] text-center">
                    <AnimatedCountup
                      duration={statistic.duration}
                      maxNumber={Math.floor(statistic.percentage)}
                    />
                    {statistic.prepend}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* stattics section end here  */}
      </div>
    </>
  );
};

export default TopBannerSection;
