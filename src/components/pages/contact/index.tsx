"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  setActiveStep,
  setSelectedOptions,
  setQuestionsAndAnswers,
} from "@/libs/state/features/FormSlice";
import { helpSelect } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/state/store";
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
} from "@/components/reuseables/forms";
import { useState } from "react";

import BorderedNavWrapper from "@/components/layout/wrappers/BorderedNavWrapper/BorderedNavWrapper";

const Homepage = () => {
  const router = useRouter();

  const [step, setstep] = React.useState(null);
  const [clickFrom, setclickFrom] = React.useState(null);

  const clickCancelBtn = () => router.back();

  const clickBackBtn = () => {
    if (clickFrom === "join_team" || clickFrom === "leave_note") {
      setstep(0);
    }
  };

  const clickMain = (key?: any) => {
    setclickFrom(key);
    if (key === "join_team" || key === "leave_note") {
      setstep("CONTACT_US_STEP");
    }
  };

  const [showSuccess, setshowSuccess] = useState<boolean>(false);
  const handleSuccess = () => {
    dispatch(setSelectedOptions([]));
    setshowSuccess(true);
  };

  // START
  const [visitedSteps, setVisitedSteps] = useState<string[]>([]);

  const dispatch = useDispatch();
  const activeStep = useSelector(
    (state: RootState) => state.formReducer.activeStep
  );

  const selectedOptions = useSelector(
    (state: RootState) => state.formReducer.selectedOptions
  );

  const questionsAndAnswers = useSelector(
    (state: RootState) => state.formReducer.questionsAndAnswers
  );

  const handleOptionSelect = (option: string, title?: string) => {
    if (title === undefined) {
      console.error("Title is undefined for option:", option);
      return;
    }
    const newQuestionAndAnswer = { question: title, answer: option };

    dispatch(
      setQuestionsAndAnswers([...questionsAndAnswers, newQuestionAndAnswer])
    );

    dispatch(setSelectedOptions([...selectedOptions, option]));
  };

  const handleStepChange = (step: string) => {
    setVisitedSteps([...visitedSteps, step]);
    dispatch(setActiveStep(step));
  };

  // //----------------- prev button -------------

  const handleBackButtonClick = () => {
    setstep(undefined);

    const visitedIndex = visitedSteps.indexOf(activeStep);

    if (visitedIndex > 0) {
      const prevStep = visitedSteps[visitedIndex - 1];
      dispatch(setActiveStep(prevStep));

      const updatedVisitedSteps = visitedSteps.slice(0, visitedIndex);
      setVisitedSteps(updatedVisitedSteps);

      const updatedOptions = [...selectedOptions];
      updatedOptions.pop();
      dispatch(setSelectedOptions(updatedOptions));
    } else {
      dispatch(setActiveStep("formOne"));
    }
  };

  const resetSteps = () => {
    dispatch(setActiveStep("formOne"));
  };

  const resetSelection = () => {
    dispatch(setSelectedOptions([]));
  };

  useEffect(() => {
    return () => {
      resetSteps();
      resetSelection();
    };
  }, []);

  if (showSuccess) {
    return (
      <BorderedNavWrapper>
        <motion.div className="flex flex-col top-0 left-0  py-[45px] absolute h-screen max-h-screen w-screen gap-x-96 bg-[#0f0f0f] px-[clamp(15px,calc(45/1420*100vw),100px)]">
          <div className="flex flex-col w-full h-full justify-center items-center ">
            <h1 className=" font-bold text-center text-[clamp(70px,calc(160/1420*100vw),250px)] m-0 p-0 font-tt-tunnels text-[#ca8a04] leading-0 ">
              SUCCESS
            </h1>
            <p className="text-center text-[clamp(20px,calc(30/1420*100vw),110px)] font-tt-tunnels text-white mb-[32px] ">
              Thanks for your message, we’ll be in touch within 24 hours.
            </p>

            <button
              className="contact_form_step_list_button"
              onClick={() => {
                setshowSuccess(false);
                dispatch(setActiveStep("formOne"));
              }}>
              <span className="contact_form_step_list_button_text">
                Go back
              </span>
            </button>
          </div>
        </motion.div>
      </BorderedNavWrapper>
    );
  }

  return (
    <>
      <BorderedNavWrapper>
        <motion.div className="flex flex-col top-0 left-0  pt-[15px] sm:pt-[30px]  absolute h-auto overflow-y-auto pb-[100px] sm:pb-0 min-h-screen sm:h-screen max-h-screen w-screen gap-x-96 bg-[#0f0f0f] px-[clamp(15px,calc(45/1420*100vw),100px)]">
          <div className="flex w-full  justify-between ">
            <Link
              href={"/"}
              className={
                activeStep === "formOne"
                  ? undefined
                  : "hidden sm:block absolute top-[calc(100%-130px)]"
              }>
              <Image
                src={"/icons/logo.svg"}
                alt="logo"
                width={123}
                height={54}
                className="w-[clamp(123px,calc(213/1420*100vw),200px)]  h-[clamp(54px,calc(54/1420*100vw),96px)]"
              />
            </Link>

            <motion.button
              whileHover={{ scale: 1.2, rotate: 20 }}
              // onClick={clickBackBtn}
              onClick={handleBackButtonClick}
              style={{
                display: activeStep === "formOne" ? "none" : undefined,
              }}>
              <img
                src="/icons/back_outlined_white.svg"
                className="w-[clamp(50px,calc(60/1420*100vw),80px)]"
              />
            </motion.button>

            <motion.button
              onClick={clickCancelBtn}
              whileHover={{ scale: 1.2, rotate: 20 }}>
              <img
                src="/icons/close_outlined_white.svg"
                className="w-[clamp(50px,calc(60/1420*100vw),80px)]"
              />
            </motion.button>
          </div>

          {/* STARRT */}
          {step !== "CONTACT_US_STEP" ? (
            <>
              <div className="mt-[32px] mb-[20px] flex flex-wrap gap-[20px]">
                {selectedOptions.map((option, index) => (
                  <button
                    type="button"
                    key={index}
                    className="bg-[#282828] text-lg px-6 py-3 rounded-full text-[clamp(20px,calc(20/1420*100vw),40px)] font-tt-tunnels text-white">
                    {option}
                  </button>
                ))}
              </div>
              {activeStep === "lastForm" ? null : (
                <>
                  <section
                    className="flex sm:mt-0 sm:flex-1 px-[5px] sm:px-[30px]  items-start justify-center
                flex-1
              ">
                    <section
                      className="flex-1
           
                flex mt-[40px] sm:mt-[100px]  flex-col sm:items-center sm:justify-center 
                ">
                      {activeStep === "formOne" && (
                        <FormOne
                          helpSelect={helpSelect}
                          handleStepChange={handleStepChange}
                          clickMain={clickMain}
                          resetSelection={resetSelection}
                        />
                      )}
                      {activeStep === "formTwo" && (
                        <FormTwo
                          handleStepChange={handleStepChange}
                          handleOptionSelect={handleOptionSelect}
                        />
                      )}
                      {activeStep === "formThree" && (
                        <Commercial
                          handleStepChange={handleStepChange}
                          handleOptionSelect={handleOptionSelect}
                        />
                      )}
                      {/*------------------------------------- residential forms ------------------ */}
                      {activeStep === "formFour" && (
                        <Residential
                          handleStepChange={handleStepChange}
                          handleOptionSelect={handleOptionSelect}
                        />
                      )}
                      {activeStep === "formFive" && (
                        <ResidentialFormOne
                          handleStepChange={handleStepChange}
                          handleOptionSelect={handleOptionSelect}
                        />
                      )}

                      {activeStep === "formSix" && (
                        <ResidentialFormTwo
                          handleStepChange={handleStepChange}
                          handleOptionSelect={handleOptionSelect}
                        />
                      )}
                      {activeStep === "formSeven" && (
                        <EnSuitForm
                          handleStepChange={handleStepChange}
                          handleOptionSelect={handleOptionSelect}
                        />
                      )}

                      {/*---------------------- commercial forms ------------------ */}
                      {activeStep === "formEight" && (
                        <CommercialFormOne
                          handleStepChange={handleStepChange}
                          handleOptionSelect={handleOptionSelect}
                        />
                      )}
                      {activeStep === "formNine" && (
                        <CommercialFormTwo
                          handleStepChange={handleStepChange}
                          handleOptionSelect={handleOptionSelect}
                        />
                      )}
                      {activeStep === "formTen" && (
                        <CommercialFormThree
                          handleStepChange={handleStepChange}
                          handleOptionSelect={handleOptionSelect}
                        />
                      )}
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

                    {/* progress bar component */}
                  </section>
                </>
              )}
            </>
          ) : null}
          {/* END */}

          {step === "CONTACT_US_STEP" || activeStep === "lastForm" ? (
            <ContactForm
              handleSuccess={handleSuccess}
              activeStep={activeStep}
            />
          ) : null}
        </motion.div>
      </BorderedNavWrapper>
    </>
  );
};

export default Homepage;
