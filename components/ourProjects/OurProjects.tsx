import { caseStudies } from "@/constants";
import arrowLink from "../../public/icons/arrow-link.svg";
import allCases from "../../public/icons/all-cases.svg";
import Image from "next/image";
import Link from "next/link";

declare module "react" {
  interface CSSProperties {
    "--i"?: string | number;
  }
}

const OurProjects = () => {
  return (
    <section className="w-full mb-28 overflow-x-visible">
      <div className="our-project flex flex-col gap-10 items-center  mb-4 md:flex-row md:gap-24 md:mb-32">
        <h1
          className="w-full flex flex-col text-4xl md:text-6xl xl:text-9xl"
          data-aos="fade-right"
        >
          OUR PAST <span>PROJECTS</span>
        </h1>

        <div
          className="content-div w-full flex flex-col gap-2 items-start justify-end"
          style={{ alignSelf: "flex-end" }}
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <p className="font-thin">500+ PROJECTS</p>
          <div className="hidden md:flex w-full h-4 bg-gray-300" />
        </div>
      </div>

      <section className="case-studies">
        <div className="project-wrappper tab-br flex flex-col md:flex-row justify-between border-t-2 md:border-t">
          <div className="projects w-full md:w-3/4">
            {caseStudies.map((cases, idx) => (
              <div
                className="all-cases w-full pt-10 md:pt-0 flex flex-col md:flex-row justify-between"
                key={idx}
              >
                <div className="cases-img w-full p-5 md:pt-10 lg:p-10 md:order-2 ">
                  <Image src={cases.img} alt="" className="w-full h-full" />
                </div>


                <div className="project-details tab-br w-full border-b-2  md:border-b-0 md:border-l md:border-r flex flex-col gap-10 md:justify-between p-5 md:pt-10 lg:p-10 md:order-1">
                 
                  <div className="p-top w-full flex flex-col gap-10 ">
                    <div className="flex justify-between gap-5">
                      <div className="flex gap-5">
                        <h1 className="underlineText relative no-underline text-3xl lg:text-4xl whitespace-nowrap">
                          {cases.title}
                        </h1>


                        <p>
                          <sup className="text-gray-300">'{cases.year}</sup>
                        </p>

                        
                      </div>

                      <div className="project-arrow ">
                        <Image
                          src={arrowLink}
                          alt=""
                          className="w-[20px] lg-w[30px] h-[30px]"
                        />
                      </div>
                    </div>




                    <div>
                      <p className="font-thin  w-4/5 text-xs md:w-full lg:text-base xl:w-2/3">
                        {cases.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-bottom uppercase font-thin text-sm xl:text-base ">
                    {cases.type}
                  </div>
                </div>
              </div>
            ))}
          </div>








          {/* Container div for the sticky button */}
          <Link
            href="/"
            className="sticky-btn-container tab-br w-full pt-10 py-10 md:w-1/4 flex-col-reverse md:order-first border-b-2 md:border-b-0"
          >
            <div className="sticky-btn  flex justify-center md:justify-start">
              <div className="all-cases w-3/4 border items-center justify-center md:justify-start text-black  px-6 py-3 md:px-6 md:py-3 lg:px-10 bg-white rounded-full text-sm">
                <div className=" flex items-center justify-center gap-5">
                  <div className="wave text-base uppercase whitespace-nowrap">
                    <span style={{ "--i": 1 }}>A</span>
                    <span style={{ "--i": 2 }}>l</span>
                    <span style={{ "--i": 3 }}>l</span>
                    <span style={{ "--i": 4 }}>&nbsp;</span>
                    <span style={{ "--i": 5 }}>C</span>
                    <span style={{ "--i": 6 }}>a</span>
                    <span style={{ "--i": 7 }}>s</span>
                    <span style={{ "--i": 8 }}>e</span>
                    <span style={{ "--i": 9 }}>s</span>
                  </div>

                  <div className="all-cases-arrow flex items-center">
                    <Image
                      src={allCases}
                      alt=""
                      className="arrow-1"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={allCases}
                      alt="arrow-2"
                      className="arrow-2"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default OurProjects;
