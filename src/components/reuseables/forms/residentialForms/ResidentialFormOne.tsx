import { residentialFormOne } from "@/constants";
import { YellowButton } from "../../button_old/YellowButton";
import { FormProps } from "@/types";

const FormFive = ({ handleStepChange, handleOptionSelect }: FormProps) => {
  return (
    <div className="contact_form_step_wrapper">
      <h1 className="contact_form_step_wrapper_h1">
        {residentialFormOne[0].title}
      </h1>

      <div className="flex sm:flex-wrap flex-col sm:flex-row   sm:gap-10 justify-center items-center">
        {residentialFormOne.map((item, index) => (
          <button
            key={`${index}`}
            className="contact_form_step_list_button"
            onClick={() => {
              handleStepChange("formSix");
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

export default FormFive;
