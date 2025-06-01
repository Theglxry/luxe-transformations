"use client";
import React from "react";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";

import styles from "./styles.module.css";


const TestimonialsPageHeaderTitle = ({
  title_color = "#ffffff",
  description_color = "#ffffff",
}: {
  title_color?: string;
  description_color?: string;
}) => {
  return (
    <>
      <main className={styles.main}>
        <HeaderTitle
          title_top="TESTIMONIALS"
          description="Hear From Our Satisfied Clients, Sharing Their Experiences and Affirming Our Commitment to Excellence"
          // description_max_width="648px"
          description_color={description_color}
          title_color={title_color}
          title_font_size="56px"
        />

       
      </main>
    </>
  );
};

export default TestimonialsPageHeaderTitle;
