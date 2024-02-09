import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-full border-1 overflow-hidden">



      {/* center nav */} 
      <div className="absolute top-10 sm:top-0 md:top-10 left-40 sm:left-52  md:left-1/2 m-auto text-center md:w-full   flex w-auto items-center md:text-lg tracking-widest text-lg  z-10">

        <div className=" relative cursor-pointer flex items-center justify-center sm:mt-10 md:mt-0 md:gap-8 flex-col gap-2 md:flex-row  text-base md:text-lg">
          <h4 className="relative z-10 px-4 py-2 md:px-0 md:py-1 rounded mb-2 bg-white text-black font-bold md:font-thin md:text-white md:bg-transparent ">
            WE
          </h4>
          <span className="hidden md:flex absolute inset-y-0 left-6 top-2  items-center justify-center w-5 h-5 border-[1px] rounded-full">
            <div className=" w-2 h-2 bg-yellow-600  rounded-full"></div>
          </span>

          {/* slides */}
          <div className="-mt-2 ml-2">
            <h6>PROVIDE COMFORT AND ELEGANCE </h6>
          </div>
        </div>
      </div>






      <section className="relative  px-4  md:w-9/12 mt-32  h-full lg:h-full m-auto z-10">
        {/* parent div */}
        <div className="w-full">
          {/* hero-text */}
          <div className="sm:w-full mt-70 md:mt-0 leading-none lg:leading-[-10rem] z-10  ">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] 2xl:text-[18rem]  -mb-2 lg:-mb-10 font-extrabold">
              <div
                className="flex flex-col md:flex-row  justify-between "
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {/* CREATIVE */}
                LUXE
                <span className="text-yellow-600">WEB</span>
              </div>
            </h1>

            <div className="relative flex flex-col gap-2  md:float-right z-10">
              <h1
                // className=" md:relative text-8xl sm:text-9xl lg:text-[12rem] xl:text-[16rem] font-extrabold"
                className=" md:relative text-6xl sm:text-8xl  xl:text-[8rem] font-extrabold"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                {/* STUDIO */}
                TRANSFORMATIONS
              </h1>

              <div
                className="button w-full sm:w-3/4 md:w-full relative font-thin flex items-center justify-between text-lg px-8 py-4 rounded-md cursor-pointer border-[1px] border-gray-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h4>LATEST PROJECT</h4>
                <div
                  className="w-10 lg:w-16"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <i>
                    <svg
                      viewBox="0 0 56 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="arrow-line"
                        d="M1 6L49.8077 6"
                        stroke="#EEEEF2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        className="arrow-line"
                        d="M1 6L49.8077 6"
                        stroke="#EEEEF2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M49.8086 1L55.0009 6L49.8086 11L49.8086 1Z"
                        stroke="#EEEEF2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </i>
                </div>
                <h4>O POSITIVE</h4>
              </div>
            </div>
          </div>

          {/* blurb cirlce */}
          <div
            className="absolute top-50 sm:top-0  sm:h-[50vw] sm:w-[60vw] z-0 rounded-full bg-gradient-radial from-gray-600 via-transparent to-transparent opacity-100  lg:top-10 sm:left-48 lg:left-0 ml-[-20rem]  "
            style={{ opacity: 0.3 }}
          ></div>

        </div>
      </section>

      {/* pencil */}
      <Link href={"contact"}>
        <div className="bg-yellow-600 absolute  top-[80%] lg:top-[85%] right-2 sm:right-10  rounded-full  z-10 ">
          <svg
            id="pencil"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="handle-a"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2601 16.0778C12.1641 16.1738 12.2321 16.3379 12.3679 16.3379V16.3379C12.4073 16.3379 12.4452 16.3226 12.4736 16.2953L14.9293 13.9292L17.3586 11.4999C17.4027 11.4558 17.4215 11.3924 17.4085 11.3314V11.3314C17.3781 11.1886 17.2015 11.1364 17.0983 11.2396L12.2601 16.0778Z"
              stroke="white"
              stroke-width="2"
            />
            <path
              className="tip-a"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9293 13.9292L12.5735 15.5735L16.5735 11.5735L14.9293 13.9292Z"
              fill="white"
            />
            <path
              className="handle-b"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.4142 29.9237C26.6332 30.7047 26.6332 31.9711 27.4142 32.7521L43.5938 48.9316C43.8613 49.1992 44.1993 49.3854 44.5684 49.4685L50.8933 50.8933L49.4685 44.5685C49.3854 44.1993 49.1992 43.8613 48.9316 43.5938L32.7521 27.4142C31.971 26.6332 30.7047 26.6332 29.9237 27.4142L27.4142 29.9237Z"
              stroke="white"
              stroke-width="2"
            />
            <path
              className="tip-b"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.7919 50.1349L45 49L49 45L49.7919 50.1349Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>
    </main>
  );
}
