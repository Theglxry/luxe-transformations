import { serviceProcess } from "@/constants";
import allCases from "../../../public/icons/all-cases.svg";
import Image from "next/image";
import Link from "next/link";

declare module "react" {
  interface CSSProperties {
    "--i"?: string | number;
  }
}

const OurProcess = () => {
  return (
    <section className="w-full mb-28 overflow-x-visible">
      <section className="case-studies">
        <div className="project-wrappper tab-br flex flex-col lg:flex-row justify-between">
          <div className="projects w-full lg:w-3/4">
            <div className="flex ">
              <p>
                From concept <br /> to completion{" "}
              </p>

              <p className="flex flex-col">
                Embark on a journey with us as we turn your vision into reality.
                From the initial concept to the final touches, our meticulous
                process ensures every.
                <span>
                  {" "}
                  detail is carefully considered and executed. With a focus on
                  communication, quality, and timeliness, we guide you through
                  each stage of the project, guaranteeing exceptional results
                  that exceed expectations. Experience the seamless transition
                  from concept to completion with our dedicated team by your
                  side.{" "}
                </span>
              </p>
            </div>

            {serviceProcess.map((process, idx) => (
              <div
                className=" text-black flex items-center justify-between border-b py-4 w-full transition-all duration-300 ease-in-out"
                key={idx}
              >
                <div className="whitespace-nowrap font-normal lg:text-xl">
                  {process.left}
                </div>
                <div className="font-thin ">{process.right}</div>
                <div>
                  <Image src={allCases} alt="" width={30} height={30} />
                </div>
              </div>
            ))}
          </div>




          {/* Container div for the sticky button */}
          <Link
            href="/"
            className="sticky-btn-container tab-br w-full lg:w-[20%] flex-col-reverse lg:order-first"
          >
            <div className="sticky-btn flex justify-center">
              <div className="all-cases w-3/4 lg:w-full xl:w-3/4 items-center justify-center text-white  px-6 py-3 md:px-6 md:py-3 lg:px-10 bg-black rounded-full">
                <div className=" flex items-center justify-center gap-5">
                  <div className="wave text-xs uppercase whitespace-nowrap">
                    <span style={{ "--i": 1 }}>A</span>
                    <span style={{ "--i": 2 }}>l</span>
                    <span style={{ "--i": 3 }}>l</span>
                    <span style={{ "--i": 4 }}>&nbsp;</span>
                    <span style={{ "--i": 5 }}>P</span>
                    <span style={{ "--i": 6 }}>r</span>
                    <span style={{ "--i": 7 }}>o</span>
                    <span style={{ "--i": 8 }}>c</span>
                    <span style={{ "--i": 9 }}>e</span>
                    <span style={{ "--i": 9 }}>s</span>
                    <span style={{ "--i": 9 }}>s</span>
                  </div>

                  <div className="all-cases-arrow flex items-center">
                    <Image
                      src={"/icons/service-white-arr.svg"}
                      alt=""
                      className="arrow-1"
                      width={20}
                      height={20}
                    />
                    <Image
                      src={"/icons/service-white-arr.svg"}
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

export default OurProcess;
