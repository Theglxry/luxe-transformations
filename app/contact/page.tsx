"use client";

import {
  helpSelect,
  stepOne,
  stepTwo,
  stepThree,
  contactForm,
} from "@/constants";
import { RedButton } from "@/components/RedButton";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const page = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const totalSteps = 5;

  const progressWidth = ((activeStep - 1) / (totalSteps - 1)) * 100;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleBackButtonClick = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
      setSelectedOptions([]);
    }
  };

  return (
    <section className="relative w-full h-full  md:px-4">
      <form className="w-full h-full py-5 xl:py-10 xl:px-40 flex flex-col items-center justify-between">
        <div className="flex  flex-wrap  items-center gap-5">
          {selectedOptions.map((option, index) => (
            <button
              key={index}
              className="thin flex items-center gap-2 text-lg btn-bg px-6 py-3 text-white rounded-full relative"
              data-aos="fade-up-right"
            >
              {option}
            </button>
          ))}
        </div>

        <section className="w-full ">
          {/* FORM ONE */}
          {activeStep === 1 && (
            <div className="flex flex-col gap-10 text-center">
              <h1 className="text-5xl xl:text-7xl" data-aos="fade-up-right">HOW CAN WE HELP? </h1>
              {/* OPTIONS */}
              <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center" data-aos="fade-left">
                {helpSelect.map((item, index) => (
                  <div key={item.id} className="mb-4 relative">
                    <button
                      className="thin flex  items-center gap-2 text-lg xl:text-3xl btn-bg px-12 py-3 xl:py-6 text-white rounded-full relative"
                      onClick={() => {
                        handleStepChange(2);
                      }}
                    >
                      {index === 0 && (
                        <span>
                          <RedButton />
                        </span>
                      )}
                      {item.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FORM TWO */}
          {activeStep === 2 && (
            <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
              <h1 className="text-5xl xl:text-7xl"> WHAT TYPE OF PROJECT? </h1>
              {/* OPTIONS */}
              <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center" >
                {stepOne.map((item, index) => (
                  <div key={item.id} className="mb-4 relative">
                    <button
                      className="thin flex items-center gap-2 text-lg xl:text-3xl btn-bg px-12 py-3 xl:py-6 text-white rounded-full relative"
                      onClick={() => {
                        handleStepChange(3);
                        handleOptionSelect(item.label);
                      }}
                    >
                      <span>
                        <RedButton />
                      </span>
                      {item.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FORM THREE */}
          {activeStep === 3 && (
            <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
              <h1 className="text-5xl xl:text-7xl" > BUDGET RANGE </h1>
              {/* OPTIONS */}
              <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
                {stepTwo.map((item, index) => (
                  <div key={item.id} className="mb-4 relative">
                    <button
                      className="thin flex  items-center gap-2 text-lg xl:text-3xl btn-bg px-12 py-3 xl:py-6 text-white rounded-full relative"
                      onClick={() => {
                        handleStepChange(4);
                        handleOptionSelect(item.label);
                      }}
                    >
                      <span>
                        <RedButton />
                      </span>

                      {item.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FORM FOUR */}
          {activeStep === 4 && (
            <div className="flex flex-col gap-10 text-center" data-aos="fade-left">
              <h1 className="text-4xl xl:text-7xl">
                HOW DID YOU HEAR ABOUT US?{" "}
              </h1>
              {/* OPTIONS */}
              <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
                {stepThree.map((item, index) => (
                  <div key={item.id} className="mb-4 relative">
                    <button
                      className="thin flex  items-center gap-2 text-lg xl:text-3xl btn-bg px-12 py-3 xl:py-6 text-white rounded-full relative"
                      onClick={() => {
                        handleStepChange(5);
                        handleOptionSelect(item.label);
                      }}
                    >
                      <span>
                        <RedButton />
                      </span>

                      {item.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>


      {/* FORM FIVE */}
      <section>{activeStep === 5 && <ContactForm />}</section>



        {/* ------------ progress bar --------------- */}
        <div className="progress flex items-center gap-4 sm:gap-10">
          <div className="progress-count ">
            <div>
              <h4>{activeStep < 10 ? `0${activeStep}` : activeStep}</h4>
            </div>
          </div>

          <div className="progress-bar flex items-center">
            <svg width="11" height="9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m10.407 4.5-2.555 4H3.148l-2.555-4 2.555-4h4.704l2.555 4Z"
                fill="#D62E49"
                stroke="#D62E49"
                fillRule="evenodd"
              ></path>
            </svg>

            {/* fill with color red when steps are clicked */}
            <div className="progress-step  h-[2px] bg-gray-300 w-48 sm:w-[30rem]">
              <div
                className="active h-[2px]"
                style={{ width: `${progressWidth}%`, backgroundColor: "red" }}
              ></div>
            </div>

            <svg width="11" height="9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m10.407 4.5-2.555 4H3.148l-2.555-4 2.555-4h4.704l2.555 4Z"
                fill="#1D2145"
                stroke="#EEEEF2"
                fillRule="evenodd"
                className=""
              ></path>
            </svg>
          </div>

          <div
            className="progress-total right text-lg"
            style={{ opacity: 0.3 }}
          >
            {" "}
            <h4>{totalSteps}</h4>
          </div>
        </div>
      </form>





      {/* back button */}
      <div
        className="step-back absolute bottom-20 sm:bottom-10 left-5 sm:left-10 border p-3 sm:p-10 rounded-full"
        data-state="1"
        onClick={handleBackButtonClick}
      >
        <div className=" transform rotate-180">
          <i className="icon"></i>
          <span>
            <Image
              src="/images/svg/arrow-hex-1.svg"
              alt="Arrow icon with hexagon tip"
              className="w-6 h-3  sm:w-[30px] h-[30px]"
              width={30}
              height={30}
            />
          </span>
        </div>
      </div>
    </section>
  );
};
export default page;
