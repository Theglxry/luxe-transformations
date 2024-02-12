"use client";

import {
  // formData,
  helpSelect,
  stepOne,
  stepTwo,
  stepThree,
  contactForm,
} from "@/constants";
import { YellowButton } from "@/components/button/YellowButton";
import { useState } from "react";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import FormOne from "@/components/forms/FormOne";
import FormTwo from "@/components/forms/FormTwo";
import FormThree from "@/components/forms/FormThree";
import FormFour from "@/components/forms/FormFour";

const page = () => {
  // const [activeStep, setActiveStep] = useState(1);

  // const progressWidth = ((activeStep - 1) / (totalSteps - 1)) * 100;

  // const handleStepChange = (step: number) => {
  //   setActiveStep(step);
  // };

  const formTags = ["formOne", "formTwo", "formThree", "formFour", "formFive"];
  const [activeStep, setActiveStep] = useState("formOne");

  //selected options
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  // to store selected optons
  const handleOptionSelect = (option: string) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const totalSteps = 5;

  const progressWidth = (formTags.indexOf(activeStep) / (totalSteps - 1)) * 100;

  // update state
  const handleStepChange = (step: string) => {
    setActiveStep(step);
  };

  // prev button
  const handleBackButtonClick = () => {
    const currentIndex = formTags.indexOf(activeStep);

    // Navigate to the previous form if not at the beginning
    if (currentIndex > 0) {
      setActiveStep(formTags[currentIndex - 1]);
      setSelectedOptions([]); // Reset selected options if needed
    }
  };

  return (
    <section className="bg-black relative rounded-3xl w-full h-full  md:px-4 z-0">
      <section className="w-full h-full py-5 xl:py-10 xl:px-40 flex flex-col items-center justify-between">
        {/* selected options */}
        <div className="flex flex-wrap  items-center gap-5">
          {selectedOptions.map((option, index) => (
            <button
              type="button"
              key={index}
              className="contact-bg  thin flex items-center gap-2 text-lg  px-6 py-3 text-white rounded-full relative z-50"
              data-aos="fade-up-right"
            >
              {option}
            </button>
          ))}
        </div>

        <section className="w-full ">
          {/* FORM ONE = DEFALUT DISPLAY */}
          {activeStep === "formOne" && (
            <FormOne
              helpSelect={helpSelect}
              handleStepChange={handleStepChange}
            />
          )}

          {/* FORM TWO = STEP ONE */}
          {activeStep === "formTwo" && (
            <FormTwo
              stepOne={stepOne}
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}

          {/* FORM THREE = STEP TWO */}
          {activeStep === "formThree" && (
            <FormThree
              stepTwo={stepTwo}
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}

          {/* FORM FOUR = STEP THREE */}
          {activeStep === "formFour" && (
            <FormFour
              stepThree={stepThree}
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}
        </section>

        {/* FORM FIVE = STEP FOUR */}
        <section>{activeStep === "formFive" && <ContactForm />}</section>

        {/* ------------ progress bar --------------- */}
        <div className="italic flex items-center gap-4 sm:gap-10">
          <div className="progress-count ">
            <div>
              <h4>
                {/* {parseInt(activeStep) < 10 ? `0${activeStep}` : activeStep} */}
                {formTags.indexOf(activeStep) + 1 < 10
                  ? `0${formTags.indexOf(activeStep) + 1}`
                  : formTags.indexOf(activeStep) + 1}
              </h4>
            </div>
          </div>

          <div className="progress-bar flex items-center">
            <svg width="11" height="9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m10.407 4.5-2.555 4H3.148l-2.555-4 2.555-4h4.704l2.555 4Z"
                fill="gold"
                stroke="gold"
                fillRule="evenodd"
              ></path>
            </svg>

            {/* fill with color red when steps are clicked */}
            <div className="progress-step  h-[2px] bg-gray-300 w-48 sm:w-[30rem]">
              <div
                className="active h-[2px]"
                style={{ width: `${progressWidth}%`, backgroundColor: "gold" }}
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

          <div className="progress-total text-lg" style={{ opacity: 0.3 }}>
            {" "}
            <h4>{totalSteps}</h4>
          </div>
        </div>
      </section>

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
              src="/icons/arrow-hex-1.svg"
              alt="Arrow icon with hexagon tip"
              className="w-6 h-3  sm:w-[30px] sm:h-[30px]"
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
