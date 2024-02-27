"use client";
import ContactUs from "@/components/contactUs/ContactUs";
import Reviews from "@/components/customersReview/Reviews";
import ExquisiteElegance from "@/components/exquisiteElegnace/ExquisiteElegance";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import BrandPerks from "@/components/luxuryBrandPerks/BrandPerks";
import OurJourney from "@/components/ourJourney/OurJourney";
import OurProcess from "@/components/ourProcess/OurProcess";
import OurProjects from "@/components/ourProjects/OurProjects";
import RenovationServices from "@/components/renovationServices/RenovationServices";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/*top center text */}
      <div className="hidden  md:flex absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="relative flex items-center gap-2 z-10 px-4 md:px-0 md:py-1 rounded mb-2  font-thin text-white md:bg-transparent">
          <span className="">WE</span>
          <span className="yellowDot flex items-center justify-center w-5 h-5 border-[1px] rounded-full">
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
          </span>
          <span className="">PROVIDE COMFORT AND ELEGANCE</span>
        </h1>
      </div>

      {/* Hero section */}
      <section className=" px-5 md:px-10">
        <Hero />
      </section>

      <section className=" px-5 md:px-10">
        <RenovationServices />{" "}
      </section>

      <section className="w-full  px-5 md:px-10">
        <BrandPerks />
      </section>

      <section className="w-full  px-5 md:px-10">
        <OurProjects />
      </section>

      <section className="w-full  px-5 md:px-10  bg-white">
        <OurJourney />
      </section>

      <section className="w-full px-5 md:px-10  bg-black">
        <Reviews />
      </section>

      <section className="w-full px-5 md:px-10 bg--black">
        <OurProcess />
      </section>

      <section className="w-full px-5 md:px-10 bg-black">
        <Gallery />
      </section>

      <section className="w-full px-5 md:px-10 bg-black">
        <ExquisiteElegance />
      </section>

      <section className="contact-bg w-full  px-5 md:px-10">
        <ContactUs />
      </section>

      <section className="w-full px-5 md:px-10 bg-black">
        <Footer />
      </section>

      
      {/* pencil */}
     
    </>
  );
}
