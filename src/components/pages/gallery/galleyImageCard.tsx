"use client";
import React, { Fragment } from "react";

import { galleyData } from "./data";

import { motion } from "framer-motion";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const GalleyImageCard = ({ activeTab }: { activeTab?: string }) => {
  console.log({ activeTab });
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] xl:gap-[24px]">
        {galleyData[activeTab]?.map((item, index) => (
          <Fragment key={index}>
            <Zoom>
              <motion.div
                className="w-full bg-gray-800 h-[400px] sm:h-[400px] md:h-[500px] lg:h-[clamp(300px,calc(500/1420*100vw),1000px)] rounded-[8px] overflow-hidden"
                viewport={{ once: true }}
                whileInView="visible"
                initial="hidden"
                transition={{
                  delay: 0,
                  duration: 0.5,
                  bounce: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                  hidden: {
                    opacity: 0,
                    y: 150,
                  },
                }}>
                <motion.img
                  initial={{
                    scale: 1.05,
                  }}
                  whileHover={{
                    scale: 1,
                  }}
                  transition={{ duration: 1 }}
                  src={item?.image}
                  alt="image_testimonial"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </Zoom>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default GalleyImageCard;
