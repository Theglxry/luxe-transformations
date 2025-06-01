"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const galleyData = [
  {
    id: 1,
    image: "/images/Gallery_Images/Image1.png",
  },
  {
    id: 2,
    image: "/images/Gallery_Images/Image4.png",
  },
  {
    id: 3,
    image: "/images/Gallery_Images/Image12.png",
  },
  {
    id: 4,
    image: "/images/Gallery_Images/Image2.png",
  },
  {
    id: 5,
    image: "/images/Gallery_Images/Image1.png",
  },
  {
    id: 6,
    image: "/images/Gallery_Images/Image4.png",
  },
  {
    id: 7,
    image: "/images/Gallery_Images/Image1.png",
  },
  {
    id: 8,
    image: "/images/Gallery_Images/Image4.png",
  },
  {
    id: 9,
    image: "/images/Gallery_Images/Image9.png",
  },
  {
    id: 10,
    image: "/images/Gallery_Images/Image5.png",
  },
  {
    id: 11,
    image: "/images/Gallery_Images/Image7.png",
  },
  {
    id: 12,
    image: "/images/Gallery_Images/Image10.png",
  },

  {
    id: 13,
    image: "/images/Gallery_Images/Image9.png",
  },
  {
    id: 14,
    image: "/images/Gallery_Images/Image5.png",
  },
  {
    id: 15,
    image: "/images/Gallery_Images/Image9.png",
  },
  {
    id: 16,
    image: "/images/Gallery_Images/Image5.png",
  },
  {
    id: 17,
    image: "/images/Gallery_Images/Image3.png",
  },
  {
    id: 18,
    image: "/images/Gallery_Images/Image6.png",
  },
  {
    id: 19,
    image: "/images/Gallery_Images/Image8.png",
  },
  {
    id: 20,
    image: "/images/Gallery_Images/Image11.png",
  },
  {
    id: 21,
    image: "/images/Gallery_Images/Image3.png",
  },
  {
    id: 22,
    image: "/images/Gallery_Images/Image6.png",
  },
  {
    id: 23,
    image: "/images/Gallery_Images/Image3.png",
  },
  {
    id: 24,
    image: "/images/Gallery_Images/Image6.png",
  },
];

const GalleyImageCard = ({ activeTab }: { activeTab?: string }) => {
  console.log({ activeTab });
  return (
    <>
      <div className="md:columns-3 sm:columns-2 gap-4 space-y-4 mx-auto">
        {galleyData?.map((item, index) => (
          <motion.div
            key={index}
            className="break-inside-avoid w-full"
            whileHover={{
              scale: 1.05,
            }}>
            <Zoom>
              <motion.img
                whileInView="visible"
                initial="hidden"
                viewport={{ once: false }}
                transition={{
                  delay: 0,
                  duration: 10,
                  // type: "spring",
                  damping: 7,
                  stiffness: 30,
                  restDelta: 0.001,
                  type: "spring",
                  bounce: 22,
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
                }}
                src={item?.image}
                alt="image_testimonial"
                className="mx-auto md:mx-0"
              />
            </Zoom>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default GalleyImageCard;
