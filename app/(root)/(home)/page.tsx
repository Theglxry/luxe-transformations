"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-full border-1 overflow-hidden">
      {/* center nav */}
      <div className="thin hidden  absolute top-10 sm:top-0 md:top-10 left-36 sm:left-[40%]  md:left-1/2 m-auto text-center md:w-full sm:flex w-auto items-center md:text-lg tracking-widest text-lg  z-10">
        <div className=" relative cursor-pointer flex items-center justify-center sm:mt-10 md:mt-0 md:gap-8 flex-col gap-2 md:flex-row  text-base md:text-lg">
          <h4 className="relative z-10 px-4  md:px-0 md:py-1 rounded mb-2 bg-white text-black font-bold md:font-thin md:text-white md:bg-transparent ">
            WE
          </h4>
          <span className="hidden md:flex absolute inset-y-0 left-6 top-2  items-center justify-center w-5 h-5 border-[1px] rounded-full">
            <div className=" w-2 h-2 bg-yellow-600  rounded-full"></div>
          </span>
          {/* <RedButton /> */}

          {/* slides */}
          <div className="-mt-2 ml-2">
            <h6>PROVIDE COMFORT AND ELEGANCE </h6>
          </div>
        </div>
      </div>

      <section className="relative px-4  md:w-9/12 mt-40  h-full lg:h-full m-auto z-10">
        <div className="w-full">
          <div className="sm:w-full mt-70 md:mt-0 leading-none lg:leading-[-10rem] z-10  ">
            <h1 className="bold text-8xl sm:text-9xl lg:text-[12rem] 2xl:text-[18rem]  -mb-2 lg:-mb-10 font-extrabold">
              <div
                className="flex flex-col md:flex-row  justify-between "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                LUXE
                <span className="text-yellow-600">WEB</span>
              </div>
            </h1>

            <div className="relative flex flex-col gap-2  md:float-right z-10">
              <h1
                className="bold md:relative text-6xl sm:text-8xl  xl:text-[8rem] font-extrabold"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                TRANSFORMATIONS
              </h1>

              <div
                className="light button w-full sm:w-3/4 md:w-full relative font-thin flex items-center justify-between text-lg px-8 py-4 rounded-md cursor-pointer border-[1px] border-gray-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h4>LATEST PROJECT</h4>
                <div
                  className="w-10 lg:w-16"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <Image
                    src="/icons/home-arrow.svg"
                    alt="white arrow"
                    width={100}
                    height={100}
                  />
                </div>
                <h4>O POSITIVE</h4>
              </div>
            </div>
          </div>

          {/* blurb shadow background cirlce */}
          <div
            className="absolute top-50 sm:top-0  sm:h-[50vw] sm:w-[60vw] z-0 rounded-full bg-gradient-radial from-gray-600 via-transparent to-transparent opacity-100  lg:top-10 sm:left-48 lg:left-0 ml-[-20rem]  "
            style={{ opacity: 0.3 }}
          ></div>
        </div>
      </section>

      {/* pencil */}
      <Link
        href="/contact"
        className="animated-wrapper absolute top-[80%] lg:top-[85%] right-2 sm:right-10 rounded-full z-10"
      >
        <div className="animated-btn bg-yellow-600 rounded-full">
          <span className="btn-container">
            <Image
              className="pen-1"
              src="/icons/pencil.svg"
              alt="pencil"
              width={100}
              height={100}
            />
            <Image
              className="pen-2"
              src="/icons/pencil.svg"
              alt="pencil"
              width={100}
              height={100}
            />
          </span>
        </div>
      </Link>
    </main>
  );
}

 