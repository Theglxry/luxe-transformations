import allCases from "../../public/icons/all-cases.svg";
import Image from "next/image";



declare module "react" {
  interface CSSProperties {
    "--i"?: string | number;
  }
}



const Allcases = () => {
  return (
    <div className="w-ful flex flex-col gap-10 md:mt-20  xl:mt-40 md:flex-row" data-aos="fade-right">
      <div className="w-full">
        <p className=" lg:text-2xl xl:text-4xl">
          Our process seamlessly guides your project from concept to completion.
          With meticulous planning and attention to detail, we ensure every step
          is executed with precision, delivering exceptional results that exceed
          expectations. Trust us to bring your vision to life with expertise and
          care.
        </p>
      </div>

      <div className="tab-br w-full lg:w-1/2  flex-col-reverse md:order-first" data-aos="fade-right">
        <div className="w-full flex items-center justify-center text-black">
          <button className="all-cases hoveer:px-14 flex items-center gap-5 bg-white px-12 py-3 md:px-6 md:py-3 lg:px-12 lg:py-3 rounded-full text-sm xl:text-xl">
           {/* See All Case Studies */}
           <div className="wave text-base uppercase whitespace-nowrap">
                    <span style={{ "--i": 1 }}>See</span>
                    <span style={{ "--i": 4 }}>&nbsp;</span>
                    <span style={{ "--i": 5 }}>All</span>
                    <span style={{ "--i": 4 }}>&nbsp;</span>
                    <span style={{ "--i": 8 }}>Cases</span>
                    <span style={{ "--i": 4 }}>&nbsp;</span>
                    <span style={{ "--i": 7 }}>Studies</span>
                  </div>

            <div>
              <Image src={allCases} alt="" className="all-cases-arrow" width={20} height={20} />
            </div>
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Allcases;
