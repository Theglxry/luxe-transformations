"use client";
import Footer from "@/components/layout/footer/Footer";
import NavBar from "@/components/layout/navbar/Navbar";
import TestimonialCard from "./testimonialCard";
import MakeInquiry from "@/components/reuseables/MakeInquiry/MakeInquiry";
import BorderedPageWrapper from "@/components/layout/wrappers/BorderedPageWrapper/BorderedPageWrapper";
import TestimonialsPageHeaderTitle from "@/components/reuseables/TestimonialsPageHeaderTitle/TestimonialsPageHeaderTitle";

const TestimonialPage = () => {
  return (
    <>
      <BorderedPageWrapper>
        <div className="bg-[#0F0F0F] ">
          <div className="lg:px-20 px-4 ">
            <NavBar dark={true} />
          </div>

          <div className="bg-[#0F0F0F] py-14  px-[calc(60/1420*100vw)] ">
            <div className="text-center">
              <TestimonialsPageHeaderTitle />
            </div>

            <hr className="h-1 w-full mx-auto md:mt-2" />

            <div className="md:pt-28 pt-14">
              <TestimonialCard />
            </div>

            <div className="mt-20">
              <MakeInquiry />
            </div>
          </div>

          <div className="mt-14 lg:rounded-b-[20px]">
            <Footer />
          </div>
        </div>
      </BorderedPageWrapper>
    </>
  );
};

export default TestimonialPage;
