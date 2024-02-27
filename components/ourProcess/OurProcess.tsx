import { ourProcess } from "@/constants";

const OurProcess = () => {

  return (
    <div className="our-process-container w-full mb-28">
      <h1 className="text-xl md:text-5xl font-semibold mb-10 ">
        Our Process
      </h1>

      <div className="button-wrapper w-full flex  flex-col xl:flex-row items-center md:gap-10 justify-start xl:justify-end ">
        {ourProcess.map((btn) => (
          <div key={btn.id} className="flex flex-col  sm:gap-5 md:flex-row">

            {/*-------------- staircase buttons -----------*/}
            <div className="flex w-full gap-5">
              <div className="w-full flex flex-col">
                {btn.items.slice(0, 4).map((item, index) => (
                  <div
                    className="tab-br flex items-center justify-between py-[0.5px] w-full"
                    key={index}
                  >
                    <div
                      className="bg-white text-black  py-1 pr-2 md:py-2 pl-2 min-w[250px] md:min-w-[300px] rounded-full flex items-center gap-2 md:gap-5"
                      style={{ marginLeft: `${index * 80}px` }}

                    >
                      <div className="tab-bg py px-2 text-white md:text-lg rounded-full">
                        {item.id}
                      </div>
                      <button className="label text-[10px] sm:text-sm lg:text-base xl:text-base whitespace-nowrap">
                        {item.label}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
