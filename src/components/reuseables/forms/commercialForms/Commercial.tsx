import { commercialForm } from "@/constants";
import { YellowButton } from "../../button_old/YellowButton";
import { FormProps } from "@/types";

const FormThree = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formEight";
      case 1:
        return "formNine";
      case 2:
        return "formTen";
      case 3:
        return "form11";

      default:
        return "";
    }
  };

  return (
    <div className="contact_form_step_wrapper">
      <h1 className="contact_form_step_wrapper_h1">
        {commercialForm[0].title}
      </h1>

      <div className="contact_form_step_list_wrapper">
        {commercialForm.map((item, index) => (
          <button
            key={index}
            className="contact_form_step_list_button"
            onClick={() => {
              const nextForm = getNextForm(index);
              handleStepChange(nextForm);
              // handleOptionSelect(item.label, item.title);
              handleOptionSelect(item.label, item.title || "");
            }}>
            <span className="contact_form_step_list_button_text">
              {item?.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormThree;
