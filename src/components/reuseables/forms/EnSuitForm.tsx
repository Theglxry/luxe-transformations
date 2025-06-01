import { residentialFormThree } from "@/constants";
import { YellowButton } from "../button_old/YellowButton";
import { FormProps } from "@/types";

const FormSeven = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  return (
    <div className="contact_form_step_wrapper">
      <h1 className="contact_form_step_wrapper_h1">
        {residentialFormThree[0].title}
      </h1>

      <div className="contact_form_step_list_wrapper">
        {residentialFormThree.map((item, index) => (
          <button
            key={`${index}`}
            className="contact_form_step_list_button"
            onClick={() => {
              handleStepChange("checkPointFormOne");
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

export default FormSeven;
