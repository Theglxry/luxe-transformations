"use client";

import React from "react";
import BorderedPageWrapper from "@/components/layout/wrappers/BorderedPageWrapper/BorderedPageWrapper";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import HeaderThreeImages from "@/components/reuseables/HeaderThreeImages/HeaderThreeImages";
import TruestedBy from "@/components/reuseables/TruestedBy/TruestedBy";

import WorkingBenefits from "@/components/pages/services/workingBenefits";
import OurProcess from "@/components/pages/services/OurProcess";
import CaseStudies from "@/components/pages/services/CaseStudies/caseStudies";
import Recentwork from "@/components/pages/services/Recentwork/Recentwork";
import OurSolution from "@/components/pages/services/OurSolution";
import MakeInquiry from "@/components/reuseables/MakeInquiry/MakeInquiry";

import Testimonials from "@/components/reuseables/Testimonials/Testimonials";
import FaqSection from "./Faq";




import { pages_data } from "@/data/pages_data";

function ServicePage({ page_id }: { page_id?: string }) {
  const found_page = pages_data.find(
    (page) => `/services/${page_id}` === page?.link
  );



  
  return (
    <BorderedPageWrapper light_bg>
      <div className="px-padding-vertical-screen overflow-x-hidden relative">
        <Navbar dark={false} />
        <div
          className="py-[60px] pt-[50px]
          sm:pt-[80px] 
          3xl:pt-[100px]">
          <HeaderTitle
            title_color="#100E10"
            title_top={`${found_page?.content?.header_title_1}`.toUpperCase()}
            title_bottom={`${found_page?.content?.header_title_2}`.toUpperCase()}
            title_bottom2={`${found_page?.content?.header_title_3}`.toUpperCase()}
            description={found_page?.content?.header_description}
            description_color="#4E4E4E"
          />

          <HeaderThreeImages
            image_1={found_page?.content?.header_image_1}
            image_2={found_page?.content?.header_image_2}
            image_3={found_page?.content?.header_image_3}
          />
        </div>
        <TruestedBy title_color="#100E10" />

        <OurSolution
          solution_text_1={found_page?.content?.solution_text_1}
          solution_text_2={found_page?.content?.solution_text_2}
        />
      </div>

      <Recentwork
        recent_works_top={found_page?.content?.recent_works_top || undefined}
        recent_works_bottom={
          found_page?.content?.recent_works_bottom || undefined
        }
      />

      <section className="w-full text-black  bg-white overflow-x-hidden">
        <CaseStudies
          caption_text={found_page?.content?.caseStudy?.caption_text}
          title_top={found_page?.content?.caseStudy?.title_top}
          description={found_page?.content?.caseStudy?.description}
          data={found_page?.content?.caseStudy?.data}
        />
      </section>

      <div className="px-padding-vertical-screen">
        <Testimonials
          title_color="#100E10"
          description="Recent projects reflecting our commitment to high-quality craftsmanship and exceptional results."
          description_color="#4E4E4E"
        />

        <WorkingBenefits />
      </div>

      <section className="w-full  text-white  bg-[#0F0F0F]">
        <OurProcess />
      </section>

      <div className="bg-[#0F0F0F] w-full  text-white">
        <FaqSection />
      </div>

      <section className="bg-[#0F0F0F] px-padding-vertical-screen text-white w-full">
        <MakeInquiry />
      </section>

      {/* <section className="text-black w-full px-5 md:px-10 xl:px-16">
        <ExquisiteElegance />
      </section> */}

      <footer className="w-full px-5 pt-20 md:px-10 bg-[#0F0F0F] ">
        <Footer />
      </footer>
    </BorderedPageWrapper>
  );
}

export default ServicePage;
