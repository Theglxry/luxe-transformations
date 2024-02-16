"use client";
import {
  setActiveStep,
  setSelectedOptions,
} from "@/libs/state/features/FormSlice";
import { helpSelect } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/state/store";
import Image from "next/image";
import {
  FormOne,
  FormTwo,
  Commercial,
  Residential,
  ResidentialFormOne,
  ResidentialFormTwo,

  EnSuitForm,

  CommercialFormOne,
  CommercialFormTwo,
  CommercialFormThree,
  CommercialFormFour,
  CommercialFormFive,
  CommercialFormSix,
 

  CheckPointFormOne,
  CheckPointFormTwo,
  CheckPointFormThree,
  CheckPointFormFour,
  CheckPointFormFive,
  CheckPointFormSix,
  CheckPointFormSeven,
  ContactForm,
} from "@/components/forms";

const page = () => {
  //-------- using REDUX to manage state ------------
  // Define types for activeStep and selectedOptions
  const dispatch = useDispatch();
  const activeStep = useSelector(
    (state: RootState) => state.formReducer.activeStep
  );
  const selectedOptions = useSelector(
    (state: RootState) => state.formReducer.selectedOptions
  );
  const formTags = [
    "formOne",
    "formTwo",
    "formThree",


    "formFour",
    "formFive",
    "formSix",
    "formSeven",


    "formEight",
    "formNine",
    "formTen",
    "form11",
    "form12",
    "form13",

    "checkPointFormOne",
    "checkPointFormThree",
    "checkPointFormFour",
    "checkPointFormFive",
    "checkPointFormSix",
    "checkPointFormSeven",

    "lastForm",
  ];

  const handleOptionSelect = (option: string) => {
    dispatch(setSelectedOptions([...selectedOptions, option]));
  };

  const handleStepChange = (step: string) => {
    dispatch(setActiveStep(step));
  };


  //-------------progress bar------------
  const totalSteps = 5;
  const progressWidth = (formTags.indexOf(activeStep) / (totalSteps - 1)) * 100;





  //----------------- prev button -------------
  const handleBackButtonClick = () => {
    const currentIndex = formTags.indexOf(activeStep);
  
    // Navigate to the previous form if not at the beginning
    if (currentIndex > 0) {
      const prevStep = formTags[currentIndex - 1];
      dispatch(setActiveStep(prevStep));
  

      // Remove the last selected option
      const updatedOptions = [...selectedOptions];
      updatedOptions.pop(); 
      dispatch(setSelectedOptions(updatedOptions));
    }
  

    console.log(currentIndex);
  };
  

  return (
    <section className="bg-black relative  overflow-hidden rounded-3xl w-full h-full  md:px-4 z-0">
      <section className="w-full h-full  pt-32  sm:pt-10 xl:px-40 flex flex-col items-center justify-between">
        {/* selected options */}
        <div className="flex overflow-x-hidden sm:flex-wrap items-center  gap-5">
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
          {activeStep === "formOne" && ( <FormOne helpSelect={helpSelect} handleStepChange={handleStepChange}/> )}
          {activeStep === "formTwo" && (<FormTwo handleStepChange={handleStepChange} handleOptionSelect={handleOptionSelect} /> )}
          {activeStep === "formThree" && (<Commercial handleStepChange={handleStepChange} handleOptionSelect={handleOptionSelect} /> )}
          {/*------------------------------------- residential forms ------------------ */}
          {activeStep === "formFour" && (<Residential handleStepChange={handleStepChange} handleOptionSelect={handleOptionSelect}/>)}
          {activeStep === "formFive" && (<ResidentialFormOne handleStepChange={handleStepChange} handleOptionSelect={handleOptionSelect} /> )}

          {activeStep === "formSix" && ( <ResidentialFormTwo handleStepChange={handleStepChange} handleOptionSelect={handleOptionSelect} />)}
          {activeStep === "formSeven" && (<EnSuitForm handleStepChange={handleStepChange} handleOptionSelect={handleOptionSelect}/> )}

          {/*---------------------- commercial forms ------------------ */}
          {activeStep === "formEight" && (<CommercialFormOne handleStepChange={handleStepChange} handleOptionSelect={handleOptionSelect} /> )}
          {activeStep === "formNine" && ( <CommercialFormTwo handleStepChange={handleStepChange} handleOptionSelect={handleOptionSelect} />)}
          {activeStep === "formTen" && ( <CommercialFormThree handleStepChange={handleStepChange} handleOptionSelect={handleOptionSelect}/>)}
          {/* How may Sq ft is? */}
          {activeStep === "form11" && (
            <CommercialFormFour
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}
          {activeStep === "form12" && (
            <CommercialFormFive
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}
          {activeStep === "form13" && (
            <CommercialFormSix
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}
          {/*------------------------------------ check points --------------------------- */}
          {activeStep === "checkPointFormOne" && (
            <CheckPointFormOne
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}

          {activeStep === "checkPointFormTwo" && (
            <CheckPointFormTwo
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}

          {activeStep === "checkPointFormThree" && (
            <CheckPointFormThree
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}

          {activeStep === "checkPointFormFour" && (
            <CheckPointFormFour
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}

          {activeStep === "checkPointFormFive" && (
            <CheckPointFormFive
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}

          {activeStep === "checkPointFormSix" && (
            <CheckPointFormSix
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}

          {activeStep === "checkPointFormSeven" && (
            <CheckPointFormSeven
              handleStepChange={handleStepChange}
              handleOptionSelect={handleOptionSelect}
            />
          )}
        </section>

        {/* FORM FIVE = STEP FOUR */}
        <section>{activeStep === "lastForm" && <ContactForm />}</section>

        {/* progress bar component*/}
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
