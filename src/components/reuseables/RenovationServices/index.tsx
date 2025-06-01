"use client";
import React from "react";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";

import { tabs } from "./data";

import styles from "./styles.module.css";
import ControlTab from "./ControlTab";
import ListItems from "./ListItems";

const RenovationServices = () => {
  const [active, setactive] = React.useState(tabs[0]);

  return (
    <>
      <main className={styles.main}>
        <HeaderTitle
          title_top="RENOVATION SERVICES"
          title_color="#ffffff"
          title_font_size="56px"
        />
        <ControlTab setactive={setactive} active={active} />
        <ListItems active={active} />
      </main>
    </>
  );
};

export default RenovationServices;
