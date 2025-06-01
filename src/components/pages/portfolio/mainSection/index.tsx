"use client";

import Image from "next/image";
import React, { useState } from "react";

import { motion } from "framer-motion";
import styles from "./styles.module.css";

import Button from "@/components/reuseables/Button/Button";
import PageTab from "@/components/reuseables/PageTab/PageTab";

const categories = [
  {
    id: 1,
    img: "/images/PortfolioImage.jpeg",
    title: "Retail Space Renovations",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 2,
    img: "/images/PortfolioImage.jpeg",
    title: "Whole Home Renovations",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 3,
    img: "/images/PortfolioImage.jpeg",
    title: "Outdoor Living Space Design",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 4,
    img: "/images/PortfolioImage.jpeg",
    title: "Retail Space Renovations",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 5,
    img: "/images/PortfolioImage.jpeg",
    title: "Whole Home Renovations",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 6,
    img: "/images/PortfolioImage.jpeg",
    title: "Outdoor Living Space Design",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 7,
    img: "/images/PortfolioImage.jpeg",
    title: "Retail Space Renovations",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 8,
    img: "/images/PortfolioImage.jpeg",
    title: "Whole Home Renovations",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 9,
    img: "/images/PortfolioImage.jpeg",
    title: "Outdoor Living Space Design",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },

  {
    id: 10,
    img: "/images/PortfolioImage.jpeg",
    title: "Retail Space Renovations",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 11,
    img: "/images/PortfolioImage.jpeg",
    title: "Whole Home Renovations",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 12,
    img: "/images/PortfolioImage.jpeg",
    title: "Outdoor Living Space Design",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },

  {
    id: 13,
    img: "/images/PortfolioImage.jpeg",
    title: "Retail Space Renovations",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 14,
    img: "/images/PortfolioImage.jpeg",
    title: "Whole Home Renovations",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
  {
    id: 15,
    img: "/images/PortfolioImage.jpeg",
    title: "Outdoor Living Space Design",
    description:
      "Elaborate on how the system scales to handle high traffic and maintains data integrity through redundancy. ",
  },
];

const tabs = [
  { id: "1", title: "All" },
  { id: "2", title: "Residential" },
  { id: "3", title: "Commercial" },
];

function MainSection() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id);

  return (
    <>
      <PageTab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className={styles.section}>
        {categories.map((cat, index) => {
          return (
            <motion.div
              key={`${index}`}
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
              key={`${cat?.id}`}
              className={styles.section_box}>
              <div className={styles.section_box_media}>
                <img src={cat?.img} />
              </div>
              <div>
                <h3>{cat?.title}</h3>
                <p>{cat?.description}</p>
              </div>

              <div className="mt-auto flex justify-end items-center">
                <div className="w-[248px]">
                  <Button
                    title="CHECK FULL CASE"
                    rightIcon={"/icons/arrorw_top_right_black.svg"}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default MainSection;
