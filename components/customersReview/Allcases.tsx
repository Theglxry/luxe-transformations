import allCases from "../../public/icons/all-cases.svg";
import Image from "next/image";

const Allcases = () => {
  return (
    <div className="w-ful flex flex-col gap-10 md:mt-20  xl:mt-40 md:flex-row">
      <div className="w-full">
        <p className=" lg:text-2xl xl:text-4xl">
          Our process seamlessly guides your project from concept to completion.
          With meticulous planning and attention to detail, we ensure every step
          is executed with precision, delivering exceptional results that exceed
          expectations. Trust us to bring your vision to life with expertise and
          care.
        </p>
      </div>

      <div className="sticky-btn tab-br w-full lg:w-1/2 flex-col-reverse md:order-first">
        <div className="w-full flex items-center justify-start md:justify-center text-black">
          <button className="all-cases hoveer:px-14 flex items-center gap-5 bg-white px-12 py-3 md:px-6 md:py-3 lg:px-12 lg:py-3 rounded-full text-sm xl:text-xl">
           {/* See All Case Studies */}
           <div className="wave text-base uppercase">
                    <span style={{ "--i": 1 } as any}>See</span>
                    {/* <span style={{ "--i": 2 } as any}>e</span> */}
                    {/* <span style={{ "--i": 3 } as any}>e</span> */}

                    <span style={{ "--i": 4 }}>&nbsp;</span>

                    <span style={{ "--i": 5 } as any}>All</span>
                    {/* <span style={{ "--i": 6 } as any}>l</span> */}
                    {/* <span style={{ "--i": 7 } as any}>l</span> */}

                    <span style={{ "--i": 4 }}>&nbsp;</span>

                    <span style={{ "--i": 8 } as any}>Cases</span>
                    {/* <span style={{ "--i": 9 } as any}>a</span> */}
                    {/* <span style={{ "--i": 5 } as any}>s</span> */}
                    {/* <span style={{ "--i": 6 } as any}>e</span> */}

                    <span style={{ "--i": 4 }}>&nbsp;</span>

                    <span style={{ "--i": 7 } as any}>Studies</span>
                    {/* <span style={{ "--i": 8 } as any}>t</span> */}
                    {/* <span style={{ "--i": 9 } as any}>u</span> */}
                    {/* <span style={{ "--i": 7 } as any}>d</span> */}
                    {/* <span style={{ "--i": 8 } as any}>i</span> */}
                    {/* <span style={{ "--i": 9 } as any}>e</span> */}
                    {/* <span style={{ "--i": 7 } as any}>s</span> */}


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
