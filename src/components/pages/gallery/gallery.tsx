"use client";
import React, { useState } from "react";
import Footer from "@/components/layout/footer/Footer";
import NavBar from "@/components/layout/navbar/Navbar";
import MakeInquiry from "@/components/reuseables/MakeInquiry/MakeInquiry";

import GalleyImageCard from "./galleyImageCard";
import BorderedPageWrapper from "@/components/layout/wrappers/BorderedPageWrapper/BorderedPageWrapper";
import { motion } from "framer-motion";
import PageTab from "@/components/reuseables/PageTab/PageTab";

const tabs = [
  { id: "Residential", title: "Residential" },
  { id: "Commercial", title: "Commercial" },
];

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id);
  return (
    <>
      <BorderedPageWrapper>
        <div className="bg-[#0F0F0F]">
          <div className="bg-[#0F0F0F] lg:rounded-t-2xl px-padding-vertical-screen">
            <NavBar dark={true} />
          </div>

          <div className="text-center mt-10 ">
            <motion.h1
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 150 },
              }}
              className="  text-[#ffffff] font-floral-serif text-[clamp(50px,calc(100/1420*100vw),500px)]">
              GALLERY
            </motion.h1>
            <motion.p
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 150 },
              }}
              className="px-[20px]   text-[#a9a9a9]  text-[clamp(14px,calc(20/1420*100vw),50px)] lg:w-1/2 md:mx-auto ">
              Explore Our Portfolio of Success Through Stunning Visuals,
              Witnessing the Transformative Power of Our Services Firsthand.
            </motion.p>
          </div>

          <div className={"px-[calc(60/1420*100vw)] bg-[#0e0e0e]"}>
            <PageTab
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          <div className="mt-[40px] md:mt-20 px-padding-vertical-screen">
            <GalleyImageCard activeTab={activeTab} />
          </div>

          <div className="mt-20 px-padding-vertical-screen">
            <MakeInquiry />
          </div>

          <div className="mt-14">
            <Footer />
          </div>
        </div>
      </BorderedPageWrapper>
    </>
  );
};

export default GalleryPage;
