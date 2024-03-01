"use client";
import ContactUs from "@/components/contactUs/ContactUs";
import ReviwsSlide from "@/components/customersReview/ReviewsSlide";
import ExquisiteElegance from "@/components/exquisiteElegnace/ExquisiteElegance";
import Footer from "@/components/footer/Footer";
import OurAdvantages from "@/components/servicePage/advantages/OurAdvantages";
import ServiceHero from "@/components/servicePage/Hero/ServiceHero";
import OurProcess from "@/components/servicePage/ourProcess/OurProcess";
import OurSolution from "@/components/servicePage/ourSolution/OurSolution";
import Recentwork from "@/components/servicePage/Recentwork/Recentwork";
import React from "react";

const page = () => {
  return (
    <>
      {/*top center text */}
      <div className="hidden  md:flex absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="relative flex items-center gap-2 z-10 px-4 md:px-0 md:py-1 rounded mb-2  font-thin text-black md:bg-transparent">
          <span className="">WE</span>
          <span className="yellowDot flex items-center justify-center w-5 h-5 border-[1px] border-black rounded-full">
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
          </span>
          <span className="">PROVIDE COMFORT AND ELEGANCE</span>
        </h1>
      </div>

      <section className="text-black px-5 md:px-10">
        <ServiceHero />
      </section>

      <section className="w-full  md:px-10  bg-white ">
        <OurSolution />
      </section>

      <section className="w-full px-5 md:px-10 text-black  bg-white">
        <Recentwork />
      </section>

      <section className="w-full px-5 md:px-10 text-black  bg-white">
        <OurProcess />
      </section>

      <section className="w-full px-5 md:px-10 text-black  bg-white">
        <OurAdvantages />
      </section>

      <section className="floral-reg w-full px-5 md:px-10 text-black  bg-white">
        <section className="w-full flex flex-col gap-10 mb-10 md:pb-28 xl:px-16">
          <div className="w-full flex flex-col gap-10">
            <div>
              <h1 className="text-2xl md:text-5xl font-semibold">
                Hear What <br /> Others Are Saying
              </h1>
            </div>
            <ReviwsSlide />
          </div>
        </section>
      </section>

      <section className="contact-bg w-full">
        <ContactUs />
      </section>

      <section className="text-black w-full px-5 md:px-10 xl:px-16">
        <ExquisiteElegance />
      </section>

      <footer className="w-full px-5 pt-20 md:px-10 bg-black">
        <Footer />
      </footer>
    </>
  );
};

export default page;
