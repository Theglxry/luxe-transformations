"use client";

import NavBar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

import BorderedPageWrapper from "@/components/layout/wrappers/BorderedPageWrapper/BorderedPageWrapper";

import MakeInquiry from "@/components/reuseables/MakeInquiry/MakeInquiry";
import Testimonials from "@/components/reuseables/Testimonials/Testimonials";

import MeetTheTeam from "./MeetTeam";
import Together from "./Together";

import TopBannerSection from "./TopBannerSection";

const Homepage = () => {
  return (
    <>
      <BorderedPageWrapper>
        <div className="px-padding-vertical-screen bg-[#0e0e0e]">
          <NavBar />
          {/* PLEASE WORK HERE AboutUs Hero section*/}
          <TopBannerSection />
        </div>
        <div className="px-padding-vertical-screen bg-[#ffffff]">
          <Together />
          <Testimonials
            title_top="OUR VALUES"
            title_color="#100E10"
            description="Our values embody a commitment to transparency, integrity, and the pursuit of excellence, ensuring every luxury renovation we undertake is a testament to our unwavering dedication to quality and client satisfaction."
            description_color="#4E4E4E"
            images={[
              { id: 1, image: "/images/about/our_values_man.png" },
              { id: 2, image: "/images/about/our_values_woman.png" },
              { id: 3, image: "/images/about/our_values_man_2.png" },
            ]}
          />

          {/* <MeetTheTeam /> */}
          <Testimonials title_color="#100E10" description_color="#4E4E4E" />
        </div>
        <div className="px-padding-vertical-screen bg-[#0e0e0e] pt-[100px]">
          <MakeInquiry />
          <Footer />
        </div>
      </BorderedPageWrapper>
    </>
  );
};

export default Homepage;
