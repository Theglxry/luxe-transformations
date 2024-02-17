import {
  setActiveStep,
  setSelectedOptions,
} from "@/libs/state/features/FormSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/state/store";
import { useState } from "react";

const useAppLogic = () => {
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
  const dispatch = useDispatch();
  const activeStep = useSelector(
    (state: RootState) => state.formReducer.activeStep
  );
  const selectedOptions = useSelector(
    (state: RootState) => state.formReducer.selectedOptions
  );
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<
    { question: string; answer: string }[]
  >([]);

  // const handleOptionSelect = (option: string, title: string) => {
  //   const newQuestionAndAnswer = { question: title, answer: option };
  //   setQuestionsAndAnswers([...questionsAndAnswers, newQuestionAndAnswer]);
  //   dispatch(setSelectedOptions([...selectedOptions, option]));
  // };

  const handleOptionSelect = (option: string, title?: string) => {
    // Check if title is undefined
    if (title === undefined) {
      // Handle the case where title is undefined, for example:
      console.error("Title is undefined for option:", option);
      return; // Optionally, return or throw an error
    }

    // Now, title is guaranteed to be a string
    const newQuestionAndAnswer = { question: title, answer: option };
    setQuestionsAndAnswers([...questionsAndAnswers, newQuestionAndAnswer]);
    dispatch(setSelectedOptions([...selectedOptions, option]));
  };

  // console.log(questionsAndAnswers, activeStep);

  const handleStepChange = (step: string) => {
    dispatch(setActiveStep(step));
  };

  //-------------progress bar------------
  // const totalSteps = 5;
  // const progressWidth = (formTags.indexOf(activeStep) / (totalSteps - 1)) * 100;

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

    // console.log(currentIndex);
  };

  return [
    selectedOptions,
    questionsAndAnswers,
    handleOptionSelect,
    handleStepChange,
    handleBackButtonClick,
  ];
};

export default useAppLogic;
