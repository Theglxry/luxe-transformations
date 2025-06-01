"use client";

import NavBar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

import BorderedPageWrapper from "@/components/layout/wrappers/BorderedPageWrapper/BorderedPageWrapper";

import MakeInquiry from "@/components/reuseables/MakeInquiry/MakeInquiry";

import styles from "./styles.module.css";
import HeroSection from "./heroSection";
import MainSection from "./mainSection";
// import MainSection from "./mainSection";

const Homepage = () => {
  return (
    <>
      <BorderedPageWrapper>
        <div className={styles.home_container}>
          <NavBar dark={true} />
          <HeroSection />
          <MainSection />
          <MakeInquiry />
          <Footer />
        </div>
      </BorderedPageWrapper>
    </>
  );
};

export default Homepage;
