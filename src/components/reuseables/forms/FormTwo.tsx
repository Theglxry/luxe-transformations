import { stepOne } from "@/constants";
import { YellowButton } from "../button_old/YellowButton";
import { FormProps } from "@/types";
import { useEffect } from "react";

const FormTwo = ({
  handleStepChange,
  handleOptionSelect,
  resetSelection,
}: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formThree";
      case 1:
        return "formFour";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (typeof resetSelection === "function") resetSelection();
  }, []);
  return (
    <>
      <div className="contact_form_step_wrapper">
        <h1 className="contact_form_step_wrapper_h1">{stepOne[0].title}</h1>

        <div className="contact_form_step_list_wrapper">
          {stepOne.map((item, index) => {
            return (
              <button
                key={`${index}`}
                onClick={() => {
                  const nextForm = getNextForm(index);
                  handleStepChange(nextForm);
                  handleOptionSelect(item.label, item.title || "");
                }}
                className="contact_form_step_list_button">
                <span className="contact_form_step_list_button_text">
                  {item?.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FormTwo;
