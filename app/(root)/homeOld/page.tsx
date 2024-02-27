"use client";
// import Hero from "@/components/hero/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-full border-2 border-red-500">
      {/* center nav */}
      <div className="regular hidden  absolute top-10 sm:top-0 md:top-10 left-36 sm:left-[40%]  md:left-1/2 m-auto text-center md:w-full sm:flex w-auto items-center md:text-lg tracking-widest text-lg  z-10">
        <div className=" relative cursor-pointer flex items-center justify-center sm:mt-10 md:mt-0 md:gap-8 flex-col gap-2 md:flex-row  text-base md:text-lg">
          <h4 className="relative z-10 px-4  md:px-0 md:py-1 rounded mb-2 bg-white text-black font-bold md:font-thin md:text-white md:bg-transparent ">
            WE
          </h4>
          <span className="hidden md:flex absolute inset-y-0 left-6 top-2  items-center justify-center w-5 h-5 border-[1px] rounded-full">
            <div className=" w-2 h-2 bg-yellow-600  rounded-full"></div>
          </span>

          <div className="-mt-2 ml-2">
            <h6>PROVIDE COMFORT AND ELEGANCE </h6>
          </div>
        </div>
      </div>

      {/* <Hero /> */}

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
