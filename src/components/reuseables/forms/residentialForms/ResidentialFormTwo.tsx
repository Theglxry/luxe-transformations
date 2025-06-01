import { residentialFormTwo } from "@/constants";
import { YellowButton } from "../../button_old/YellowButton";
import { FormProps } from "@/types";

const FormSix = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  return (
    <div className="contact_form_step_wrapper">
      <h1 className="contact_form_step_wrapper_h1">
        {residentialFormTwo[0].title}
      </h1>

      <div className="contact_form_step_list_wrapper">
        {residentialFormTwo.map((item, index) => (
          <button
            key={`${index}`}
            className="contact_form_step_list_button"
            onClick={() => {
              handleStepChange("formSeven");
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

export default FormSix;
