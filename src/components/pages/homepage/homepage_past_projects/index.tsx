"use client";
import React, { useRef, useEffect, useState } from "react";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";

import styles from "./styles.module.css";
import Button from "@/components/reuseables/Button/Button";
import arrorw_top_right_white from "@/assets/icons/arrorw_top_right_white.svg";

import { projects } from "./data";
import Image from "next/image";
import { motion } from "framer-motion";

const HomepagePastProjects = () => {
  return (
    <>
      <main className={styles.main}>
        <HeaderTitle
          title_top="OUR PAST"
          title_bottom="PROJECTS"
          title_color="#fff"
          title_font_size="100px"
        />

        <div className={styles.project_count}>
          <div className={styles.project_count_inner}>
            <span>500+ PROJECTS</span>
          </div>
          <motion.div
            className={styles.project_count_line}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            variants={{
              visible: { scaleX: 1, transformOrigin: "left" },
              hidden: { scaleX: 0 },
            }}
          />
        </div>

        <section className={styles.projects_container}>
          <div className={styles.projects_container_left}>
            <div className={styles.sticky_container}>
              <Button
                title="ALL CASES"
                width="229px"
                rightIcon={"/icons/arrorw_top_right_black.svg"}
                navigateTo="/portfolio"
              />
            </div>
          </div>

          <div className={styles.projects}>
            {projects.map((item, index) => {
              return (
                <motion.div
                  key={`${index}`}
                  className={styles.project}
                  whileHover="animate_on_hover">
                  <motion.div
                    className={styles.project_left}
                    initial={{
                      y: "30%",
                    }}
                    viewport={{ once: true }}
                    whileInView={{
                      y: 0,
                      transition: { duration: 0.5 },
                    }}>
                    <div className={styles.project_left_title}>
                      {item?.title && item?.title_2 ? (
                        <div>
                          <h3>
                            {item?.title}
                            <span>{item?.quote}</span>
                          </h3>
                          {item?.title_2 ? <h4>{item?.title_2}</h4> : null}
                        </div>
                      ) : (
                        <h4>
                          {item?.title}
                          <span>{item?.quote}</span>
                        </h4>
                      )}

                      <motion.div
                        variants={{
                          animate_on_hover: {
                            x: "-10px",
                            y: "10px",
                          },
                        }}>
                        <Image
                          src={arrorw_top_right_white}
                          alt="arrorw_top_right_white"
                          className={styles.project_left_title_icon}
                        />
                      </motion.div>
                    </div>
                    <p>{item?.description}</p>
                    <small>{item?.category}</small>
                  </motion.div>
                  <div className={styles.project_divider}></div>

                  <motion.div
                    viewport={{ once: true }}
                    initial={{
                      y: "30%",
                    }}
                    whileInView={{
                      y: 0,
                      transition: { duration: 0.5 },
                    }}
                    // initial={{ scale: 0 }}
                    // whileInView={{
                    //   transition: { scale: 1 },
                    // }}
                    className={styles.project_right}>
                    <img
                      src={item?.image}
                      alt="image_right"
                      className={styles.project_right_image}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomepagePastProjects;
