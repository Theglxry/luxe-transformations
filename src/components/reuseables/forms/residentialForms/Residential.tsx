import { residentialForm } from "@/constants";
import { FormProps } from "@/types";

const FormFour = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  const getNextForm = (index: number) => {
    switch (index) {
      case 0:
        return "formFive";
      case 1:
        return "formFive";
      case 2:
        return "checkPointFormOne";
      case 3:
        return "checkPointFormOne";
      default:
        return "";
    }
  };

  return (
    <div className="contact_form_step_wrapper">
      <h1 className="contact_form_step_wrapper_h1">
        {residentialForm[0].title}
      </h1>

      <div className="contact_form_step_list_wrapper">
        {residentialForm.map((item, index) => (
          <button
            key={`${index}`}
            className="contact_form_step_list_button"
            onClick={() => {
              const nextForm = getNextForm(index);
              handleStepChange(nextForm);
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

export default FormFour;
